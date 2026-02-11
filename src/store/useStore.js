import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export const useStore = create(
    persist(
        (set, get) => ({
            // Hero Section
            hero: {
                headlineFirst: 'PURE',
                headlineSecond: 'DESIGN',
                subhead: 'Senior Designer Portfolio',
            },
            updateHero: async (data) => {
                const state = get();
                const newHero = { ...state.hero, ...data };

                // Also update translations for current language
                const newTranslations = { ...state.translations };
                if (newTranslations[state.language]) {
                    newTranslations[state.language].hero = { ...newTranslations[state.language].hero, ...data };
                }

                set({ hero: newHero, translations: newTranslations });

                try {
                    const { db } = await import('../firebase');
                    const { doc, setDoc } = await import('firebase/firestore');
                    // Save both root hero and translations
                    await setDoc(doc(db, 'content', 'main'), {
                        hero: newHero,
                        translations: newTranslations
                    }, { merge: true });
                } catch (error) {
                    console.error("Error saving hero:", error);
                }
            },

            // About Section
            about: {
                imageUrl: '/profile.png',
                cv: '',
                tag: 'Who I am',
                title: 'Designing the \nFuture of Digital.',
                description: 'Senior Designer with 8+ years of experience in Branding, GameDev, and 3D Interactive Web. I build immersive digital experiences that blend aesthetics with functionality.',
                stats: [
                    { num: '08+', label: 'Years Exp' },
                    { num: '50+', label: 'Projects' },
                    { num: '15', label: 'Awards' },
                ]
            },
            updateAbout: async (data) => {
                const state = get();
                const newAbout = { ...state.about, ...data };

                // Also update translations for current language (for consistent fields)
                const newTranslations = { ...state.translations };
                if (newTranslations[state.language] && newTranslations[state.language].about) {
                    newTranslations[state.language].about = { ...newTranslations[state.language].about, ...data };
                }

                set({ about: newAbout, translations: newTranslations });
                try {
                    const { db } = await import('../firebase');
                    const { doc, setDoc } = await import('firebase/firestore');
                    await setDoc(doc(db, 'content', 'main'), {
                        about: newAbout,
                        translations: newTranslations
                    }, { merge: true });
                } catch (error) {
                    console.error("Error saving about:", error);
                }
            },

            // Contact Section
            contact: {
                email: 'hello@daniyar.design',
                location: 'Almaty, Kazakhstan',
                status: 'Available for freelance'
            },
            updateContact: async (data) => {
                const state = get();
                const newContact = { ...state.contact, ...data };

                // Also update translations for current language
                const newTranslations = { ...state.translations };
                if (newTranslations[state.language]) {
                    newTranslations[state.language].contact = { ...newTranslations[state.language].contact, ...data };
                }

                set({ contact: newContact, translations: newTranslations });
                try {
                    const { db } = await import('../firebase');
                    const { doc, setDoc } = await import('firebase/firestore');
                    await setDoc(doc(db, 'content', 'main'), {
                        contact: newContact,
                        translations: newTranslations
                    }, { merge: true });
                } catch (error) {
                    console.error("Error saving contact:", error);
                }
            },

            // Projects
            projects: [],
            fetchProjects: async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, 'projects'));
                    const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    set({ projects: projectsData });
                } catch (error) {
                    console.error("Error fetching projects:", error);
                }
            },

            // Fetch Global Content
            fetchGlobalContent: async () => {
                try {
                    // Using dynamic import to avoid circular dependency issues if any, 
                    // but we already imported db at top.
                    const { getDoc, doc } = await import('firebase/firestore');
                    const { db } = await import('../firebase');

                    const docRef = doc(db, 'content', 'main');
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        set((state) => ({
                            hero: data.hero || state.hero,
                            about: data.about || state.about,
                            contact: data.contact || state.contact,
                            translations: data.translations || state.translations
                        }));
                    }
                } catch (error) {
                    console.error("Error fetching global content:", error);
                }
            },
            addProject: async (project) => {
                try {
                    const docRef = await addDoc(collection(db, 'projects'), project);
                    const newProject = { ...project, id: docRef.id };
                    set((state) => ({ projects: [newProject, ...state.projects] }));
                } catch (error) {
                    console.error("Error adding project:", error);
                }
            },
            updateProject: async (id, data) => {
                try {
                    const projectRef = doc(db, 'projects', id);
                    await updateDoc(projectRef, data);
                    set((state) => ({
                        projects: state.projects.map((p) => p.id === id ? { ...p, ...data } : p)
                    }));
                } catch (error) {
                    console.error("Error updating project:", error);
                }
            },
            deleteProject: async (id) => {
                try {
                    await deleteDoc(doc(db, 'projects', id));
                    set((state) => ({
                        projects: state.projects.filter((p) => p.id !== id)
                    }));
                } catch (error) {
                    console.error("Error deleting project:", error);
                }
            },

            // Categories

            categories: ['Branding', '3D', '3D Animation', '2D Arts', '2D Animation', 'UI/UX', 'Game Dev', 'Web App'],
            addCategory: (category) => set((state) => ({
                categories: [...state.categories, category]
            })),
            deleteCategory: (category) => set((state) => ({
                categories: state.categories.filter((c) => c !== category)
            })),

            // Language
            language: 'ENG',
            setLanguage: (lang) => set({ language: lang }),

            translations: {
                ENG: {
                    nav: { works: 'Works', services: 'Services', about: 'About', contact: 'Contact' },
                    hero: {
                        headlineFirst: 'PURE',
                        headlineSecond: 'DESIGN',
                        sub: 'Senior Designer Portfolio',
                        cta: "Let's Work",
                        about: 'About Me',
                        customers: '+18k Happy Customers',
                        newColl: 'NEW COLLECTION',
                        join: 'Join a community of like-minded individuals.'
                    },
                    about: {
                        tag: 'Who I am',
                        title: 'Visionary Thinking. \nCreative Approach.',
                        desc: 'I am a Senior Graphic Designer with a rich background in Branding, Motion, and Web Design. I combine aesthetics with functionality to create visual solutions that not only look good but also solve business problems. My expertise covers the full design lifecycle — from idea to high-quality execution.',
                        links: {
                            behance: 'https://www.behance.net/1f4065a9',
                            telegram: 'https://t.me/maskundesqorap',
                            linkedin: 'https://linkedin.com',
                            instagram: 'https://instagram.com'
                        },
                        skills: [
                            { name: 'Adobe Photoshop', level: 95, label: 'Advanced' },
                            { name: 'Adobe Illustrator', level: 90, label: 'Advanced' },
                            { name: 'Figma', level: 95, label: 'Expert' },
                            { name: 'CorelDRAW', level: 85, label: 'Proficient' },
                            { name: 'Blender 3D', level: 80, label: 'Intermediate' },
                            { name: 'After Effects', level: 75, label: 'Working knowledge' },
                            { name: 'HTML / CSS', level: 60, label: 'Basic' }
                        ]
                    },
                    portfolio: {
                        title: 'Selected Works',
                        empty: 'No projects in this category yet.',
                        view: 'View Case',
                        visit: 'Visit Live Site'
                    },
                    services: {
                        title: 'Services',
                        sub: 'Design Solutions',
                        packages: [
                            {
                                id: 1,
                                title: 'Brand Start',
                                subtitle: 'Identity & POS',
                                for: 'Startups & Redesigns',
                                desc: 'Creating a visual image with a focus on practical application.',
                                includes: ['Logo (3 variants)', 'Visual Style (Colors, Fonts)', 'Mini Guideline', 'Basic Polygraphy (Cards, Flyers)'],
                                value: 'Not just a picture, but a ready-to-sell toolset.'
                            },
                            {
                                id: 2,
                                title: 'Visualization & Motion',
                                subtitle: '3D & Animation',
                                for: 'Product Business & Ads',
                                desc: 'Premium 3D presentation that sells better than 2D.',
                                includes: ['3D Product Modeling', 'Animation (15-30s)', 'Social Media Adaptation', 'Photo-realistic Renders'],
                                feature: true,
                                value: 'High-end product presentation that stands out.'
                            },
                            {
                                id: 3,
                                title: 'Turnkey Website',
                                subtitle: 'Web & Mobile',
                                for: 'Experts & Services',
                                desc: 'Complete business packaging online.',
                                includes: ['Competitor Analysis', 'Prototype & Copywriting', 'UI Design (Figma)', 'Tilda/Webflow Dev (Optional)'],
                                value: 'A site that converts visitors into clients.'
                            }
                        ]
                    },
                    process: {
                        sub: 'Workflow',
                        title: 'Working Process',
                        steps: [
                            { num: '01', title: 'Briefing', desc: 'We discuss your goals and requirements via Zoom or Google Meet.' },
                            { num: '02', title: 'Moodboard', desc: 'I prepare a visual direction style to ensure we are on the same page.' },
                            { num: '03', title: 'Drafts', desc: 'Creating initial concepts and showing you the first results.' },
                            { num: '04', title: 'Revisions', desc: 'Refining the design. Includes 2-3 rounds of free edits to polish details.' },
                            { num: '05', title: 'Final', desc: 'Handover of all source files and assets ready for use.' }
                        ]
                    },
                    inquiry: { title: 'Start a Project', sub: 'Tell me about your vision.', btn: 'Send Inquiry', sending: 'Sending...' },
                    contact: { location: 'Available for freelance', title: "Let's work \ntogether.", tag: 'Contact' },
                    quiz: {
                        introTitle: 'Calculate Cost & Time',
                        introDesc: 'Answer 4 simple questions to get a commercial proposal + 10% Discount on your first order.',
                        btnStart: 'Start Calculation',
                        formTitle: 'Last Step!',
                        formDesc: 'Leave your contacts to receive the proposal.',
                        placeholders: { name: 'Your Name', email: 'Email', phone: 'Phone (Optional)' },
                        btnSubmit: 'Get Result',
                        successTitle: 'Received!',
                        successDesc: "I'll analyze your answers and send a proposal shorty.",
                        btnReset: 'Start Over',
                        questions: [
                            { id: 'task', question: "What is your primary task?", options: ["Logo & Brand Identity", "3D Animation / Motion", "Website / Landing Page", "Full Packaging (Brand + Web)", "Other / One-off Task"] },
                            { id: 'ref', question: "Do you have ready references?", options: ["Yes, everything is ready", "I have examples I like", "Nothing yet, need ideas"] },
                            { id: 'budget', question: "What is your estimated budget?", options: ["Up to 100,000 ₸", "100,000 – 300,000 ₸", "300,000 – 1,000,000 ₸", "Budget not limited / Discuss"] },
                            { id: 'deadline', question: "How urgent is the project?", options: ["ASAP (Urgent Tariff)", "1-2 Weeks", "Within a Month", "No rush"] }
                        ]
                    },
                    pricing: {
                        title: 'Start a Project',
                        sub: 'Estimate your investment',
                        label: 'Your Budget',
                        btn: 'Calculate Timeline'
                    }
                },
                RUS: {
                    nav: { works: 'Работы', services: 'Услуги', about: 'Обо мне', contact: 'Контакты' },
                    hero: {
                        headlineFirst: 'ЧИСТЫЙ',
                        headlineSecond: 'ДИЗАЙН',
                        sub: 'Портфолио Дизайнера',
                        cta: 'Давайте работать',
                        about: 'Обо мне',
                        customers: '+18k Довольных клиентов',
                        newColl: 'НОВАЯ КОЛЛЕКЦИЯ',
                        join: 'Присоединяйтесь к сообществу единомышленников.'
                    },
                    about: {
                        tag: 'Кто я',
                        title: 'Визионерское \nМышление.',
                        desc: 'Я обладаю богатым опытом в графическом дизайне, что позволяет мне вести проект от идеи до реализации. Мои навыки включают Adobe Photoshop, Illustrator, CorelDRAW, Figma, а также 3D Blender и After Effects. Я стремлюсь создавать дизайн, который вызывает эмоции и эффективно решает задачи бренда.',
                        links: {
                            behance: 'https://www.behance.net/1f4065a9',
                            telegram: 'https://t.me/maskundesqorap',
                            linkedin: 'https://linkedin.com',
                            instagram: 'https://instagram.com'
                        },
                        skills: [
                            { name: 'Adobe Photoshop', level: 95, label: 'Продвинутый' },
                            { name: 'Adobe Illustrator', level: 90, label: 'Продвинутый' },
                            { name: 'Figma', level: 95, label: 'Эксперт' },
                            { name: 'CorelDRAW', level: 85, label: 'Опытный' },
                            { name: 'Blender 3D', level: 80, label: 'Средний' },
                            { name: 'After Effects', level: 75, label: 'Рабочий уровень' },
                            { name: 'HTML / CSS', level: 60, label: 'Базовый' }
                        ]
                    },
                    portfolio: {
                        title: 'Избранные Проекты',
                        empty: 'В этой категории пока нет проектов.',
                        view: 'Смотреть Кейс',
                        visit: 'Перейти на сайт'
                    },
                    services: {
                        title: 'Услуги',
                        sub: 'Пакеты услуг',
                        packages: [
                            {
                                id: 1,
                                title: 'Бренд-старт',
                                subtitle: 'Identity & POS',
                                for: 'Стартапы и Редизайн',
                                desc: 'Создание визуального образа с упором на практику.',
                                includes: ['Логотип (3 варианта)', 'Фирменный стиль', 'Гайдлайн (Mini)', 'Полиграфия (Визитки, Бланки)'],
                                value: 'Не просто картинка, а набор инструментов для продаж.'
                            },
                            {
                                id: 2,
                                title: 'Визуализация и Motion',
                                subtitle: '3D & Animation',
                                for: 'Товарный бизнес и Реклама',
                                desc: '3D продает дороже обычного 2D дизайна.',
                                includes: ['3D-моделирование', 'Анимационный ролик (15-30с)', 'Адаптация под Сторис', 'Фотореалистичные рендеры'],
                                feature: true,
                                value: 'Дорогая подача, которая выделяет на фоне конкурентов.'
                            },
                            {
                                id: 3,
                                title: 'Сайт под ключ',
                                subtitle: 'Web & Mobile',
                                for: 'Эксперты и Услуги',
                                desc: 'Упаковка бизнеса в интернете.',
                                includes: ['Анализ конкурентов', 'Прототип и копирайтинг', 'UI Дизайн (Figma)', 'Верстка (Tilda/Webflow)'],
                                value: 'Сайт, который конвертирует посетителей в заявки.'
                            }
                        ]
                    },
                    process: {
                        sub: 'Этапы',
                        title: 'Как мы работаем',
                        steps: [
                            { num: '01', title: 'Брифинг', desc: 'Обсуждаем цели и требования в Zoom или Google Meet.' },
                            { num: '02', title: 'Мудборд', desc: 'Подбираю визуальный стиль, чтобы мы были на одной волне.' },
                            { num: '03', title: 'Черновики', desc: 'Создание первых концептов и показ результатов.' },
                            { num: '04', title: 'Правки', desc: 'Доработка дизайна. Включено 2-3 круга бесплатных правок.' },
                            { num: '05', title: 'Финал', desc: 'Передача всех исходников, готовых к использованию.' }
                        ]
                    },
                    inquiry: { title: 'Начать проект', sub: 'Расскажите о вашей идее.', btn: 'Отправить', sending: 'Отправка...' },
                    contact: { location: 'Доступен для заказов', title: "Давайте \nпоработаем.", tag: 'Контакты' },
                    quiz: {
                        introTitle: 'Рассчитать Стоимость',
                        introDesc: 'Ответьте на 4 вопроса, чтобы получить КП + 10% Скидку на первый заказ.',
                        btnStart: 'Начать расчет',
                        formTitle: 'Последний шаг!',
                        formDesc: 'Оставьте контакты для получения предложения.',
                        placeholders: { name: 'Ваше Имя', email: 'Email', phone: 'Телефон (необязательно)' },
                        btnSubmit: 'Получить результат',
                        successTitle: 'Получено!',
                        successDesc: "Я проанализирую ответы и скоро отправлю предложение.",
                        btnReset: 'Начать заново',
                        questions: [
                            { id: 'task', question: "Какая у вас задача?", options: ["Лого и Фирменный стиль", "3D Анимация / Motion", "Сайт / Лендинг", "Полная упаковка (Бренд + Сайт)", "Другое"] },
                            { id: 'ref', question: "Есть ли референсы?", options: ["Да, все готово", "Есть примеры, которые нравятся", "Пока ничего нет, нужны идеи"] },
                            { id: 'budget', question: "Какой бюджет?", options: ["До 100,000 ₸", "100,000 – 300,000 ₸", "300,000 – 1,000,000 ₸", "Бюджет не ограничен / Обсудим"] },
                            { id: 'deadline', question: "Насколько срочно?", options: ["ASAP (Срочный тариф)", "1-2 Недели", "В течение месяца", "Не спешу"] }
                        ]
                    },
                    pricing: {
                        title: 'Начать проект',
                        sub: 'Оцените инвестиции',
                        label: 'Ваш бюджет',
                        btn: 'Рассчитать сроки'
                    }
                },
                KAZ: {
                    nav: { works: 'Жобалар', services: 'Қызметтер', about: 'Мен жайлы', contact: 'Байланыс' },
                    hero: {
                        headlineFirst: 'ТАЗА',
                        headlineSecond: 'ДИЗАЙН',
                        sub: 'Аға Дизайнер Портфолиосы',
                        cta: 'Жұмыс істейік',
                        about: 'Мен жайлы',
                        customers: '+18k Риза клиенттер',
                        newColl: 'ЖАҢА КОЛЛЕКЦИЯ',
                        join: 'Пікірлес адамдар қауымдастығына қосылыңыз.'
                    },
                    about: {
                        tag: 'Мен кіммін',
                        title: 'Визионерлік \nОйлау.',
                        desc: 'Мен графикалық дизайнда мол тәжірибем бар. Мен дизайн процесінің барлық кезеңдерін – идеядан бастап жүзеге асыруға дейін орындаймын. Adobe Photoshop, Illustrator, Figma, сонымен қатар 3D Blender және After Effects бағдарламаларын жетік меңгергенмін.',
                        links: {
                            behance: 'https://www.behance.net/1f4065a9',
                            telegram: 'https://t.me/maskundesqorap',
                            linkedin: 'https://linkedin.com',
                            instagram: 'https://instagram.com'
                        },
                        skills: [
                            { name: 'Adobe Photoshop', level: 95, label: 'Жетік' },
                            { name: 'Adobe Illustrator', level: 90, label: 'Жетік' },
                            { name: 'Figma', level: 95, label: 'Сарапшы' },
                            { name: 'CorelDRAW', level: 85, label: 'Тәжірибелі' },
                            { name: 'Blender 3D', level: 80, label: 'Орташа' },
                            { name: 'After Effects', level: 75, label: 'Жақсы' },
                            { name: 'HTML / CSS', level: 60, label: 'Базалық' }
                        ]
                    },
                    portfolio: {
                        title: 'Таңдаулы Жобалар',
                        empty: 'Бұл санатта әлі жобалар жоқ.',
                        view: 'Кейсті қарау',
                        visit: 'Сайтқа өту'
                    },
                    services: {
                        title: 'Қызметтер',
                        sub: 'Қызмет түрлері',
                        packages: [
                            {
                                id: 1,
                                title: 'Бренд-старт',
                                subtitle: 'Identity & POS',
                                for: 'Стартаптар мен Редизайн',
                                desc: 'Тәжірибеге негізделген визуалды образ жасау.',
                                includes: ['Логотип (3 нұсқа)', 'Фирмалық стиль', 'Гайдлайн (Mini)', 'Полиграфия (Визиткалар)'],
                                value: 'жай сурет емес, сатуға дайын құралдар жиынтығы.'
                            },
                            {
                                id: 2,
                                title: 'Визуализация және Motion',
                                subtitle: '3D & Animation',
                                for: 'Тауар бизнесі және Жарнама',
                                desc: '3D қарапайым 2D дизайнға қарағанда қымбат сатылады.',
                                includes: ['3D-моделдеу', 'Анимациялық ролик (15-30сек)', 'Сторисқа бейімдеу', 'Фотореалистичные рендерлер'],
                                feature: true,
                                value: 'Бәсекелестерден ерекшелендіретін қымбат көрініс.'
                            },
                            {
                                id: 3,
                                title: 'Кілтке тапсырылатын сайт',
                                subtitle: 'Web & Mobile',
                                for: 'Сарапшылар мен Қызметтер',
                                desc: 'Бизнесті интернетте қаптау.',
                                includes: ['Бәсекелестерді талдау', 'Прототип және копирайтинг', 'UI Дизайн (Figma)', 'Верстка (Tilda/Webflow)'],
                                value: 'Келушілерді клиентке айналдыратын сайт.'
                            }
                        ]
                    },
                    process: {
                        sub: 'Кезеңдер',
                        title: 'Жұмыс барысы',
                        steps: [
                            { num: '01', title: 'Брифинг', desc: 'Zoom немесе Google Meet арқылы мақсаттар мен талаптарды талқылау.' },
                            { num: '02', title: 'Мудборд', desc: 'Біз бір толқында болуымыз үшін визуалды стильді дайындаймын.' },
                            { num: '03', title: 'Нобайлар', desc: 'Алғашқы концепттерді жасау және нәтижелерді көрсету.' },
                            { num: '04', title: 'Түзетулер', desc: 'Дизайнды жетілдіру. 2-3 тегін түзету кезеңі кіреді.' },
                            { num: '05', title: 'Финал', desc: 'Пайдалануға дайын барлық бастапқы файлдарды тапсыру.' }
                        ]
                    },
                    inquiry: { title: 'Жоба бастау', sub: 'Идеяңызбен бөлісіңіз.', btn: 'Жіберу', sending: 'Жіберілуде...' },
                    contact: { location: 'Тапсырыс қабылдаймын', title: "Бірге \nжұмыс істейік.", tag: 'Байланыс' },
                    quiz: {
                        introTitle: 'Құнын есептеу',
                        introDesc: '4 сұраққа жауап беріп, Коммерциялық ұсыныс + 10% жеңілдік алыңыз.',
                        btnStart: 'Есептеуді бастау',
                        formTitle: 'Соңғы қадам!',
                        formDesc: 'Ұсыныс алу үшін байланыс нөміріңізді қалдырыңыз.',
                        placeholders: { name: 'Есіміңіз', email: 'Email', phone: 'Телефон (міндетті емес)' },
                        btnSubmit: 'Нәтижені алу',
                        successTitle: 'Қабылданды!',
                        successDesc: "Мен жауаптарыңызды талдап, жақында ұсыныс жіберемін.",
                        btnReset: 'Қайта бастау',
                        questions: [
                            { id: 'task', question: "Негізгі тапсырмаңыз қандай?", options: ["Лого және Бренд стилі", "3D Анимация / Motion", "Сайт / Лендинг", "Толық қаптама (Бренд + Сайт)", "Басқа"] },
                            { id: 'ref', question: "Дайын референстер бар ма?", options: ["Иә, бәри дайын", "Ұнайтын мысалдар бар", "Әзірге ештеңе жоқ"] },
                            { id: 'budget', question: "Бюджет қандай?", options: ["100,000 ₸ дейін", "100,000 – 300,000 ₸", "300,000 – 1,000,000 ₸", "Бюджет шектелмеген / Келісеміз"] },
                            { id: 'deadline', question: "Қаншалықты жедел?", options: ["ASAP (Шұғыл тариф)", "1-2 Апта", "Бір ай ішінде", "Асығыс емес"] }
                        ]
                    },
                    pricing: {
                        title: 'Жоба бастау',
                        sub: 'Инвестицияны бағалаңыз',
                        label: 'Сіздің бюджет',
                        btn: 'Мерзімді есептеу'
                    }
                }
            },

            // Inquiries
            inquiries: [],
            addInquiry: (data) => set((state) => ({
                inquiries: [{ ...data, id: Date.now(), date: new Date().toISOString(), read: false }, ...(state.inquiries || [])]
            })),
            deleteInquiry: (id) => set((state) => ({
                inquiries: state.inquiries.filter((i) => i.id !== id)
            })),
            markInquiryRead: (id) => set((state) => ({
                inquiries: state.inquiries.map((i) => i.id === id ? { ...i, read: true } : i)
            })),

            // Service Updates
            updateServicePackage: (lang, index, data) => set((state) => {
                const newTranslations = { ...state.translations };
                const packages = [...newTranslations[lang].services.packages];
                packages[index] = { ...packages[index], ...data };
                newTranslations[lang].services.packages = packages;
                return { translations: newTranslations };
            }),

            // Generic Translation Update
            updateTranslation: (lang, section, data) => set((state) => {
                const newTranslations = { ...state.translations };
                // Shallow merge the section data
                newTranslations[lang][section] = { ...newTranslations[lang][section], ...data };
                return { translations: newTranslations };
            }),


        }),
        {
            name: 'daniyar-web-storage-v5',
            partialize: (state) => ({
                hero: state.hero,
                about: state.about,
                contact: state.contact,
                projects: state.projects,
                language: state.language,
                inquiries: state.inquiries,
                categories: state.categories // Persist Custom Categories
            })
        }
    )
);
