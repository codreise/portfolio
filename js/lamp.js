export function initLamp() {
  const gsap = window.gsap;
  const Draggable = window.Draggable;
  const MorphSVGPlugin = window.MorphSVGPlugin;
  let startX, startY;
  // The legacy dark-theme class selects the light palette.
  const STATE = { ON: !document.body.classList.contains('dark-theme') };
  const THEME_TOGGLE = document.querySelector('.theme-toggle');
  const syncTheme = () => {
    document.body.classList.toggle('dark-theme', !STATE.ON);
    document.documentElement.style.setProperty('--on', STATE.ON ? '1' : '0');
    THEME_TOGGLE.setAttribute('aria-label', STATE.ON ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
  };
  const toggleTheme = () => {
    STATE.ON = !STATE.ON;
    syncTheme();
  };
  syncTheme();
  // Theme switching remains available if the animation CDN fails.
  if (!window.gsap || !window.Draggable || !window.MorphSVGPlugin) {
    THEME_TOGGLE.addEventListener('click', toggleTheme);
    return;
  }
  let suppressClickUntil = 0;
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
      toggleTheme();
      gsap.set([DUMMY, HIT], { display: 'none' });
      gsap.set(CORDS[0], { display: 'block' });
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

  THEME_TOGGLE.addEventListener('click', event => {
    if (event.detail !== 0 && performance.now() < suppressClickUntil) return;
    if (!CORD_TL.isActive()) CORD_TL.restart();
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
      const pulled = dist > 50;
      if (pulled) suppressClickUntil = performance.now() + 400;
      gsap.to(DUMMY_CORD, {
        attr: { x2: ENDX, y2: ENDY },
        duration: 0.1,
        onComplete: () => pulled && !CORD_TL.isActive() ? CORD_TL.restart() : RESET()
      });
    }
  });
}
