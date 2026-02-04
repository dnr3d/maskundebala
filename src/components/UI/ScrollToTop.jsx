import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button
                className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>

            <style jsx="true">{`
                .scroll-to-top {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    background: #ffffff; /* White Background */
                    color: #000; /* Black Icon */
                    border: 1px solid #e5e5e5;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                    z-index: 999;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                .scroll-to-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .scroll-to-top:hover {
                    background: #f0f0f0;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
                }

                @media (max-width: 768px) {
                    .scroll-to-top {
                        bottom: 20px;
                        right: 20px;
                        width: 40px;
                        height: 40px;
                    }
                }
            `}</style>
        </>
    );
}
