import { useStore } from '../../store/useStore';
import { ArrowRight } from 'lucide-react';
import FloatingShapes from '../UI/FloatingShapes';

export default function Hero() {
  const { language, translations } = useStore();
  const t = translations[language].hero;

  return (
    <section className="hero" id="home">

      {/* Background Video */}
      <div className="hero-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-content"
        >
          <source src="./hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating Glass Shapes */}
      <FloatingShapes />

      <div className="hero-content container">
        <div className="hero-text">
          <div className="headline-container">
            <h1 className="headline-text">{t.headlineFirst}</h1>
            <h1 className="headline-text indent">{t.headlineSecond}</h1>
          </div>
          <p className="subhead mono-text">
            {t.sub}
          </p>

          <div className="cta-group">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.cta} <ArrowRight size={18} />
            </button>
            <button
              className="btn-link"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.about}
            </button>
          </div>
        </div>

        {/* Removed Footer Items as requested */}
        <div className="hero-footer"></div>
      </div>

      <style jsx="true">{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          color: #111; 
          background-color: #000; /* Fallback while video loads */
        }

        .hero-bg {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 0;
            overflow: hidden;
        }

        .hero-bg .video-content {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
        


        .hero-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-text {
            max-width: 550px; /* Reduced from 600px */
        }

        .headline-container {
          display: flex;
          flex-direction: column;
          gap: 15px; /* Explicit gap between lines */
          margin-bottom: 30px;
          position: relative;
          z-index: 20;
        }

        .headline-text {
          font-family: var(--font-head);
          font-size: 5rem;
          line-height: 1.0; 
          color: #ffffff; /* White text */
          margin: 0;
          padding: 0;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3); 
        }
        
        .headline-text.indent {
            margin-left: 40px; 
            font-style: italic; 
            color: #ffffff; /* White text */
        }

        .subhead {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          line-height: 1.6;
          color: #f0f0f0; /* Slightly off-white for subhead */
          margin-bottom: 40px;
          max-width: 400px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
        }
        
        .cta-group {
            display: flex;
            align-items: center;
            gap: 30px;
        }
        
        .btn-primary {
            background: #ffffff;
            color: #000000;
            padding: 20px 40px;
            border-radius: 100px;
            border: 1px solid transparent;
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: var(--font-mono);
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }
        .btn-primary:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.7);
            gap: 20px;
        }
        
        .btn-link {
            background: rgba(255, 255, 255, 0.05); /* Lighter glass */
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 18px 36px;
            border-radius: 100px;
            cursor: pointer;
            font-family: var(--font-mono);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 500;
            color: #ffffff;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .btn-link:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: #ffffff;
            transform: translateY(-2px);
        }

        .hero-footer {
            position: absolute;
            bottom: 40px;
            width: 100%;
            max-width: 1400px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding-right: 40px;
        }
        
        .collection-preview {
            background: rgba(255,255,255,0.7);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            max-width: 300px;
        }
        .collection-preview span {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
        }
        .collection-preview p {
            font-size: 0.9rem;
            color: #555;
        }

        @media (max-width: 768px) {
            .headline { font-size: 3rem; }
            .headline .indent { margin-left: 0; }
            .hero-bg img { object-position: center; }

            .hero-footer {
                position: relative;
                bottom: 0;
                flex-direction: column;
                gap: 20px;
                align-items: flex-start;
                margin-top: 40px;
            }
        }
      `}</style>
    </section>
  );
}
