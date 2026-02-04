import { useStore } from '../../store/useStore';
import { Check, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
    const { language, translations } = useStore();
    const t = translations[language].services;

    const scrollToInquiry = (pkgName) => {
        const inquirySection = document.getElementById('inquiry');
        if (inquirySection) {
            inquirySection.scrollIntoView({ behavior: 'smooth' });
            // Ideally we would pre-fill the form subject, but for now just scrolling
        }
    };

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header">
                    <span className="mono-text">{t.sub}</span>
                    <h2>{t.title}</h2>
                </div>

                <div className="services-grid">
                    {t.packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            className={`service-card ${pkg.feature ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >


                            <div className="card-header">
                                <span className="category-tag">{pkg.subtitle}</span>
                                <h3>{pkg.title}</h3>
                                <p className="target-audience">For: {pkg.for}</p>
                            </div>

                            <p className="description">{pkg.desc}</p>

                            <div className="divider"></div>

                            <ul className="features-list">
                                {pkg.includes.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="check-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="val-box">
                                <p>"{pkg.value}"</p>
                            </div>

                            <button className="cta-btn" onClick={() => scrollToInquiry(pkg.title)}>
                                Get Started <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
                .services-section {
                padding: 100px 0;
            background: #ffffff;
            color: #000;
                }

            .services-header {
                margin - bottom: 60px;
            text-align: center;
                }

            .services-header h2 {
                font - size: 3rem;
            margin-top: 10px;
            color: #000;
                }

            .services-grid {
                display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            align-items: flex-start;
                }

            .service-card {
                background: #ffffff;
            border: 1px solid #e5e5e5;
            border-radius: 16px;
            padding: 40px;
            position: relative;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            height: 100%;
                }

            .service-card:hover {
                border - color: #000;
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }

            .card-header {margin - bottom: 20px; }

            .category-tag {
                font - family: var(--font-mono);
            color: #666;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
                }

            .service-card h3 {
                font - size: 1.8rem;
            margin: 10px 0;
            color: #000;
                }

            .target-audience {
                font - size: 0.9rem;
            color: #555;
                }

            .description {
                color: #333;
            line-height: 1.5;
            margin-bottom: 30px;
            flex-grow: 1; 
                }

            .divider {
                height: 1px;
            background: #eee;
            width: 100%;
            margin-bottom: 30px;
                }

            .features-list {
                list - style: none;
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
                }

            .features-list li {
                display: flex;
            gap: 10px;
            align-items: flex-start;
            font-family: var(--font-mono);
            font-size: 0.9rem;
            color: #333;
                }

            .check-icon {
                color: #000;
            flex-shrink: 0;
            margin-top: 2px;
                }

            .val-box {
                background: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 30px;
            font-style: italic;
            color: #555;
            font-size: 0.9rem;
            border-left: 2px solid #000;
                }

            .cta-btn {
                width: 100%;
            padding: 16px;
            background: #000;
            color: white;
            border: none;
            border-radius: 100px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: 0.3s;
            font-family: var(--font-mono);
            text-transform: uppercase;
            font-size: 0.9rem;
                }

            .cta-btn:hover {
                background: #333;
            transform: translateY(-2px);
                }

            @media (max-width: 768px) {
                    .services - header h2 {font - size: 2rem; }
                }
            `}</style>
        </section >
    );
}
