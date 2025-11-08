const scrollBtn = document.createElement('button');
scrollBtn.textContent = 'Наверх ↑';
scrollBtn.id = 'scrollBtn';

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '16px';
scrollBtn.style.display = 'none';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.backgroundColor = '#2c3e50';
scrollBtn.style.color = 'white';
scrollBtn.style.zIndex = '1000';

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});