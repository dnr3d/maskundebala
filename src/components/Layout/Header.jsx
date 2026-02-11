import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Added motion
import Logo from '../UI/Logo';
import LanguageSwitcher from '../UI/LanguageSwitcher';
import { useStore } from '../../store/useStore';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, translations } = useStore();
  const t = translations[language].nav;

  const navLinks = [
    { label: t.works, href: '#works' },
    { label: t.services, href: '#services' },
    { label: t.about, href: '#about' },
    { label: t.contact, href: '#contact' },
  ];

  // Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 30 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-wrapper">
          <Logo width={120} height="auto" className="brand-logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                // Extract id from '#works' -> 'works'
                const id = link.href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Toggle Trigger */}
        <button className="menu-btn mobile-only" onClick={() => setIsOpen(true)}>
          <Menu size={24} color="#fff" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mobile-nav"
          >
            {/* Close Button */}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>

            <ul>
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      const id = link.href.substring(1);
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants} style={{ marginTop: 20 }}>
                <LanguageSwitcher />
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .header {
          position: absolute; /* Floating header for Hero image */
          top: 0;
          left: 0;
          width: 100%;
          padding: 25px 0;
          z-index: 100;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          color: #fff; /* White Logo */
        }
        
        .brand-logo { color: #fff; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }

        /* Desktop Styles */
        .desktop-menu {
            display: flex;
            align-items: center;
            gap: 40px;
        }

        .nav-link {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.9);
            font-family: var(--font-mono);
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 1px;
            transition: 0.3s;
            font-weight: 500;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5); /* Shadow for legibility */
        }

        .nav-link:hover {
            color: #fff;
            transform: translateY(-1px);
            text-shadow: 0 2px 8px rgba(255,255,255,0.4);
        }

        /* Mobile Styles */
        .mobile-only { display: none; }
        .menu-btn { background: none; border: none; cursor: pointer; }
        
        .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #ffffff;
            z-index: 200; /* Higher than header */
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .close-btn {
            position: absolute;
            top: 30px;
            right: 20px;
            background: none;
            border: none;
            color: #000;
            cursor: pointer;
            padding: 10px;
        }

        .mobile-nav ul {
            list-style: none;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 40px;
            padding: 0;
        }

        .mobile-nav a {
            font-family: var(--font-head);
            font-size: 3rem;
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;
        }

        @media (max-width: 768px) {
            .desktop-menu { display: none; }
            .mobile-only { display: block; }
        }
      `}</style>
    </header>
  );
}
