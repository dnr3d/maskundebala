import { useStore } from '../../store/useStore';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useStore();
  const languages = ['ENG', 'RUS', 'KAZ'];

  return (
    <div className="lang-switcher">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`lang-btn ${language === lang ? 'active' : ''}`}
        >
          {language === lang && (
            <motion.div
              layoutId="active-pill"
              className="active-bg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="lang-text">{lang}</span>
        </button>
      ))}

      <style jsx="true">{`
        .lang-switcher {
          display: inline-flex; /* Shrink to fit content */
          background: rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
          padding: 4px;
          border-radius: 100px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          gap: 0; 
        }

        .lang-btn {
          position: relative;
          background: none;
          border: none;
          width: 60px;
          min-width: 60px; /* Force minimum width */
          flex: 0 0 60px; /* Prevent flex growing/shrinking */
          padding: 8px 0;
          cursor: pointer;
          border-radius: 100px;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lang-text {
            position: relative;
            z-index: 2;
            font-family: var(--font-mono);
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            color: #000; /* Black for maximum visibility */
            transition: color 0.3s;
        }

        .lang-btn:hover .lang-text {
            color: #000;
        }

        .lang-btn.active .lang-text {
            color: #fff; /* White text on black pill */
        }

        /* The sliding pill */
        :global(.active-bg) {
            position: absolute;
            inset: 0;
            background: #000; /* Black pill */
            border-radius: 100px;
            z-index: 1;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
