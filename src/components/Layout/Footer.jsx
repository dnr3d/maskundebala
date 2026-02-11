import { ArrowUp, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-content">
          <div className="copyright font-mono">
            © 2026 maskundebala. All rights reserved.
          </div>

          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link"><Instagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={20} /></a>
            <a href="https://t.me/maskundebala" target="_blank" rel="noreferrer" className="social-link"><Send size={20} /></a>
          </div>

          <button className="back-to-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Hidden Admin Link */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0,
          transition: 'opacity 0.3s',
          zIndex: 100
        }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
        >
          <a href="/#/admin" style={{ color: '#555', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px' }}>ADMIN</a>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 40px 0;
          margin-top: 100px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        /* Center logic: If wrapped, it centers, but user wants icons in middle? 
           Based on request "icons in middle", normally means between copyright and back-to-top.
           Flex space-between does this naturally. 
           But if he wants them absolutely centered:
        */
        
        .socials {
            display: flex;
            gap: 20px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        @media (max-width: 768px) {
            .socials {
                position: static;
                transform: none;
                order: 3;
                width: 100%;
                justify-content: center;
            }
            .footer-content {
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
        }

        .social-link {
          color: var(--text-secondary);
          transition: 0.3s;
        }

        .social-link:hover {
          color: var(--text-primary);
        }

        .back-to-top {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .back-to-top:hover {
          background: white;
          color: black;
        }
      `}</style>
    </footer>
  );
}
