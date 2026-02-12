import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="policy-container">
            <header className="policy-header">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> На главную
                </Link>
                <h1>Политика конфиденциальности персональных данных</h1>
            </header>

            <main className="policy-content">
                <section>
                    <h2>1. Общие положения</h2>
                    <p>Настоящая Политика составлена в соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите». Оператором данных является физическое лицо <strong>Бексултан Данияр Жомартулы</strong> (далее — Оператор), ИИН: <strong>010907501063</strong>, контактный email: <a href="mailto:dbeksultan6@gmail.com">dbeksultan6@gmail.com</a>.</p>
                </section>

                <section>
                    <h2>2. Цели сбора данных</h2>
                    <p>Оператор осуществляет сбор данных исключительно для следующих целей:</p>
                    <ul>
                        <li>Установление обратной связи с пользователем по его запросу;</li>
                        <li>Обсуждение потенциального сотрудничества и оказание услуг в сфере графического дизайна и разработки;</li>
                        <li>Направление портфолио, коммерческих предложений или счетов.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Перечень собираемых данных</h2>
                    <p>Через формы на сайте maskundebala.com могут собираться следующие данные:</p>
                    <ul>
                        <li>Имя (или никнейм);</li>
                        <li>Номер мобильного телефона;</li>
                        <li>Адрес электронной почты (email).</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Обработка и хранение данных</h2>
                    <p>Сбор и обработка данных осуществляются автоматизированным способом с использованием облачных решений (Vercel, база данных).</p>
                    <p>В соответствии со ст. 16 Закона РК, Пользователь дает согласие на трансграничную передачу данных, так как технические мощности хостинг-провайдера (Vercel) могут находиться за пределами Республики Казахстан.</p>
                    <p>Оператор обязуется не передавать данные третьим лицам, за исключением случаев, предусмотренных законодательством РК.</p>
                </section>

                <section>
                    <h2>5. Права пользователя</h2>
                    <p>Пользователь имеет право:</p>
                    <ul>
                        <li>Отозвать согласие на обработку данных в любой момент, написав на почту Оператора;</li>
                        <li>Требовать уточнения, блокирования или уничтожения своих персональных данных;</li>
                        <li>Запрашивать информацию о том, какие именно данные хранятся у Оператора.</li>
                    </ul>
                </section>

                <section>
                    <h2>6. Срок обработки</h2>
                    <p>Персональные данные обрабатываются до момента достижения целей обработки или до момента отзыва согласия Пользователем.</p>
                </section>

                <section>
                    <h2>7. Заключительные положения</h2>
                    <p>Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента ее размещения на сайте maskundebala.com.</p>
                </section>
            </main>

            <style jsx="true">{`
                .policy-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px 20px;
                    color: #000;
                    font-family: 'Inter', sans-serif;
                }

                .policy-header {
                    margin-bottom: 40px;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    padding-bottom: 20px;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: #666;
                    text-decoration: none;
                    margin-bottom: 20px;
                    transition: 0.2s;
                }
                .back-link:hover { color: #000; }

                h1 {
                    font-size: 2rem;
                    line-height: 1.2;
                    color: #000;
                }

                h2 {
                    font-size: 1.5rem;
                    margin-top: 30px;
                    margin-bottom: 15px;
                    color: #000;
                }

                p, li {
                    color: #333;
                    line-height: 1.6;
                    font-size: 1rem;
                    margin-bottom: 15px;
                }

                ul {
                    padding-left: 20px;
                    margin-bottom: 20px;
                }

                a {
                    color: #000;
                    text-decoration: underline;
                }
                
                strong {
                    color: #000;
                }
            `}</style>
        </div>
    );
}
