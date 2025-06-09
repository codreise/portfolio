const app = document.getElementById("app");

app.innerHTML = `
  <header>
    <h1>Дмитро Кіріченко</h1>
    <p>Full-Stack Developer</p>
    <nav>
      <a href="#about">Про мене</a>
      <a href="#skills">Навички</a>
      <a href="#projects">Проєкти</a>
      <a href="#resume">Резюме</a>
      <a href="#contact">Контакти</a>
    </nav>
  </header>

  <section id="about" class="about-section">
    <img src="assets/my-photo.jpg" alt="Фото" class="profile-photo" />
    <div class="about-text">
      <h2>Про мене</h2>
      <p>Привіт! Мене звати Дмитро, і я початківець у сфері веб-розробки. Я маю базові знання та навички у створенні веб-сайтів, використовуючи HTML, CSS та JavaScript. Також я працював з базами даних, зокрема PostgreSQL та MongoDB. Наразі я активно шукаю можливості для розвитку в галузі інформаційних технологій, зокрема в розробці веб-сайтів та програмуванні. Хоча у мене ще мало практичного досвіду, я завжди готовий до нових викликів та прагну вчитися. Я маю сильну мотивацію розвиватися в цій сфері та готовий застосувати свої навички для створення якісних та функціональних рішень для клієнтів. Буду радий співпрацювати на фріланс-платформах і розвиватися в команді, яка допоможе мені вдосконалювати свої навички та отримати цінний досвід.</p>
    </div>
  </section>

  <section id="skills">
    <h2>Навички</h2>
    <ul>
      <li>HTML5, CSS3</li>
      <li>JavaScript (ES6+)</li>
      <li>React (базово)</li>
      <li>Node.js (базово)</li>
      <li>PostgreSQL, MongoDB</li>
      <li>Git, GitHub</li>
      <li>Адаптивна верстка</li>
      <li>Базові знання англійської</li>
    </ul>
  </section>

  <footer>
    <p>© 2025 Дмитро Кіріченко</p>
    <a href="assets/resume.pdf" download>📄 Завантажити резюме</a>
  </footer>
`;