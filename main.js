const app = document.getElementById("app");

app.innerHTML = `
  <header>
    <h1>Дмитро Кіріченко</h1>
    <p>Full-Stack Developer</p>
    <nav>
      ${['about', 'skills', 'projects', 'resume', 'contact'].map(id =>
        id === 'resume'
          ? `<a href="#${id}" class="resume-btn">Резюме</a>`
          : `<a href="#${id}">${{
              about: 'Про мене',
              skills: 'Навички',
              projects: 'Проекти',
              contact: 'Контакти'
            }[id] || id}</a>`
      ).join('')}
      <button id="theme-toggle" title="Змінити тему">🌙</button>
    </nav>
  </header>

  <section id="about" class="about-section">
    <img src="image/my-photo.jpg" alt="Фото Дмитра Кіріченка" class="profile-photo" />
    <div class="about-text">
      <h2>Про мене</h2>
      <p>Мотивований Junior Full Stack Developer, швидко навчаюсь та прагну створювати зрозумілі, зручні й стабільні веб-додатки. Працюю з JavaScript, React і Node.js, маю практичні навички роботи з HTML, CSS, PostgreSQL та використовую Git / GitHub для контролю версій. Також вивчав Express, Formik / Yup, Redux, MongoDB, SQL і Docker. Орієнтований на професійний розвиток, командну співпрацю й постійне вдосконалення технічних навичок у сфері веб-розробки.</p>
    </div>
  </section>

  <section id="skills">
    <h2>Навички</h2>
    <div class="skills-tags">
      <h3>Frontend</h3>
      ${['HTML5','CSS3','JavaScript','React','Адаптивна верстка']
        .map(skill => `<span class="tag">${skill}</span>`).join('')}
      <h3>Backend</h3>
      ${['Node.js','Express','PostgreSQL','MongoDB']
        .map(skill => `<span class="tag">${skill}</span>`).join('')}
      <h3>Інструменти</h3>
      ${['Git','GitHub','Docker']
        .map(skill => `<span class="tag">${skill}</span>`).join('')}
      <h3>Soft Skills</h3>
      ${['Базова англійська','Командна робота']
        .map(skill => `<span class="tag">${skill}</span>`).join('')}
    </div>
  </section>

  <section id="projects">
    <h2>Проекти</h2>
    <div class="projects-grid">

      <div class="project-card">
        <iframe src="projects/todo-app/index.html" title="ToDo App Preview"></iframe>
        <div class="project-info">
          <h3>ToDo App</h3>
          <p>Простий список справ з використанням JavaScript і localStorage.</p>
          <a href="projects/todo-app/index.html" target="_blank" class="btn">Демо</a>
        </div>
      </div>

      <div class="project-card">
        <iframe src="projects/weather/index.html" title="Weather Dashboard Preview"></iframe>
        <div class="project-info">
          <h3>Weather Dashboard</h3>
          <p>Додаток для перегляду погоди у містах.</p>
          <a href="projects/weather/index.html" target="_blank" class="btn">Демо</a>
        </div>
      </div>

    </div>
  </section>

  <section id="resume">
    <h2>Резюме</h2>
    <a href="assets/Kirichenko Dmitry Volodymyrovych Full Stack Developer.pdf" download class="download-resume-btn">📄 Завантажити резюме</a>
    <a href="assets/Kirichenko Dmitry Volodymyrovych Full Stack Developer.pdf" target="_blank" class="btn">👀 Переглянути онлайн</a>
  </section>

  <section id="contact">
    <h2>Контакти</h2>
    <p>Email: <a href="mailto:kirichenkod092@gmail.com">kirichenkod092@gmail.com</a></p>
    <p>Telegram: <a href="https://t.me/kirichenko_d" target="_blank">@kirichenko_d</a></p>
    <p>GitHub: <a href="https://github.com/codreise" target="_blank">github.com/codreise</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%BE-%D0%BA%D1%96%D1%80%D1%96%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-6387b6270/" target="_blank">linkedin.com/in/dmytro-kirichenko</a></p>
  </section>

  <footer>
    <p>© 2025 Дмитро Кіріченко</p>
  </footer>
`;

const btn = document.getElementById('theme-toggle');
if (btn) {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    btn.textContent = '☀️';
  }
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}