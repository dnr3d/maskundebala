import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { ArrowLeft, Save, Type, Image as ImageIcon, Trash2, ArrowUp, ArrowDown, Plus, Video, Loader } from 'lucide-react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

export default function ProjectEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { projects, updateProject, addProject, categories } = useStore();
    const [isUploading, setIsUploading] = useState(false);

    // Local State
    const [project, setProject] = useState({
        title: '',
        category: 'Branding',
        img: '',
        link: '',
        content: [] // Array of { id, type, value }
    });

    // Load Project Data
    useEffect(() => {
        if (id && id !== 'new') {
            const found = projects.find(p => p.id === parseInt(id) || p.id === id);
            if (found) {
                // Migration: Convert legacy galleryImages to Image blocks if content is empty
                let initialContent = found.content || [];
                if (initialContent.length === 0 && found.galleryImages && found.galleryImages.length > 0) {
                    initialContent = found.galleryImages.map(url => ({
                        id: crypto.randomUUID(),
                        type: 'image',
                        value: url
                    }));
                }
                setProject({ ...found, content: initialContent });
            }
        }
    }, [id, projects]);

    const uploadFile = async (file) => {
        if (!file) return null;
        setIsUploading(true);
        try {
            const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            return downloadURL;
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed!");
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    // Handlers
    const handleSave = async () => {
        if (id && id !== 'new') {
            await updateProject(project.id, project);
        } else {
            await addProject({ ...project, id: Date.now() }); // Date.now will be overwritten by Firestore ID logic in store usually, but ok
        }
        alert('Project Saved!');
        navigate('/admin');
    };

    const addBlock = (type) => {
        setProject(prev => ({
            ...prev,
            content: [
                ...prev.content,
                { id: crypto.randomUUID(), type, value: '' }
            ]
        }));
    };

    const updateBlock = (blockId, value) => {
        setProject(prev => ({
            ...prev,
            content: prev.content.map(b => b.id === blockId ? { ...b, value } : b)
        }));
    };

    const handleBlockImageUpload = async (blockId, file) => {
        const url = await uploadFile(file);
        if (url) {
            updateBlock(blockId, url);
        }
    };

    const moveBlock = (index, direction) => {
        const newContent = [...project.content];
        if (direction === -1 && index > 0) {
            [newContent[index], newContent[index - 1]] = [newContent[index - 1], newContent[index]];
        } else if (direction === 1 && index < newContent.length - 1) {
            [newContent[index], newContent[index + 1]] = [newContent[index + 1], newContent[index]];
        }
        setProject(prev => ({ ...prev, content: newContent }));
    };

    const removeBlock = (blockId) => {
        if (confirm('Delete this block?')) {
            setProject(prev => ({
                ...prev,
                content: prev.content.filter(b => b.id !== blockId)
            }));
        }
    };

    return (
        <div className="editor-container">
            {/* Header */}
            <header className="editor-header">
                <div className="left">
                    <button onClick={() => navigate('/admin')} className="btn-icon">
                        <ArrowLeft size={20} />
                    </button>
                    <h1>{id === 'new' ? 'New Project' : 'Edit Project'}</h1>
                    {isUploading && <span style={{ marginLeft: 10, color: '#007bff', display: 'flex', alignItems: 'center', gap: 5 }}><Loader className="spin" size={16} /> Uploading...</span>}
                </div>
                <button onClick={handleSave} className="btn-save" disabled={isUploading}>
                    <Save size={18} /> Save Changes
                </button>
            </header>

            <div className="editor-layout">
                {/* Main Content Area (Center) */}
                <div className="editor-main">
                    <div className="canvas">
                        {project.content.length === 0 && (
                            <div className="empty-state">
                                <p>Canvas is empty. Add blocks from the right sidebar.</p>
                            </div>
                        )}

                        {project.content.map((block, index) => (
                            <div key={block.id} className="block-wrapper">
                                <div className="block-controls">
                                    <span className="block-type">{block.type}</span>
                                    <div className="actions">
                                        <button onClick={() => moveBlock(index, -1)} disabled={index === 0}><ArrowUp size={14} /></button>
                                        <button onClick={() => moveBlock(index, 1)} disabled={index === project.content.length - 1}><ArrowDown size={14} /></button>
                                        <button onClick={() => removeBlock(block.id)} className="btn-delete"><Trash2 size={14} /></button>
                                    </div>
                                </div>

                                <div className="block-content">
                                    {block.type === 'text' && (
                                        <textarea
                                            value={block.value}
                                            onChange={(e) => updateBlock(block.id, e.target.value)}
                                            placeholder="Type your story here..."
                                            rows={4}
                                        />
                                    )}
                                    {block.type === 'image' && (
                                        <div className="image-block">
                                            <div style={{ display: 'flex', gap: 10 }}>
                                                <input
                                                    type="text"
                                                    value={block.value}
                                                    onChange={(e) => updateBlock(block.id, e.target.value)}
                                                    placeholder="Paste Image URL..."
                                                    style={{ flex: 1 }}
                                                />
                                                <label className="btn-icon" style={{ cursor: 'pointer', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', width: '40px', border: '1px solid #ddd' }}>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={(e) => handleBlockImageUpload(block.id, e.target.files[0])}
                                                    />
                                                    <ImageIcon size={18} />
                                                </label>
                                            </div>
                                            {block.value && (
                                                <div className="img-preview">
                                                    <img src={block.value} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {block.type === 'video' && (
                                        <div className="video-block">
                                            <input
                                                type="text"
                                                value={block.value}
                                                onChange={(e) => updateBlock(block.id, e.target.value)}
                                                placeholder="Paste YouTube, Vimeo, or MP4 URL..."
                                            />
                                            {block.value && (
                                                <div className="vid-preview">
                                                    <p style={{ fontSize: '0.8rem', color: '#888' }}>Video Preview: {block.value} (Check frontend for actual playback)</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar (Settings & Tools) */}
                <aside className="editor-sidebar">
                    <div className="sidebar-section">
                        <h3>Content Blocks</h3>
                        <div className="tools-grid">
                            <button className="tool-btn" onClick={() => addBlock('image')}>
                                <ImageIcon size={20} /> Image
                            </button>
                            <button className="tool-btn" onClick={() => addBlock('text')}>
                                <Type size={20} /> Text
                            </button>
                            <button className="tool-btn" onClick={() => addBlock('video')}>
                                <Video size={20} /> Video
                            </button>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h3>Project Settings</h3>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                value={project.title}
                                onChange={e => setProject({ ...project, title: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select
                                value={project.category}
                                onChange={e => setProject({ ...project, category: e.target.value })}
                            >
                                {categories && categories.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Cover Image</label>
                            <div className="upload-row" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <input
                                    type="text"
                                    value={project.img}
                                    onChange={e => setProject({ ...project, img: e.target.value })}
                                    placeholder="Image URL"
                                    style={{ flex: 1 }}
                                />
                                <label className="btn-icon" style={{ cursor: 'pointer', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', width: '40px', color: 'white' }}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={async (e) => {
                                            const url = await uploadFile(e.target.files[0]);
                                            if (url) {
                                                setProject(prev => ({ ...prev, img: url }));
                                            }
                                        }}
                                    />
                                    <ImageIcon size={18} />
                                </label>
                            </div>
                            {project.img && <img src={project.img} className="sidebar-preview" alt="Cover" />}
                        </div>
                        <div className="form-group">
                            <label>Live Link</label>
                            <input
                                type="text"
                                value={project.link}
                                onChange={e => setProject({ ...project, link: e.target.value })}
                            />
                        </div>
                    </div>
                </aside>
            </div>

            <style jsx="true">{`
                .editor-container {
                    min-height: 100vh;
                    background: #f8f9fa;
                    color: #111;
                    display: flex;
                    flex-direction: column;
                }
                
                .editor-header {
                    height: 60px;
                    border-bottom: 1px solid #e5e5e5;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    background: #ffffff;
                }
                
                .left { display: flex; align-items: center; gap: 15px; }
                .left h1 { font-size: 1.2rem; margin: 0; color: #000; }
                
                .btn-icon { background: none; border: none; color: #666; cursor: pointer; padding: 5px; }
                .btn-icon:hover { color: #000; }
                
                .btn-save {
                    background: #000; color: white; border: none; padding: 8px 16px; border-radius: 4px;
                    font-weight: bold; cursor: pointer; display: flex; gap: 8px; align-items: center;
                }
                .btn-save:hover { background: #333; }

                .editor-layout {
                    flex: 1;
                    display: flex;
                    overflow: hidden;
                }

                .editor-main {
                    flex: 1;
                    overflow-y: auto;
                    padding: 40px;
                    background: #f8f9fa;
                    display: flex;
                    justify-content: center;
                }

                .canvas {
                    width: 100%;
                    max-width: 800px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding-bottom: 100px;
                }
                
                .empty-state {
                    text-align: center; color: #666; margin-top: 100px; border: 2px dashed #ccc; padding: 50px; border-radius: 8px;
                }

                .block-wrapper {
                    background: #ffffff;
                    border: 1px solid #e5e5e5;
                    border-radius: 6px;
                    padding: 0;
                    position: relative;
                    transition: border-color 0.2s;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }
                .block-wrapper:hover { border-color: #ccc; }

                .block-controls {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 8px 12px;
                    background: #fdfdfd;
                    border-bottom: 1px solid #eee;
                    border-radius: 6px 6px 0 0;
                }
                
                .block-type { font-size: 0.75rem; text-transform: uppercase; color: #666; font-weight: bold; }
                .actions { display: flex; gap: 5px; }
                .actions button { background: none; border: none; color: #888; cursor: pointer; padding: 4px; border-radius: 4px; }
                .actions button:hover { background: #eee; color: #000; }
                .actions .btn-delete:hover { background: #fee2e2; color: #991b1b; }

                .block-content { padding: 15px; }
                
                textarea {
                    width: 100%; background: none; border: none; color: #111; font-family: inherit; font-size: 1rem; resize: vertical; line-height: 1.5; outline: none;
                }
                
                .image-block input, .video-block input {
                    width: 100%; background: #f9f9f9; border: 1px solid #ddd; padding: 8px; color: #000; border-radius: 4px; margin-bottom: 10px;
                }
                .img-preview img {
                    width: 100%; border-radius: 4px; border: 1px solid #eee;
                }

                .editor-sidebar {
                    width: 300px;
                    background: #ffffff;
                    border-left: 1px solid #e5e5e5;
                    padding: 20px;
                    overflow-y: auto;
                }

                .sidebar-section { margin-bottom: 30px; }
                .sidebar-section h3 { font-size: 0.9rem; color: #666; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 1px; }

                .tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                .tool-btn {
                    display: flex; flex-direction: column; align-items: center; gap: 10px;
                    background: #f9f9f9; border: 1px solid #eee; color: #444;
                    padding: 15px; border-radius: 6px; cursor: pointer; transition: 0.2s;
                }
                .tool-btn:hover { background: #f0f0f0; color: #000; border-color: #ddd; }

                .form-group { margin-bottom: 15px; }
                .form-group label { display: block; font-size: 0.8rem; color: #666; margin-bottom: 5px; }
                .form-group input, .form-group select {
                    width: 100%; background: #f9f9f9; border: 1px solid #ddd; color: #000; padding: 8px; border-radius: 4px;
                }
                .sidebar-preview { width: 100%; height: 150px; object-fit: cover; margin-top: 5px; border-radius: 4px; border: 1px solid #eee; }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .spin { animation: spin 1s linear infinite; }

            `}</style>
        </div>
    );
}
