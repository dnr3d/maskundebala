import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Contact() {
  const { contact, language, translations } = useStore();
  const t = translations[language].contact;
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <span className="mono-text tag">{t.tag}</span>
          <h2 style={{ whiteSpace: 'pre-line' }}>{t.title}</h2>

          <div className="relative">
            <a href={`mailto:${contact.email}`} onClick={handleCopy} className="email-link">
              {contact.email}
              {copied ? <Check size={40} color="#4ade80" /> : <ArrowRight size={40} className="arrow" />}
            </a>
            {copied && <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm mono-text text-[#4ade80]">Email copied to clipboard!</span>}
          </div>

          <div className="contact-info mono-text">
            <p>Based in {contact.location}</p>
            <p>{t.location}</p>
            <a href="/#/admin" style={{ opacity: 0.1, color: 'inherit', textDecoration: 'none' }}>Admin</a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          padding: 150px 0;
          background: #ffffff;
          color: #000;
          position: relative;
        }

        /* Subtle grid pattern */
        .contact-section::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
            background-size: 100px 100px;
            pointer-events: none;
        }

        .contact-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative; z-index: 2;
        }
        
        .tag { color: #555; }

        h2 {
          font-size: 5rem;
          margin: 20px 0 60px;
          line-height: 1;
          color: #000;
        }

        .email-link {
          font-size: 3rem;
          color: #000;
          text-decoration: none;
          border-bottom: 2px solid rgba(0,0,0,0.1);
          padding-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: 0.3s;
        }

        .email-link:hover {
          border-color: #000;
          gap: 30px;
        }
        
        .arrow { color: #000; }

        .contact-info {
          margin-top: 80px;
          color: #666;
          display: flex;
          gap: 40px;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 3rem;
          }
          .email-link {
            font-size: 1.5rem;
          }
          .contact-info {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
