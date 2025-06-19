const app = document.getElementById("app");

app.innerHTML = `
  <header>
    <h1>Дмитро Кіріченко</h1>
    <p>Full-Stack Developer</p>
    <nav>
      <a href="#about">Про мене</a>
      <a href="#skills">Навички</a>
      <a href="#projects">Проекти</a>
      <a href="#resume" class="resume-btn">Резюме</a>
      <a href="#contact">Контакти</a>
      <button id="theme-toggle" title="Змінити тему">🌙</button>
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
    <div class="skills-tags">
      <span class="tag">HTML5</span>
      <span class="tag">CSS3</span>
      <span class="tag">JavaScript</span>
      <span class="tag">React</span>
      <span class="tag">Node.js</span>
      <span class="tag">Git</span>
      <span class="tag">GitHub</span>
      <span class="tag">Адаптивна верстка</span>
      <span class="tag">Базова англійська</span>
    </div>
  </section>

  <section id="projects">
    <h2>Проекти</h2>
    <div class="project">
      <h3>ToDo App</h3>
      <p>Простий список справ з використанням JavaScript і localStorage.</p>
      <a href="ToDo App/todo.html" target="_blank">Відкрити ToDo App</a>
      <a href="https://github.com/codreise?tab=repositories" target="_blank">GitHub</a>
    </div>
    <div class="project">
      <h3>Weather Dashboard</h3>
      <p>Додаток для перегляду погоди у містах з використанням API OpenWeatherMap.</p>
      <a href="https://твій-проект.com/weather" target="_blank">Переглянути</a>
      <a href="https://github.com/твій-профіль/weather-dashboard" target="_blank">GitHub</a>
    </div>
    <div class="project">
      <h3>Landing Page</h3>
      <p>Адаптивна лендинг-сторінка для малого бізнесу з сучасним дизайном.</p>
      <a href="https://твій-проект.com/landing" target="_blank">Переглянути</a>
      <a href="https://github.com/твій-профіль/landing-page" target="_blank">GitHub</a>
    </div>
  </section>

  <section id="resume">
    <h2>Резюме</h2>
    <a href="assets/resume.pdf" download class="download-resume-btn">📄 Завантажити резюме</a>
  </section>

  <section id="contact">
  <h2>Контакти</h2>
  <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox">kirichenkod092@gmail.com</a></p>
  <p>Telegram: <a href="https://t.me/kirichenko_d" target="_blank">@kirichenko_d</a></p>
  <p>GitHub: <a href="https://github.com/codreise" target="_blank">github.com/codreise</a></p>
</section>

  <footer>
    <p>© 2025 Дмитро Кіріченко</p>
  </footer>
`;

// Додаємо перемикач теми
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    btn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });
});