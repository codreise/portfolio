export function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  const mobileMenu = window.matchMedia('(max-width: 768px)');
  const syncMenuAccessibility = () => {
    const isClosedMobileMenu = mobileMenu.matches && !nav.classList.contains('is-open');
    nav.inert = isClosedMobileMenu;
    nav.setAttribute('aria-hidden', String(isClosedMobileMenu));
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Р вЂ”Р В°Р С”РЎР‚Р С‘РЎвЂљР С‘ Р СР ВµР Р…РЎР‹' : 'Р вЂ™РЎвЂ“Р Т‘Р С”РЎР‚Р С‘РЎвЂљР С‘ Р СР ВµР Р…РЎР‹');
    syncMenuAccessibility();
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Р вЂ™РЎвЂ“Р Т‘Р С”РЎР‚Р С‘РЎвЂљР С‘ Р СР ВµР Р…РЎР‹');
    syncMenuAccessibility();
  }));
  mobileMenu.addEventListener('change', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Р вЂ™РЎвЂ“Р Т‘Р С”РЎР‚Р С‘РЎвЂљР С‘ Р СР ВµР Р…РЎР‹');
    syncMenuAccessibility();
  });
  syncMenuAccessibility();

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
}