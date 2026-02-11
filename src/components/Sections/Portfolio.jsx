import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { AnimatePresence, motion } from 'framer-motion';

export default function Portfolio() {
  const { projects, language, translations, categories } = useStore();
  const t = translations[language].portfolio;
  const [activeCategory, setActiveCategory] = useState('Branding'); // Default
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter Logic
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Category Tabs (Excluding 'All' if defined in store but not needed, or including it)
  // We'll use the ones defined + 'All' if user wants to see everything
  const tabs = categories || ['Branding', '3D', '3D Animation', '2D Arts', '2D Animation'];

  return (
    <section id="works" className="portfolio-section">
      <div className="container">

        {/* Header & Tabs */}
        <div className="portfolio-header">
          <h2>{t.title}</h2>
          <div className="tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeCategory === tab ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.length === 0 && (
            <div className="empty-state">{t.empty}</div>
          )}
          {filteredProjects.map(project => {
            // Assume it's an image if it has a value, let the img tag handle errors
            const isImage = !!project.img;
            const bgStyle = isImage ? `url(${project.img})` : project.img;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="card-image-wrapper">
                  <div className="card-image" style={{ minHeight: '200px', backgroundColor: '#f0f0f0' }}>
                    {isImage ? (
                      <img
                        src={project.img}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: project.img || '#eee' }}></div>
                    )}
                  </div>

                  <div className="overlay">
                    <span className="view-case">{t.view}</span>
                  </div>
                </div>
                <div className="card-info">
                  <h3>{project.title}</h3>
                  <span className="mono-text">{project.category}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <X size={32} />
              </button>

              <div className="case-study-header">
                <h2>{selectedProject.title}</h2>
                <span className="mono-text">{selectedProject.category}</span>
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="visit-link">
                    {t.visit} <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div className="case-study-body">
                {/* Legacy Support: If no content blocks, show old galleryImages */}
                {(!selectedProject.content || selectedProject.content.length === 0) && selectedProject.galleryImages && (
                  <div className="legacy-gallery">
                    <img src={selectedProject.img} alt="Cover" className="gallery-item" />
                    {selectedProject.galleryImages.map((img, idx) => (
                      <img key={idx} src={img} alt={`Slide ${idx}`} className="gallery-item" />
                    ))}
                  </div>
                )}

                {/* Block Renderer */}
                {selectedProject.content && selectedProject.content.map(block => {
                  if (block.type === 'text') {
                    return (
                      <div key={block.id} className="block-text">
                        <p>{block.value}</p>
                      </div>
                    );
                  }
                  if (block.type === 'image') {
                    return (
                      <div key={block.id} className="block-image">
                        <img src={block.value} alt="Project detail" />
                      </div>
                    );
                  }
                  if (block.type === 'video') {
                    // Simple embed logic
                    let embedUrl = block.value;
                    let isIframe = false;

                    if (block.value.includes('youtube.com') || block.value.includes('youtu.be')) {
                      const videoId = block.value.split('v=')[1]?.split('&')[0] || block.value.split('/').pop();
                      embedUrl = `https://www.youtube.com/embed/${videoId}`;
                      isIframe = true;
                    } else if (block.value.includes('vimeo.com')) {
                      const videoId = block.value.split('/').pop();
                      embedUrl = `https://player.vimeo.com/video/${videoId}`;
                      isIframe = true;
                    }

                    return (
                      <div key={block.id} className="block-video">
                        {isIframe ? (
                          <iframe
                            src={embedUrl}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <video controls playsInline src={block.value} />
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .portfolio-section {
          padding: 100px 0;
          min-height: 100vh;
        }

        .portfolio-section::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
            background-size: 100px 100px;
            pointer-events: none;
        }

        .portfolio-header {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 50px;
          position: relative; z-index: 2;
        }
        
        .portfolio-header h2 { color: #000; }

        .tabs {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .tab-btn {
            background: #fff; 
            border: 1px solid #e5e5e5;
            padding: 10px 25px;
            color: #666;
            border-radius: 30px;
            cursor: pointer;
            transition: 0.3s;
            font-family: var(--font-mono);
            font-size: 0.9rem;
        }

        .tab-btn:hover, .tab-btn.active {
            border-color: #000;
            color: #fff;
            background: #000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        @media (min-width: 1024px) {
            .projects-grid { column-count: 3; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            .projects-grid { column-count: 2; }
        }
        @media (max-width: 767px) {
            .projects-grid { column-count: 1; }
        }

        .projects-grid {
            column-gap: 20px;
            width: 100%;
        }

        .project-card {
            cursor: pointer;
            border-radius: 20px; /* Pinterest rounded style */
            overflow: hidden;
            background: #fff;
            margin-bottom: 20px; /* Spacing for masonry items */
            break-inside: avoid; /* Prevent splitting across columns */
            transform: translateZ(0); /* Hardware accel hook */
            transition: transform 0.3s ease, filter 0.3s ease;
            position: relative;
        }
        
        /* Hover Effect similar to Pinterest zoom/darken */
        .project-card:hover {
            transform: translateY(-4px);
            z-index: 2;
        }

        .card-image-wrapper {
            overflow: hidden;
            width: 100%;
            border-radius: 20px; /* Rounded images */
        }

        .card-image {
            /* Height is now auto-determined by content/aspect ratio if possible, 
               but we set a min-height for consistency if images load slowly */
            min-height: 200px;
            width: 100%;
            position: relative;
            background-color: #f0f0f0;
        }

        /* Overlay text appearing on hover like Pinterest */
        .overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.3);
            display: flex; 
            flex-direction: column;
            align-items: center; 
            justify-content: center;
            opacity: 0; 
            transition: 0.2s;
        }
        .project-card:hover .overlay { opacity: 1; }

        .card-info { 
            padding: 15px 10px;
        }
        .card-info h3 { 
            font-size: 1rem; 
            margin-bottom: 2px; 
            color: #111; 
            font-weight: 600;
        }
        .card-info span { 
            color: #666; 
            font-size: 0.8rem; 
            font-family: var(--font-mono);
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 10000;
            overflow-y: auto;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
            background: rgba(255, 255, 255, 0.95);
        }

        .modal-content {
            width: 100%;
            max-width: 1200px;
            position: relative;
            padding-bottom: 100px;
        }

        .close-btn {
            position: fixed;
            top: 30px;
            right: 30px;
            background: #fff;
            color: #000;
            border: 1px solid #eee;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            z-index: 10001;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transition: 0.3s;
        }
        .close-btn:hover {
            transform: rotate(90deg);
            background: #000;
            color: #fff;
        }

        .case-study-header {
            margin-bottom: 60px;
            text-align: center;
            color: #111;
        }
        .case-study-header h2 { font-size: 3rem; margin-bottom: 10px; }
        .visit-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-top: 20px;
            color: #111;
            border-bottom: 1px solid #111;
            text-decoration: none;
            padding-bottom: 2px;
        }

        .case-study-body {
            display: flex;
            flex-direction: column;
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .block-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #333;
            white-space: pre-wrap;
            font-family: var(--font-mono);
        }

        .block-image img, .legacy-gallery img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            display: block;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05); /* Soft shadow */
        }
        
        .block-video {
            width: 100%;
            aspect-ratio: 16/9;
            background: #f0f0f0;
            border-radius: 8px;
            overflow: hidden;
        }
        .block-video iframe, .block-video video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .legacy-gallery {
            display: flex; flex-direction: column; gap: 40px;
        }

        @media (max-width: 768px) {
            .projects-grid { grid-template-columns: 1fr; }
            .case-study-header h2 { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
