export function initPageEnhancements() {
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