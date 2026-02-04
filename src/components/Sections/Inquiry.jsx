import Quiz from './Quiz';

export default function Inquiry() {
    return (
        <section id="inquiry" className="inquiry-section">
            <div className="container">
                <div className="grid-12">
                    <div className="col-12">
                        <Quiz />
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .inquiry-section {
                    padding: 100px 0;
                    background: #ffffff;
                    color: #000;
                    position: relative;
                }
                
                /* Subtle grid pattern */
                .inquiry-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-image: 
                        linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
                    background-size: 100px 100px;
                    pointer-events: none;
                }

                .col-12 { grid-column: span 12; display: flex; justify-content: center; position: relative; z-index: 2; }
            `}</style>
        </section>
    );
}
