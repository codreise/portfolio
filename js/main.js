import { renderContent } from './content.js';
import { initLamp } from './lamp.js';
import { initSkillProficiency } from './skills.js';
import { initNavigation } from './navigation.js';
import { initPageEnhancements } from './enhancements.js';

function startApp() {
  const app = document.getElementById('app');
  renderContent(app);
  initLamp();
  initSkillProficiency();
  initNavigation();
  initPageEnhancements();
}

if (document.readyState === 'loading') {
  window.addEventListener('load', startApp, { once: true });
} else {
  startApp();
}