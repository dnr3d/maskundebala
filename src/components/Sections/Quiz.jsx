import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Send, Palette, Box, Globe, Package, Sparkles, CheckCircle, Folder, Lightbulb, Coins, Banknote, Gem, Handshake, Zap, Calendar, CalendarDays, Coffee } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Quiz() {
    const { addInquiry, language, translations } = useStore();
    const t = translations[language].quiz;
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [contact, setContact] = useState({ name: '', email: '', phone: '' });

    const handleAnswer = (key, value) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        setTimeout(() => setStep(prev => prev + 1), 300);
    };

    const submitQuiz = async (e) => {
        e.preventDefault();
        try {
            await addInquiry({
                type: 'Quiz Result',
                firstName: contact.name, // Mapping single name to firstName for list compatibility
                lastName: '',
                email: contact.email,
                phone: contact.phone,
                budget: answers.budget,
                task: answers.task,
                deadline: answers.deadline,
                references: answers.ref,
                comment: `Quiz Results:\nTask: ${answers.task}
Budget: ${answers.budget}
Deadline: ${answers.deadline}
Ref: ${answers.ref}`
            });
            setStep(6);
        } catch (error) {
            console.error("Quiz Error:", error);
            alert("Ошибка отправки: " + (error.message || "Unknown error"));
        }
    };

    const variants = {
        enter: { x: 50, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 }
    };

    // Icons map because icons can't be in JSON store easily
    const getIcon = (i) => {
        const icons = [<Palette size={20} />, <Box size={20} />, <Globe size={20} />, <Package size={20} />, <Sparkles size={20} />];
        return icons[i] || <Check size={20} />;
    }

    return (
        <div className="quiz-container">
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="quiz-step intro">
                        <h2>{t.introTitle}</h2>
                        <p>{t.introDesc}</p>
                        <button className="start-btn" onClick={() => setStep(1)}>
                            {t.btnStart} <ChevronRight />
                        </button>
                    </motion.div>
                )}

                {step >= 1 && step <= 4 && (
                    <motion.div
                        key={step}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="quiz-step question"
                    >
                        <div className="progress-bar">
                            <div className="fill" style={{ width: `${(step / 4) * 100}%` }}></div>
                        </div>
                        <h3>{t.questions[step - 1].question}</h3>
                        <div className="options-grid">
                            {t.questions[step - 1].options.map((opt, i) => (
                                <button key={i} className="option-btn" onClick={() => handleAnswer(t.questions[step - 1].id, opt)}>
                                    <span className="icon"><Check size={20} /></span>
                                    <span className="label">{opt}</span>
                                </button>
                            ))}
                        </div>
                        <button className="back-btn" onClick={() => setStep(prev => prev - 1)}>
                            <ChevronLeft size={16} /> Back
                        </button>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="quiz-step contact-form">
                        <h3>{t.formTitle}</h3>
                        <p>{t.formDesc}</p>
                        <form onSubmit={submitQuiz}>
                            <input
                                required placeholder={t.placeholders.name}
                                value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })}
                            />
                            <input
                                required placeholder={t.placeholders.email} type="email"
                                value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })}
                            />
                            <input
                                placeholder={t.placeholders.phone} type="tel"
                                value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })}
                            />
                            <button type="submit" className="submit-btn">
                                <Send size={16} /> {t.btnSubmit}
                            </button>
                        </form>
                    </motion.div>
                )}

                {step === 6 && (
                    <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="quiz-step success">
                        <div className="success-icon"><Check size={40} /></div>
                        <h3>{t.successTitle}</h3>
                        <p>{t.successDesc}</p>
                        <button className="reset-btn" onClick={() => { setStep(0); setAnswers({}); }}>{t.btnReset}</button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx="true">{`
                .quiz-container {
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 16px;
                    padding: 40px;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                }

                .quiz-step {
                    width: 100%;
                    max-width: 500px;
                    text-align: center;
                }

                h2 { font-size: 2rem; margin-bottom: 15px; color: #000; }
                h3 { color: #000; margin-bottom: 20px; }
                p { color: #666; margin-bottom: 30px; line-height: 1.6; }

                .start-btn, .submit-btn {
                    background: #000; color: white; border: none; padding: 15px 30px; font-weight: bold; border-radius: 30px;
                    cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-size: 1rem; transition: 0.3s;
                }
                .start-btn:hover, .submit-btn:hover { background: #ccc; transform: scale(1.05); }

                .progress-bar {
                    height: 4px; background: #333; border-radius: 2px; margin-bottom: 30px; overflow: hidden;
                }
                .fill { height: 100%; background: var(--accent-red); transition: width 0.3s ease; }

                .options-grid {
                    display: grid; grid-template-columns: 1fr; gap: 10px; margin-bottom: 20px;
                }
                
                .option-btn {
                    background: #f9f9f9; border: 1px solid #eee; padding: 15px; border-radius: 8px; color: #000;
                    display: flex; align-items: center; gap: 15px; cursor: pointer; transition: 0.2s; text-align: left;
                }
                .option-btn:hover { background: #fff; border-color: #000; transform: translateX(5px); box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                .option-btn .icon { font-size: 1.2rem; }

                .back-btn {
                    background: none; border: none; color: #666; cursor: pointer; display: flex; align-items: center; gap: 5px; margin: 0 auto;
                }
                .back-btn:hover { color: #000; }

                .contact-form form { display: flex; flex-direction: column; gap: 15px; }
                .contact-form input {
                    background: #fff; border: 1px solid #eee; padding: 15px; border-radius: 8px; color: #000; outline: none;
                }
                .contact-form input:focus { border-color: #000; }

                .success-icon {
                    width: 80px; height: 80px; background: #4ade80; color: black; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;
                }
                .reset-btn { background: none; border: 1px solid #333; color: #888; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin-top: 20px; }
                .reset-btn:hover { color: white; border-color: white; }
            `}</style>
        </div>
    );
}
