import { motion } from 'framer-motion';
import { MessageSquare, Palette, PenTool, Wrench, Rocket } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Process() {
    const { language, translations } = useStore();
    const t = translations[language].process;

    const icons = [<MessageSquare size={24} />, <Palette size={24} />, <PenTool size={24} />, <Wrench size={24} />, <Rocket size={24} />];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="process-section">
            <div className="container">
                <div className="header-center">
                    <span className="mono-text">{t.sub}</span>
                    <h2>{t.title}</h2>
                </div>

                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="line"></div>
                    {t.steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="timeline-item"
                            variants={itemVariants}
                        >
                            <div className="step-content">
                                <span className="step-num">{step.num}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            <div className="step-marker">
                                {icons[i]}
                            </div>
                            <div className="spacer"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx="true">{`
            .process-section {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 100px 0;
                background: #ffffff;
                color: #000;
                overflow: hidden;
                position: relative;
            }

            /* Subtle grid pattern */
            .process-section::before {
                content: '';
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background-image:
                linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
                background-size: 100px 100px;
                pointer-events: none;
            }

            .header-center {
                text-align: center;
                margin-bottom: 80px;
                position: relative; z-index: 2;
            }

            .header-center h2 {
                font-size: 3rem;
                margin-top: 10px;
                color: #000;
            }

            .timeline {
                position: relative;
                max-width: 1000px;
                margin: 0 auto;
                z-index: 2;
                padding: 20px 0;
            }

            .line {
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                background: #e5e5e5;
                transform: translateX(-50%);
            }

            .timeline-item {
                display: flex;
                align-items: center;
                margin-bottom: 60px;
                position: relative;
                z-index: 1;
            }

            /* Alternate layout */
            .timeline-item:nth-child(even) {
                flex-direction: row-reverse;
            }

            .timeline-item:nth-child(odd) .step-content {
                text-align: right;
            }

            .step-content {
                flex: 1;
                padding: 0 40px;
            }

            .spacer {
                flex: 1;
            }

            .step-marker {
                width: 60px;
                height: 60px;
                background: #fff;
                border: 2px solid #e5e5e5;
                color: #000;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                line-height: 0;
                position: relative;
                z-index: 2;
                transition: 0.3s;
                box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            }

            .timeline-item:hover .step-marker {
                border-color: #000;
                background: #000;
                color: #fff;
                transform: scale(1.1);
            }

            .step-num {
                font-family: var(--font-mono);
                color: #000;
                font-size: 3rem;
                font-weight: 700;
                opacity: 0.1;
                line-height: 1;
                display: block;
                margin-bottom: -10px;
            }

            h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: #000;
            }

            p {
                color: #555;
                line-height: 1.6;
            }

            @media (max-width: 768px) {
                .line {
                    left: 30px;
                }

                .timeline-item {
                    flex-direction: row !important;
                    margin-bottom: 40px;
                }

                .spacer {display: none; }

                .step-marker {
                    margin-right: 20px;
                    flex-shrink: 0;
                }

                .step-content {
                    padding: 0;
                    text-align: left !important;
                    flex: 1;
                }

                .header-center h2 {font-size: 2rem; }
            }
            `}</style>
        </section>
    );
}
