window.onload = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header>
      <h1>Дмитро Кіріченко</h1>
      <p>Full-Stack Developer</p>
      <button class="menu-toggle" type="button" aria-label="Відкрити меню" aria-expanded="false"><span aria-hidden="true">☰</span></button>
      <nav>
        ${['about','skills','projects','resume','contact'].map(id =>
          id==='resume'
            ? `<a href="#${id}" class="resume-btn">Резюме</a>`
            : `<a href="#${id}">${{about:'Про мене',skills:'Навички',projects:'Проекти',contact:'Контакти'}[id]||id}</a>`
        ).join('')}
        <button class="theme-toggle" type="button" aria-label="Toggle theme">
          <svg class="toggle-scene" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" viewBox="0 0 197.451 481.081">
          <defs>
            <marker id="a" orient="auto" overflow="visible" refX="0" refY="0">
              <path class="toggle-scene__cord-end" fill-rule="evenodd" stroke-width=".2666" d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </marker>
            <clipPath id="g" clipPathUnits="userSpaceOnUse">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4.677" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z" />
            </clipPath>
            <clipPath id="f" clipPathUnits="userSpaceOnUse">
              <path d="M-868.418 945.051c-4.188 73.011 78.255 53.244 150.216 52.941 82.387-.346 98.921-19.444 98.921-47.058 0-27.615-4.788-42.55-73.823-42.55-69.036 0-171.436-30.937-175.314 36.667z" />
            </clipPath>
          </defs>
          <g class="toggle-scene__cords">
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.56v150.493" transform="translate(-24.503 256.106)" />
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.59s28 8.131 28 19.506-18.667 13.005-28 19.507c-9.333 6.502-28 8.131-28 19.506s28 19.507 28 19.507" transform="translate(-24.503 256.106)" />
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.575s-20 16.871-20 28.468c0 11.597 13.333 18.978 20 28.468 6.667 9.489 20 16.87 20 28.467 0 11.597-20 28.468-20 28.468" transform="translate(-24.503 256.106)" />
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.569s16 20.623 16 32.782c0 12.16-10.667 21.855-16 32.782-5.333 10.928-16 20.623-16 32.782 0 12.16 16 32.782 16 32.782" transform="translate(-24.503 256.106)" />
            <path class="toggle-scene__cord" marker-end="url(#a)" fill="none" stroke-linecap="square" stroke-width="6" d="M123.228-28.563s-10 24.647-10 37.623c0 12.977 6.667 25.082 10 37.623 3.333 12.541 10 24.647 10 37.623 0 12.977-10 37.623-10 37.623" transform="translate(-24.503 256.106)" />
            <g class="line toggle-scene__dummy-cord">
              <line marker-end="url(#a)" x1="98.7255" x2="98.7255" y1="240.5405" y2="380.5405" />
            </g>
            <circle class="toggle-scene__hit-spot" cx="98.7255" cy="380.5405" r="60" fill="transparent" />
          </g>
          <g class="toggle-scene__bulb bulb" transform="translate(844.069 -645.213)">
            <path class="bulb__cap" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.677" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z" />
            <path class="bulb__cap-shine" d="M-778.379 802.873h25.512v118.409h-25.512z" clip-path="url(#g)" transform="matrix(.52452 0 0 .90177 -368.282 82.976)" />
            <path class="bulb__cap" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v0s-8.439 10.115-28.817 10.115c-21.673 0-29.59-10.115-29.59-10.115z" />
            <path class="bulb__cap-outline" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.677" d="M-774.546 827.629s12.917-13.473 29.203-13.412c16.53.062 29.203 13.412 29.203 13.412v53.6s-8.825 16-29.203 16c-21.674 0-29.203-16-29.203-16z" />
            <g class="bulb__filament" fill="none" stroke-linecap="round" stroke-width="5">
              <path d="M-752.914 823.875l-8.858-33.06" />
              <path d="M-737.772 823.875l8.858-33.06" />
            </g>
            <path class="bulb__bulb" stroke-linecap="round" stroke-width="5" d="M-783.192 803.855c5.251 8.815 5.295 21.32 13.272 27.774 12.299 8.045 36.46 8.115 49.127 0 7.976-6.454 8.022-18.96 13.273-27.774 3.992-6.7 14.408-19.811 14.408-19.811 8.276-11.539 12.769-24.594 12.769-38.699 0-35.898-29.102-65-65-65-35.899 0-65 29.102-65 65 0 13.667 4.217 26.348 12.405 38.2 0 0 10.754 13.61 14.746 20.31z" />
            <circle class="bulb__flash" cx="-745.343" cy="743.939" r="83.725" fill="none" stroke-dasharray="10,30" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" />
            <path class="bulb__shine" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M-789.19 757.501a45.897 45.897 0 013.915-36.189 45.897 45.897 0 0129.031-21.957" />
          </g>
        </svg>
        </button>
      </nav>
    </header>

    <section id="hero" class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="hero-kicker">ВІДКРИТИЙ ДО НОВИХ МОЖЛИВОСТЕЙ</p>
        <h2 id="hero-title">Дмитро<br /><span>Кіріченко</span></h2>
        <p class="hero-role">Junior Full-Stack JavaScript Developer</p>
        <p class="hero-summary">Створюю зрозумілі вебзастосунки, Telegram-ботів та автоматизації, які допомагають вирішувати реальні задачі.</p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">Переглянути проєкти</a>
          <a href="assets/Kirichenko Dmitry Volodymyrovych Full Stack Developer.pdf" download class="btn btn-secondary">Завантажити резюме</a>
        </div>
        <div class="hero-links" aria-label="Соціальні посилання">
          <a href="https://github.com/codreise" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/дмитро-кіріченко-6387b6270/" target="_blank">LinkedIn</a>
          <a href="https://t.me/kirichenko_d" target="_blank">Telegram</a>
        </div>
      </div>
      <div class="hero-visual">
        <span class="hero-frame" aria-hidden="true"></span>
        <img src="image/my-photo.jpg" alt="Фото Дмитра Кіріченка" class="profile-photo" />
        <p class="hero-caption">JS / NODE / REACT</p>
      </div>
    </section>

    <section id="about" class="about-section">
      <div class="about-text">
        <p class="section-eyebrow">ПРОФЕСІЙНИЙ ФОКУС</p>
        <h2>Про мене</h2>
        <div class="about-copy">
          <p>Мотивований <strong>Junior Full Stack Developer</strong>, швидко навчаюсь та прагну створювати зрозумілі, зручні й стабільні вебзастосунки.</p>
          <p>Орієнтований на професійний розвиток і командну співпрацю. Спеціалізуюся на <strong>JavaScript</strong>, <strong>React</strong> та <strong>Node.js</strong>, а також маю практичний досвід роботи з HTML, CSS, PostgreSQL та Git / GitHub.</p>
        </div>
        <div class="tech-tags" aria-label="Основні технології">
          <span>JavaScript</span><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>Git</span>
        </div>
      </div>
    </section>

    <section id="skills">
      <p class="section-eyebrow">ІНСТРУМЕНТАРІЙ</p>
      <h2>Навички</h2>
      <p class="skills-intro">Технології, які використовую для створення сучасних вебзастосунків.</p>
      <div class="skills-bento">
        <article class="skill-group"><div class="skill-heading"><span class="skill-icon" aria-hidden="true">&lt;/&gt;</span><h3>Frontend</h3></div><div class="skill-tags"><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 2h20l-2 18-8 2-8-2L2 2Zm4 4 .4 4.5h9.1l-.3 2.8H6.7l.3 2.2 5 .9 5-.9.7-7.5H6Zm.3-3 9.4 0-.3 2H6.5L6.3 3Z"/></svg>JavaScript</span><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 2.7a6.8 6.8 0 0 1 5.4 2.6 6.8 6.8 0 0 0-9.5 9.5A6.8 6.8 0 0 1 12 5.2Zm0 13.6a6.8 6.8 0 0 1-5.4-2.6 6.8 6.8 0 0 0 9.5-9.5 6.8 6.8 0 0 1-4.1 12.1Z"/></svg>React</span><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 2h20l-2 18-8 2-8-2L2 2Zm3.3 3.2.3 3.4h12.2l-.3 3.5H8.8l.3 2.1 3.8.8 3.8-.8.3-2.1h2.2l-.6 4-5.7 1.3-5.7-1.3L6.1 12h2.2l.2 1.5h7l.2-1.5H5.9L5.3 5.2h14.1l-.2 2.2H7.7l-.2-2.2H5.3Z"/></svg>HTML5</span><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h18l-1.7 15.5L12 21l-7.3-2.5L3 3Zm3.4 3 .3 3.1h10.5l-.3 2.3H7l.3 2.9 4.7 1.3 4.7-1.3.3-2.1h2.1l-.5 4-6.6 1.8-6.6-1.8L5 11.4h2.2L7 8.3h12.1l.3-2.3H6.4Z"/></svg>CSS3</span></div></article>
        <article class="skill-group"><div class="skill-heading"><span class="skill-icon" aria-hidden="true">{ }</span><h3>Backend</h3></div><div class="skill-tags"><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c-5.5 0-9 2.3-9 5.2v8.6c0 2.9 3.5 5.2 9 5.2s9-2.3 9-5.2V7.7c0-2.9-3.5-5.2-9-5.2Zm6.5 13.8c0 1.4-2.6 2.6-6.5 2.6s-6.5-1.2-6.5-2.6v-2.1c1.6 1.1 3.9 1.6 6.5 1.6s4.9-.5 6.5-1.6v2.1Zm0-4.3c0 1.4-2.6 2.6-6.5 2.6s-6.5-1.2-6.5-2.6V9.9c1.6 1.1 3.9 1.6 6.5 1.6s4.9-.5 6.5-1.6V12Zm0-4.3c0 1.4-2.6 2.6-6.5 2.6S5.5 9.1 5.5 7.7 8.1 5.1 12 5.1s6.5 1.2 6.5 2.6Z"/></svg>Node.js</span><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4V4Zm3 3v10h2V7H7Zm4 0v10h2V7h-2Zm4 0v10h2V7h-2Z"/></svg>Express</span></div></article>
        <article class="skill-group"><div class="skill-heading"><span class="skill-icon" aria-hidden="true">DB</span><h3>Databases</h3></div><div class="skill-tags"><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c4.4 0 8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6c0-1.7 3.6-3 8-3Zm-5.5 4.2C7.7 8 9.7 8.4 12 8.4s4.3-.4 5.5-1.2V6.3c-.8.7-3 1.2-5.5 1.2S7.3 7 6.5 6.3v.9Zm0 4.6c1.2.8 3.2 1.2 5.5 1.2s4.3-.4 5.5-1.2v-1.3c-1.2.8-3.2 1.2-5.5 1.2s-4.3-.4-5.5-1.2v1.3Z"/></svg>PostgreSQL</span><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c-4.7 0-7.5 2.1-7.5 5v9c0 2.9 2.8 5 7.5 5s7.5-2.1 7.5-5v-9c0-2.9-2.8-5-7.5-5Zm0 2.5c3.1 0 5 .9 5 2s-1.9 2-5 2-5-.9-5-2 1.9-2 5-2Zm5 11.5c0 1.1-1.9 2-5 2s-5-.9-5-2v-2c1.4.8 3 1.1 5 1.1s3.6-.3 5-1.1v2Z"/></svg>MongoDB</span></div></article>
        <article class="skill-group"><div class="skill-heading"><span class="skill-icon" aria-hidden="true">↗</span><h3>Tools</h3></div><div class="skill-tags"><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 2.8L5.5 8.4v7.2l6.5 3.6 6.5-3.6V8.4L12 4.8Zm-1.2 3h2.4v5.1l3.2-1.8 1.2 2.1-5.6 3.1-5.6-3.1 1.2-2.1 3.2 1.8V7.8Z"/></svg>Git</span><span><svg class="tech-logo" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm-1.2 2h2.4v4.1l2.5 1.5-1.2 2-3.7-2.3V7.5Z"/></svg>Docker</span></div></article>
      </div>
      <p class="skills-language">English <span aria-hidden="true">/</span> B2 · Intermediate</p>
    </section>

    <section id="projects">
      <p class="section-eyebrow">ВИБРАНІ РОБОТИ</p>
      <h2>Проєкти</h2>
      <div class="projects-grid">
        <article class="project-card project-featured">
          <div class="project-shot todo-shot" role="img" aria-label="Статичне прев’ю ToDo App"><span>TODO</span><strong>Tasks that move<br />work forward.</strong><i>＋ Add task</i></div>
          <div class="project-info"><h3>ToDo App</h3><p>Інтерактивний менеджер завдань для планування щоденних справ. Підтримує фільтрацію за статусом, збереження стану в localStorage та швидке редагування.</p><div class="project-tech" aria-label="Технології ToDo App"><span>JavaScript</span><span>HTML5</span><span>CSS3</span><span>localStorage</span></div><div class="project-actions"><a href="projects/todo-app/index.html" target="_blank" class="btn">Переглянути</a><a href="https://github.com/codreise/portfolio/tree/main/projects/todo-app" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub</a></div></div>
        </article>
        <article class="project-card">
          <div class="project-shot weather-shot" role="img" aria-label="Статичне прев’ю Weather Dashboard"><span>WEATHER</span><strong>Погода<br />у вашому місті</strong><i>Search city</i></div>
          <div class="project-info"><h3>Weather Dashboard</h3><p>Зручний сервіс для відстеження погодних умов у реальному часі. Реалізовано пошук за містами, відображення прогнозу та інтеграцію з OpenWeather API.</p><div class="project-tech" aria-label="Технології Weather Dashboard"><span>JavaScript</span><span>REST API</span><span>Fetch API</span><span>CSS Grid</span></div><div class="project-actions"><a href="projects/weather/index.html" target="_blank" class="btn">Переглянути</a><a href="https://github.com/codreise/portfolio/tree/main/projects/weather" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub</a></div></div>
        </article>
        <article class="project-card">
          <div class="project-shot hero-shot" role="img" aria-label="Статичне прев’ю Hero's Journey"><div class="hero-mini-banner" aria-hidden="true"><span class="hero-pixel-mark">✦</span><span class="hero-pixel-copy">QUEST LOG<br /><b>HERO’S JOURNEY</b></span><span class="hero-pixel-spark">◆</span></div><div class="hero-shot-status"><span><b class="status-dot"></b> ONLINE</span><em>v1.0</em></div><span>HERO&apos;S JOURNEY</span><strong>Choose your path.<br />Shape your story.</strong><i>Telegram RPG</i></div>
          <div class="project-info"><h3>Hero&apos;s Journey</h3><p>Інтерактивний Telegram RPG-бот із динамічним сторітелінгом, керуванням характеристиками персонажа та розгалуженими виборами.</p><div class="project-tech" aria-label="Технології Hero's Journey"><span>JavaScript / Node.js</span><span>Telegram Bot API</span><span>React (Web App)</span></div><div class="project-actions"><a href="https://t.me/Her0JourneyBot" target="_blank" rel="noopener noreferrer" class="btn" aria-label="Відкрити Telegram Bot Hero's Journey">Telegram Bot ↗</a><a href="https://github.com/codreise/Hero-s-Journey" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="Відкрити GitHub Hero's Journey">GitHub ↗</a></div></div>
        </article>
      </div>
    </section>

    <section id="resume">
      <p class="section-eyebrow">ДОСВІД І НАВЧАННЯ</p><h2>Резюме</h2>
      <div class="resume-timeline">
        <article class="timeline-item"><span class="timeline-label">ПРАКТИЧНИЙ ДОС��ІД / ПРОЄКТИ</span><span class="year">2023 — Теперішній час</span><strong>Full Stack Developer <small>(Pet-projects / Freelance)</small></strong><p>Розробка full-stack вебзастосунків, проектування REST API, робота з базами даних PostgreSQL/MongoDB та деплой на Vercel/Render.</p></article>
        <article class="timeline-item"><span class="timeline-label">ОСВІТА ТА СЕРТИФІКАЦІЯ</span><span class="year">2023 — 2024</span><strong>Курси Full-Stack Development / Курс JavaScript</strong><p>Опанування сучасного JavaScript, React, Node.js та командної розробки через Git.</p><div class="certificate-card"><span class="certificate-label">// CERTIFICATE</span><strong>Fullstack JS Developer Course Certificate</strong><span class="certificate-meta">Freshcode training center · 24 березня 2023</span><a class="certificate-link" href="assets/fullstack-js-certificate.pdf" target="_blank" rel="noopener noreferrer" aria-label="Переглянути сертифікат Fullstack JS Developer">Переглянути сертифікат ↗</a></div></article>
      </div>
      <a href="assets/Kirichenko Dmitry Volodymyrovych Full Stack Developer.pdf" download class="download-resume-btn">Завантажити резюме</a>
      <a href="assets/Kirichenko Dmitry Volodymyrovych Full Stack Developer.pdf" target="_blank" class="btn">Переглянути онлайн</a>
    </section>

    <section id="contact"><div class="contact-cta">
      <p class="section-eyebrow">КОНТАКТИ</p><h2>Маєте проєкт або пропозицію? Обговорімо</h2>
      <div class="contact-links">
        <a class="contact-link" href="mailto:kirichenkod092@gmail.com">Email<br /><strong>kirichenkod092@gmail.com</strong></a>
        <a class="contact-link" href="https://t.me/kirichenko_d" target="_blank">Telegram<br /><strong>@kirichenko_d</strong></a>
        <a class="contact-link" href="https://github.com/codreise" target="_blank">GitHub<br /><strong>github.com/codreise</strong></a>
        <a class="contact-link" href="https://www.linkedin.com/in/дмитро-кіріченко-6387b6270/" target="_blank">LinkedIn<br /><strong>linkedin.com/in/dmytro-kirichenko</strong></a>
      </div>
    </div></section>

    <footer>
      <p>© 2025 Дмитро Кіріченко</p>
    </footer>

    <button class="back-to-top" type="button" aria-label="Вгору" title="Вгору">
      <span aria-hidden="true">↑</span>
    </button>
  `;

  initLamp();
  initSkillProficiency();
  initPageEnhancements();
};

function initSkillProficiency() {
  const levels = {
    JavaScript: ['Advanced', 85],
    React: ['Intermediate', 75],
    HTML5: ['Advanced', 90],
    CSS3: ['Advanced', 90],
    'Node.js': ['Intermediate', 70],
    Express: ['Intermediate', 70],
    PostgreSQL: ['Intermediate', 65],
    MongoDB: ['Basic', 50],
    Git: ['Advanced', 80],
    Docker: ['Basic', 45]
  };

  document.querySelectorAll('#skills .skill-tags > span').forEach(tag => {
    const name = tag.textContent.trim();
    const level = levels[name];
    if (!level) return;
    const icon = tag.querySelector('.tech-logo')?.outerHTML || '';
    tag.classList.add('skill-item');
    const filledDots = Math.round(level[1] / 20);
    const dots = Array.from({ length: 5 }, (_, index) => `<span class="skill-level-dot${index < filledDots ? ' is-filled' : ''}" aria-hidden="true"></span>`).join('');
    tag.innerHTML = `${icon}<span class="skill-item__name">${name}</span><span class="skill-item__level"><span class="skill-level-dots">${dots}</span><span class="skill-item__percent">${level[1]}%</span></span>`;
    tag.setAttribute('aria-label', `${name}: ${level[0]}, ${level[1]}%`);
  });
}

function initPageEnhancements() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Відкрити меню');
  }));

  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));

  const backToTop = document.querySelector('.back-to-top');
  const updateBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 300);
  };
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'instant' }));
  updateBackToTop();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('section').forEach(section => { section.classList.add('reveal'); revealObserver.observe(section); });
}

function initLamp() {
  let startX, startY;
  const STATE = { ON: false };
  const CORDS = document.querySelectorAll('.toggle-scene__cord');
  const HIT = document.querySelector('.toggle-scene__hit-spot');
  const DUMMY = document.querySelector('.toggle-scene__dummy-cord');
  const DUMMY_CORD = document.querySelector('.toggle-scene__dummy-cord line');
  const PROXY = document.createElement('div');

  const ENDX = DUMMY_CORD.getAttribute('x2');
  const ENDY = DUMMY_CORD.getAttribute('y2');

  const RESET = () => gsap.set(PROXY, { x: ENDX, y: ENDY });
  RESET();

  const CORD_TL = gsap.timeline({
    paused: true,
    onStart: () => {
      STATE.ON = !STATE.ON;
      gsap.set(document.documentElement, { '--on': STATE.ON ? 1 : 0 });
      gsap.set([DUMMY, HIT], { display: 'none' });
      gsap.set(CORDS[0], { display: 'block' });
      document.body.classList.toggle('dark-theme', !STATE.ON);
    },
    onComplete: () => {
      gsap.set([DUMMY, HIT], { display: 'block' });
      gsap.set(CORDS[0], { display: 'none' });
      RESET();
    }
  });

  for (let i = 1; i < CORDS.length; i++) {
    CORD_TL.add(gsap.to(CORDS[0], {
      morphSVG: CORDS[i],
      duration: 0.1,
      repeat: 1,
      yoyo: true
    }));
  }

  const THEME_TOGGLE = document.querySelector('.theme-toggle');
  THEME_TOGGLE.addEventListener('click', event => {
    if (event.target === event.currentTarget) CORD_TL.restart();
  });

  Draggable.create(PROXY, {
    trigger: HIT,
    type: 'x,y',
    onPress: e => { startX = e.x; startY = e.y; },
    onDrag: function() {
      gsap.set(DUMMY_CORD, { attr: { x2: this.x, y2: this.y } });
    },
    onRelease: function(e) {
      const dist = Math.hypot(e.x - startX, e.y - startY);
      gsap.to(DUMMY_CORD, {
        attr: { x2: ENDX, y2: ENDY },
        duration: 0.1,
        onComplete: () => dist > 50 ? CORD_TL.restart() : RESET()
      });
    }
  });
}
