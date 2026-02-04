import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Pricing() {
  const { language, translations } = useStore();
  const t = translations[language].pricing;
  const [budget, setBudget] = useState(1000);

  const handleCalculate = () => {
    alert(`Starting brief for budget: $${budget}`);
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="grid-12">
          <div className="col-text">
            <h2>{t.title}</h2>
            <p className="mono-text">{t.sub}</p>
          </div>

          <div className="col-interactive glossy">
            <div className="slider-wrapper">
              <label className="mono-text">{t.label}</label>
              <div className="price-display">
                <span>$</span>{budget}
              </div>

              <input
                type="range"
                min="10"
                max="9999"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="range-input"
              />

              <div className="range-labels mono-text">
                <span>$10</span>
                <span>$9999+</span>
              </div>
            </div>

            <button className="calc-btn" onClick={handleCalculate}>
              <Calculator size={18} />
              {t.btn}
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .pricing-section {
          padding: 100px 0;
          background: #ffffff;
          color: #000;
          position: relative;
        }

        /* Subtle grid pattern */
        .pricing-section::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
            background-size: 100px 100px;
            pointer-events: none;
        }

        .col-text {
          grid-column: span 6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative; z-index: 2;
        }

        .col-interactive {
          grid-column: span 6;
          padding: 60px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          background: #fff;
          border: 1px solid #e5e5e5;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          position: relative; z-index: 2;
        }

        .price-display {
          font-size: 4rem;
          font-weight: 900;
          margin: 20px 0;
          font-family: var(--font-head);
          color: #000;
        }

        .range-input {
          width: 100%;
          -webkit-appearance: none;
          height: 4px;
          background: #e5e5e5;
          border-radius: 2px;
          outline: none;
        }

        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .range-input::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          color: #666;
          font-size: 0.8rem;
        }

        .calc-btn {
          background: #000;
          color: white;
          border: none;
          padding: 20px;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.3s;
          text-transform: uppercase;
        }

        .calc-btn:hover {
          background: #333;
        }

        @media (max-width: 768px) {
          .col-text, .col-interactive {
            grid-column: span 12;
          }
          
          .col-interactive {
            padding: 30px;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
