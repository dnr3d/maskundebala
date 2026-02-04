import { useStore } from '../../store/useStore';
import { motion } from 'framer-motion';
import { Layers, Image, PenTool, Box, Monitor, Code, Star, Download } from 'lucide-react';
import { FaBehance, FaTelegramPlane, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function About() {
  const { language, translations, about: staticAbout } = useStore();
  const t = translations[language].about;

  const getIcon = (name) => {
    if (name.includes('Photoshop')) return <Image size={24} />;
    if (name.includes('Illustrator')) return <PenTool size={24} />;
    if (name.includes('Figma')) return <Layers size={24} />;
    if (name.includes('Blender')) return <Box size={24} />;
    if (name.includes('HTML')) return <Code size={24} />;
    if (name.includes('After')) return <Monitor size={24} />;
    return <Star size={24} />;
  };

  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="about-grid">
          {/* Left Column: Bio */}
          <div className="bio-col">
            <motion.span
              className="tag mono-text"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {t.tag}
            </motion.span>
            <motion.h2
              className="title"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              {t.title}
            </motion.h2>
            <motion.p
              className="desc"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            >
              {t.desc}
            </motion.p>

            <div className="actions-row">
              {staticAbout.cv && (
                <a href={staticAbout.cv} download="Daniyar_CV.pdf" className="download-btn">
                  <Download size={20} /> Download CV
                </a>
              )}

              <div className="links-row">
                <a href={t.links.behance} target="_blank" rel="noopener noreferrer" className="social-btn behance" aria-label="Behance">
                  <FaBehance size={22} />
                </a>
                <a href={t.links.telegram} target="_blank" rel="noopener noreferrer" className="social-btn telegram" aria-label="Telegram">
                  <FaTelegramPlane size={22} />
                </a>
                <a href={t.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
                  <FaLinkedinIn size={22} />
                </a>
                <a href={t.links.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram" aria-label="Instagram">
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="skills-col">
            {t.skills.map((skill, i) => (
              <div className="skill-item" key={i}>
                <div className="skill-head">
                  <div className="skill-name">
                    <span className="icon">{getIcon(skill.name)}</span>
                    {skill.name}
                  </div>
                  <span className="skill-label mono-text">{skill.label}</span>
                </div>
                <div className="progress-bg">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx="true">{`
        .about-section {
          padding: 120px 0;
          background: #ffffff;
          color: #000;
          position: relative;
          overflow: hidden;
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }

        .tag {
            display: block;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #666;
            margin-bottom: 20px;
        }

        .title {
            font-size: 4rem;
            line-height: 1;
            margin-bottom: 30px;
            font-weight: 800;
            white-space: pre-line;
        }

        .desc {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #444;
            margin-bottom: 40px;
            max-width: 90%;
        }

        .actions-row {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .download-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #111;
            color: white;
            padding: 14px 28px;
            border-radius: 100px;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
            font-family: var(--font-mono);
            font-size: 0.9rem;
            text-transform: uppercase;
        }
        .download-btn:hover { background: #333; transform: translateY(-2px); }

        .links-row {
            display: flex;
            gap: 15px;
        }

        .social-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: 0.3s;
            text-decoration: none;
        }

        .social-btn.behance {
            background: #0057ff;
        }
        .social-btn.behance:hover { background: #0046cc; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 87, 255, 0.4); }

        .social-btn.telegram {
            background: #0088cc;
        }
        .social-btn.telegram:hover { background: #0077b3; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 136, 204, 0.4); }

        .social-btn.linkedin {
            background: #0077b5;
        }
        .social-btn.linkedin:hover { background: #006396; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 119, 181, 0.4); }

        .social-btn.instagram {
            background: #E1306C;
        }
        .social-btn.instagram:hover { background: #C13584; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(225, 48, 108, 0.4); }

        /* Skills */
        .skills-col {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .skill-item {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .skill-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1rem;
            font-weight: 600;
        }

        .skill-name {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .icon { opacity: 0.7; }

        .skill-label {
            font-size: 0.8rem;
            color: #888;
            background: #f5f5f5;
            padding: 4px 8px;
            border-radius: 6px;
        }

        .progress-bg {
            width: 100%;
            height: 6px;
            background: #f0f0f0;
            border-radius: 6px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: #000;
            border-radius: 6px;
        }

        @media (max-width: 1000px) {
            .about-grid { grid-template-columns: 1fr; gap: 50px; }
            .title { font-size: 3rem; }
            .desc { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
