import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Trash2, Plus, Pencil } from 'lucide-react';

export default function ProjectManager() {
    const { projects, deleteProject, categories, addCategory, deleteCategory } = useStore();
    const navigate = useNavigate();
    const [newCat, setNewCat] = useState('');

    const handleAddCategory = () => {
        if (newCat && !categories.includes(newCat)) {
            addCategory(newCat);
            setNewCat('');
        }
    };

    return (
        <div className="admin-section">
            <div className="header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2>Portfolio Projects</h2>
                <button onClick={() => navigate('/admin/project/new')} className="btn-primary">
                    <Plus size={16} /> Add New Project
                </button>
            </div>

            <div className="grid-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>
                {/* Categories Column */}
                <div className="col-form" style={{ gridColumn: 'span 4' }}>
                    <div className="admin-form">
                        <h3>Categories</h3>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <input
                                type="text"
                                placeholder="New Category"
                                value={newCat}
                                onChange={(e) => setNewCat(e.target.value)}
                            />
                            <button onClick={handleAddCategory} className="btn-primary" style={{ padding: '0 10px' }}><Plus size={16} /></button>
                        </div>
                        <ul className="cat-list">
                            {categories && categories.map(cat => (
                                <li key={cat} className="cat-item">
                                    <span>{cat}</span>
                                    <button onClick={() => deleteCategory(cat)} className="btn-icon delete"><Trash2 size={14} /></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Projects Column */}
                <div className="col-list" style={{ gridColumn: 'span 8' }}>
                    <h3>Current Projects</h3>
                    <ul className="project-list">
                        {projects.map((p) => (
                            <li key={p.id} className="project-item">
                                <div className="p-img-preview" style={{ background: p.img && (p.img.startsWith('data:') || p.img.startsWith('http')) ? `url(${p.img})` : p.img }} />
                                <div className="p-info">
                                    <strong>{p.title}</strong>
                                    <span>{p.category}</span>
                                </div>
                                <div className="p-actions">
                                    <button onClick={() => navigate(`/admin/project/${p.id}`)} className="btn-icon edit"><Pencil size={16} /></button>
                                    <button onClick={() => deleteProject(p.id)} className="btn-icon delete"><Trash2 size={16} /></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx="true">{`
        .admin-section { padding: 20px; color: #111; }
        .col-form { grid-column: span 4; }
        .col-list { grid-column: span 12; }
        .admin-form { display: flex; flex-direction: column; gap: 10px; background: #ffffff; padding: 20px; border-radius: 8px; position: sticky; top: 20px; border: 1px solid #e5e5e5; }
        
        input[type="text"], select, textarea { 
            background: #f9f9f9; 
            border: 1px solid #ddd; 
            color: #000; 
            padding: 10px; 
            border-radius: 4px; 
            font-family: inherit;
        }
        
        textarea { resize: vertical; }
        
        .hint { font-size: 0.8rem; color: #666; margin-bottom: 5px; }

        .hidden-input { display: none; }
        .upload-btn { background: #eee; color: #000; padding: 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px dashed #ccc; }
        .preview-box { width: 100%; height: 150px; background: #f9f9f9; border-radius: 4px; overflow: hidden; margin-top: 5px; border: 1px solid #eee; }
        .preview-box img { width: 100%; height: 100%; object-fit: cover; }
        .project-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        .project-item { display: flex; align-items: center; background: #ffffff; padding: 15px; border-radius: 4px; gap: 15px; border: 1px solid #e5e5e5; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
        .p-img-preview { width: 50px; height: 50px; border-radius: 4px; background-size: cover !important; background-position: center !important; background-color: #eee; }
        .p-info { flex: 1; display: flex; flex-direction: column; }
        .p-actions { display: flex; gap: 5px; }
        .btn-icon { background: #f0f0f0; border: none; cursor: pointer; padding: 8px; border-radius: 4px; color: #666; }
        
        /* Cropper Styles */
        .crop-modal {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.8);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .crop-container {
            position: relative;
            width: 80%;
            height: 70%;
            background: #fff;
        }
        .crop-controls {
            margin-top: 20px;
            display: flex;
            gap: 20px;
            width: 300px;
            align-items: center;
        }
        .zoom-range { width: 100%; }
        .btn-crop-confirm { background: black; color: white; padding: 10px 20px; border-radius: 30px; border: none; font-weight: bold; cursor: pointer; display: flex; gap: 5px; align-items: center; }

        @media (max-width: 1000px) { .col-form, .col-list { grid-column: span 12 !important; } }
        .cat-list { list-style: none; margin-top: 10px; display: flex; flex-direction: column; gap: 5px; }
        .cat-item { display: flex; justify-content: space-between; align-items: center; padding: 8px; background: #f9f9f9; border-radius: 4px; border: 1px solid #eee; }
      `}</style>
        </div>
    );
}
