import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useStore } from '../../store/useStore';

export default function ContentEditor() {
    const {
        hero, updateHero,
        about, updateAbout,
        contact, updateContact,
        translations, language,
        updateServicePackage,
        updateTranslation
    } = useStore();

    // Helper to update deep nested translations
    const updateStoreDeep = (lang, section, data) => {
        updateTranslation(lang, section, data);
    };

    // Forms
    // Forms
    const { register: regHero, handleSubmit: subHero, reset: resetHero } = useForm({ defaultValues: hero });
    const { register: regAbout, handleSubmit: subAbout, reset: resetAbout } = useForm({ defaultValues: about });
    const { register: regContact, handleSubmit: subContact, reset: resetContact } = useForm({ defaultValues: contact });

    // Reset forms when store data changes (e.g. after fetchGlobalContent)
    useEffect(() => {
        resetHero(hero);
    }, [hero, resetHero]);

    useEffect(() => {
        resetAbout(about);
    }, [about, resetAbout]);

    useEffect(() => {
        resetContact(contact);
    }, [contact, resetContact]);

    const services = translations[language].services.packages;

    const handleServiceUpdate = (index, field, value) => {
        updateServicePackage(language, index, { [field]: value });
    };

    const handleListUpdate = (index, value) => {
        // Split by new line to create array
        const list = value.split('\n').filter(item => item.trim() !== '');
        updateServicePackage(language, index, { includes: list });
    };

    // Helper to handle save with feedback
    const handleSave = async (fn, data) => {
        try {
            await fn(data);
            alert('Saved successfully!');
        } catch (error) {
            alert('Error saving!');
            console.error(error);
        }
    };

    return (
        <div className="admin-section">
            <h2>Content Editor</h2>

            <div className="grid-12">
                {/* Hero Edit */}
                <div className="col-4">
                    <form onSubmit={subHero((data) => handleSave(updateHero, data))} className="admin-form">
                        <h3>Hero Section</h3>
                        <label>Headline Line 1</label>
                        <input {...regHero("headlineFirst")} />
                        <label>Headline Line 2</label>
                        <input {...regHero("headlineSecond")} />
                        <label>Subtitle</label>
                        <input {...regHero("subhead")} />
                        <button type="submit" className="btn-save">Save Hero</button>
                    </form>
                </div>

                {/* About Edit */}
                <div className="col-4">
                    <div className="admin-form">
                        <h3>About Section ({language})</h3>

                        <label>Tagline</label>
                        <input
                            defaultValue={translations[language].about.tag}
                            onBlur={(e) => {
                                const newAbout = { ...translations[language].about, tag: e.target.value };
                                updateStoreDeep(language, 'about', newAbout);
                            }}
                        />

                        <label>Main Title</label>
                        <textarea
                            defaultValue={translations[language].about.title}
                            rows={3}
                            onBlur={(e) => {
                                const newAbout = { ...translations[language].about, title: e.target.value };
                                updateStoreDeep(language, 'about', newAbout);
                            }}
                        />

                        <label>Description</label>
                        <textarea
                            defaultValue={translations[language].about.desc}
                            rows={5}
                            onBlur={(e) => {
                                const newAbout = { ...translations[language].about, desc: e.target.value };
                                updateStoreDeep(language, 'about', newAbout);
                            }}
                        />

                        <label>CV Upload (PDF, Max 2MB)</label>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        if (file.size > 2 * 1024 * 1024) {
                                            alert("File is too large! Max 2MB.");
                                            return;
                                        }
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            handleSave(updateAbout, { cv: reader.result }); // Updates global state
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            {about.cv && <span style={{ color: '#4ade80', fontSize: '0.8rem' }}>✓ CV Uploaded</span>}
                        </div>

                        {/* Skills Editor */}
                        <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>Skills Levels</h4>
                        <div className="skills-editor">
                            {translations[language].about.skills.map((skill, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
                                    <span style={{ fontSize: '0.8rem', width: '100px' }}>{skill.name}</span>
                                    <input
                                        type="number"
                                        defaultValue={skill.level}
                                        style={{ width: '60px' }}
                                        onBlur={(e) => {
                                            const newSkills = [...translations[language].about.skills];
                                            newSkills[idx] = { ...newSkills[idx], level: parseInt(e.target.value) };
                                            const newAbout = { ...translations[language].about, skills: newSkills };
                                            updateStoreDeep(language, 'about', newAbout);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Contact Edit */}
                <div className="col-4">
                    <form onSubmit={subContact((data) => handleSave(updateContact, data))} className="admin-form">
                        <h3>Contact Info</h3>
                        <label>Email</label>
                        <input {...regContact("email")} />
                        <label>Location</label>
                        <input {...regContact("location")} />
                        <label>Status</label>
                        <input {...regContact("status")} />
                        <button type="submit" className="btn-save">Save Contact</button>
                    </form>
                </div>

                {/* Services Edit - Full Row */}
                <div className="col-12" style={{ marginTop: '40px' }}>
                    <h3>Service Packages (ENG)</h3>
                    <div className="services-edit-grid">
                        {services.map((pkg, idx) => (
                            <div key={pkg.id} className="admin-form service-form">
                                <h4>Package {idx + 1}</h4>
                                <label>Title</label>
                                <input value={pkg.title} onChange={(e) => handleServiceUpdate(idx, 'title', e.target.value)} />

                                <label>Subtitle (Type)</label>
                                <input value={pkg.subtitle} onChange={(e) => handleServiceUpdate(idx, 'subtitle', e.target.value)} />

                                <label>Target Audience</label>
                                <input value={pkg.for} onChange={(e) => handleServiceUpdate(idx, 'for', e.target.value)} />

                                <label>Description</label>
                                <textarea value={pkg.desc} onChange={(e) => handleServiceUpdate(idx, 'desc', e.target.value)} rows={3} />

                                <label>Includes (One per line)</label>
                                <textarea
                                    defaultValue={pkg.includes.join('\n')}
                                    onBlur={(e) => handleListUpdate(idx, e.target.value)}
                                    rows={5}
                                    placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                                />

                                <label>Value Prop</label>
                                <textarea value={pkg.value} onChange={(e) => handleServiceUpdate(idx, 'value', e.target.value)} rows={2} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Editor */}
                <div className="col-12" style={{ marginTop: '40px' }}>
                    <h3>Process Section ({language})</h3>
                    <div className="admin-form">
                        <label>Section Title</label>
                        <input
                            defaultValue={translations[language].process.title}
                            onBlur={(e) => {
                                const newProcess = { ...translations[language].process, title: e.target.value };
                                updateStoreDeep(language, 'process', newProcess);
                            }}
                        />
                        <label>Subtitle</label>
                        <input
                            defaultValue={translations[language].process.sub}
                            onBlur={(e) => {
                                const newProcess = { ...translations[language].process, sub: e.target.value };
                                updateStoreDeep(language, 'process', newProcess);
                            }}
                        />

                        <div style={{ marginTop: '20px' }}>
                            <h4>Steps</h4>
                            {translations[language].process.steps.map((step, idx) => (
                                <div key={idx} style={{ marginBottom: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label>Step {step.num} Title</label>
                                            <input
                                                defaultValue={step.title}
                                                onBlur={(e) => {
                                                    const newSteps = [...translations[language].process.steps];
                                                    newSteps[idx] = { ...newSteps[idx], title: e.target.value };
                                                    const newProcess = { ...translations[language].process, steps: newSteps };
                                                    updateStoreDeep(language, 'process', newProcess);
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: 2 }}>
                                            <label>Description</label>
                                            <textarea
                                                defaultValue={step.desc}
                                                rows={2}
                                                onBlur={(e) => {
                                                    const newSteps = [...translations[language].process.steps];
                                                    newSteps[idx] = { ...newSteps[idx], desc: e.target.value };
                                                    const newProcess = { ...translations[language].process, steps: newSteps };
                                                    updateStoreDeep(language, 'process', newProcess);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing Editor */}
                <div className="col-6" style={{ marginTop: '20px' }}>
                    <div className="admin-form">
                        <h3>Pricing Section ({language})</h3>
                        <label>Title</label>
                        <input
                            defaultValue={translations[language].pricing.title}
                            onBlur={(e) => {
                                const newPricing = { ...translations[language].pricing, title: e.target.value };
                                updateStoreDeep(language, 'pricing', newPricing);
                            }}
                        />
                        <label>Subtitle</label>
                        <input
                            defaultValue={translations[language].pricing.sub}
                            onBlur={(e) => {
                                const newPricing = { ...translations[language].pricing, sub: e.target.value };
                                updateStoreDeep(language, 'pricing', newPricing);
                            }}
                        />
                        <label>Budget Label</label>
                        <input
                            defaultValue={translations[language].pricing.label}
                            onBlur={(e) => {
                                const newPricing = { ...translations[language].pricing, label: e.target.value };
                                updateStoreDeep(language, 'pricing', newPricing);
                            }}
                        />
                        <label>Button Text</label>
                        <input
                            defaultValue={translations[language].pricing.btn}
                            onBlur={(e) => {
                                const newPricing = { ...translations[language].pricing, btn: e.target.value };
                                updateStoreDeep(language, 'pricing', newPricing);
                            }}
                        />
                    </div>
                </div>

                {/* Quiz Editor */}
                <div className="col-6" style={{ marginTop: '20px' }}>
                    <div className="admin-form">
                        <h3>Quiz Section ({language})</h3>
                        <label>Intro Title</label>
                        <input
                            defaultValue={translations[language].quiz.introTitle}
                            onBlur={(e) => {
                                const newQuiz = { ...translations[language].quiz, introTitle: e.target.value };
                                updateStoreDeep(language, 'quiz', newQuiz);
                            }}
                        />
                        <label>Intro Description</label>
                        <textarea
                            defaultValue={translations[language].quiz.introDesc}
                            rows={3}
                            onBlur={(e) => {
                                const newQuiz = { ...translations[language].quiz, introDesc: e.target.value };
                                updateStoreDeep(language, 'quiz', newQuiz);
                            }}
                        />
                        <label>Success Title</label>
                        <input
                            defaultValue={translations[language].quiz.successTitle}
                            onBlur={(e) => {
                                const newQuiz = { ...translations[language].quiz, successTitle: e.target.value };
                                updateStoreDeep(language, 'quiz', newQuiz);
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .admin-section { padding: 20px; color: #111; }
        .col-4 { grid-column: span 4; }
        .col-6 { grid-column: span 6; }
        .col-12 { grid-column: span 12; }
        
        .services-edit-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
        }

        .service-form {
            background: #ffffff;
        }

        .admin-form {
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            border: 1px solid #e5e5e5;
            box-shadow: 0 2px 5px rgba(0,0,0,0.02);
        }

        label { font-size: 0.8rem; color: #666; margin-top: 5px; }

        input, textarea {
            background: #f9f9f9;
            border: 1px solid #ddd;
            color: #000;
            padding: 8px;
            border-radius: 4px;
            width: 100%;
        }
        
        input:focus, textarea:focus {
            outline: none; border-color: #000;
        }

        .btn-save {
            margin-top: 10px;
            background: #000;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.2s;
        }
        .btn-save:hover { background: #333; }

        @media (max-width: 1000px) {
            .col-4 { grid-column: span 12; margin-bottom: 20px; }
            .services-edit-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
