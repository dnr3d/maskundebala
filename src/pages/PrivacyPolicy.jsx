import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px',
            color: '#000',
            fontFamily: "'Inter', sans-serif",
            backgroundColor: '#fff',
            minHeight: '100vh',
            boxSizing: 'border-box'
        },
        header: {
            marginBottom: '40px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            paddingBottom: '20px'
        },
        backLink: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#666',
            textDecoration: 'none',
            marginBottom: '20px',
            transition: '0.2s',
            cursor: 'pointer'
        },
        h1: {
            fontSize: '2rem',
            lineHeight: '1.2',
            color: '#000',
            marginTop: 0
        },
        h2: {
            fontSize: '1.5rem',
            marginTop: '30px',
            marginBottom: '15px',
            color: '#000'
        },
        p: {
            color: '#333',
            lineHeight: '1.6',
            fontSize: '1rem',
            marginBottom: '15px'
        },
        ul: {
            paddingLeft: '20px',
            marginBottom: '20px',
            color: '#333'
        },
        li: {
            marginBottom: '10px'
        },
        a: {
            color: '#000',
            textDecoration: 'underline'
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <Link to="/" style={styles.backLink}>
                    <ArrowLeft size={20} /> На главную
                </Link>
                <h1 style={styles.h1}>Политика конфиденциальности персональных данных</h1>
            </header>

            <main>
                <section>
                    <h2 style={styles.h2}>1. Общие положения</h2>
                    <p style={styles.p}>Настоящая Политика составлена в соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите». Оператором данных является физическое лицо <strong style={{ color: '#000' }}>Бексултан Данияр Жомартулы</strong> (далее — Оператор), ИИН: <strong style={{ color: '#000' }}>010907501063</strong>, контактный email: <a href="mailto:dbeksultan6@gmail.com" style={styles.a}>dbeksultan6@gmail.com</a>.</p>
                </section>

                <section>
                    <h2 style={styles.h2}>2. Цели сбора данных</h2>
                    <p style={styles.p}>Оператор осуществляет сбор данных исключительно для следующих целей:</p>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Установление обратной связи с пользователем по его запросу;</li>
                        <li style={styles.li}>Обсуждение потенциального сотрудничества и оказание услуг в сфере графического дизайна и разработки;</li>
                        <li style={styles.li}>Направление портфолио, коммерческих предложений или счетов.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={styles.h2}>3. Перечень собираемых данных</h2>
                    <p style={styles.p}>Через формы на сайте maskundebala.com могут собираться следующие данные:</p>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Имя (или никнейм);</li>
                        <li style={styles.li}>Номер мобильного телефона;</li>
                        <li style={styles.li}>Адрес электронной почты (email).</li>
                    </ul>
                </section>

                <section>
                    <h2 style={styles.h2}>4. Обработка и хранение данных</h2>
                    <p style={styles.p}>Сбор и обработка данных осуществляются автоматизированным способом с использованием облачных решений (Vercel, база данных).</p>
                    <p style={styles.p}>В соответствии со ст. 16 Закона РК, Пользователь дает согласие на трансграничную передачу данных, так как технические мощности хостинг-провайдера (Vercel) могут находиться за пределами Республики Казахстан.</p>
                    <p style={styles.p}>Оператор обязуется не передавать данные третьим лицам, за исключением случаев, предусмотренных законодательством РК.</p>
                </section>

                <section>
                    <h2 style={styles.h2}>5. Права пользователя</h2>
                    <p style={styles.p}>Пользователь имеет право:</p>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Отозвать согласие на обработку данных в любой момент, написав на почту Оператора;</li>
                        <li style={styles.li}>Требовать уточнения, блокирования или уничтожения своих персональных данных;</li>
                        <li style={styles.li}>Запрашивать информацию о том, какие именно данные хранятся у Оператора.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={styles.h2}>6. Срок обработки</h2>
                    <p style={styles.p}>Персональные данные обрабатываются до момента достижения целей обработки или до момента отзыва согласия Пользователем.</p>
                </section>

                <section>
                    <h2 style={styles.h2}>7. Заключительные положения</h2>
                    <p style={styles.p}>Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента ее размещения на сайте maskundebala.com.</p>
                </section>
            </main>
        </div>
    );
}
