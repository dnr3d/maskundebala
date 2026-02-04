import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="content">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-desc">The visual experience you are looking for has been moved or does not exist.</p>

                <Link to="/" className="btn-home">
                    <ArrowLeft size={20} />
                    Back to Portfolio
                </Link>
            </div>

            <style jsx="true">{`
                .not-found-container {
                    height: 100vh;
                    width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8f9fa;
                    color: #000;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .content {
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    padding: 20px;
                }

                .error-code {
                    font-family: var(--font-head);
                    font-size: 15rem;
                    line-height: 0.8;
                    margin: 0;
                    background: linear-gradient(180deg, #000 0%, rgba(0,0,0,0.2) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0px 10px 30px rgba(0,0,0,0.1);
                }

                .error-title {
                    font-family: var(--font-head);
                    font-size: 2rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .error-desc {
                    font-family: var(--font-mono);
                    color: #666;
                    max-width: 400px;
                    margin-bottom: 20px;
                    line-height: 1.6;
                }

                .btn-home {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: #000;
                    color: #fff;
                    padding: 15px 30px;
                    border-radius: 100px;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-family: var(--font-mono);
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-home:hover {
                    gap: 15px;
                    background: #222;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }

                /* Aesthetic Background Grid */
                .not-found-container::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image: 
                        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                }
                
                @media (max-width: 768px) {
                    .error-code { font-size: 8rem; }
                    .error-title { font-size: 1.5rem; }
                }
            `}</style>
        </div>
    );
}
