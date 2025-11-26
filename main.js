window.onload = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header>
      <h1>Дмитро Кіріченко</h1>
      <p>Full-Stack Developer</p>
      <nav>
        ${['about','skills','projects','resume','contact'].map(id =>
          id==='resume'
            ? `<a href="#${id}" class="resume-btn">Резюме</a>`
            : `<a href="#${id}">${{about:'Про мене',skills:'Навички',projects:'Проекти',contact:'Контакти'}[id]||id}</a>`
        ).join('')}
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
      <div class="skills-grid">
        <h3>Frontend</h3>
        <div class="card from-bottom">
          <div class="front-content">HTML5</div>
          <div class="content">
            <p class="heading">HTML5</p>
            <p>Семантична розмітка, доступність, адаптивні структури.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">CSS3</div>
          <div class="content">
            <p class="heading">CSS3</p>
            <p>Flexbox, Grid, анімації, адаптивна верстка.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">JavaScript</div>
          <div class="content">
            <p class="heading">JavaScript</p>
            <p>ES6+, DOM, API інтеграції, асинхронність.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">React</div>
          <div class="content">
            <p class="heading">React</p>
            <p>Hooks, Context, Redux, створення SPA.</p>
          </div>
        </div>
        <h3>Backend</h3>
        <div class="card from-bottom">
          <div class="front-content">Node.js</div>
          <div class="content">
            <p class="heading">Node.js</p>
            <p>REST API, робота з файлами, асинхронні процеси.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">Express</div>
          <div class="content">
            <p class="heading">Express</p>
            <p>Маршрутизація, middleware, JWT‑автентифікація.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">PostgreSQL</div>
          <div class="content">
            <p class="heading">PostgreSQL</p>
            <p>SQL‑запити, реляційні бази даних, оптимізація.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">MongoDB</div>
          <div class="content">
            <p class="heading">MongoDB</p>
            <p>NoSQL, колекції, інтеграція з Node.js.</p>
          </div>
        </div>
        <h3>Інструменти</h3>
        <div class="card from-bottom">
          <div class="front-content">Git</div>
          <div class="content">
            <p class="heading">Git</p>
            <p>Контроль версій, гілки, merge, pull requests.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">Docker</div>
          <div class="content">
            <p class="heading">Docker</p>
            <p>Контейнери, деплоймент, конфігурація середовищ.</p>
          </div>
        </div>
        <h3>Soft Skills</h3>
        <div class="card from-bottom">
          <div class="front-content">Командна робота</div>
          <div class="content">
            <p class="heading">Командна робота</p>
            <p>Ефективна комунікація, співпраця, адаптивність.</p>
          </div>
        </div>
        <div class="card from-bottom">
          <div class="front-content">Англійська</div>
          <div class="content">
            <p class="heading">Англійська</p>
            <p>Базовий рівень для читання документації та спілкування.</p>
          </div>
        </div>
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
      <p>LinkedIn: <a href="https://www.linkedin.com/in/дмитро-кіріченко-6387b6270/" target="_blank">linkedin.com/in/dmytro-kirichenko</a></p>
    </section>

    <footer>
      <p>© 2025 Дмитро Кіріченко</p>
    </footer>
  `;

  initLamp();
};

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