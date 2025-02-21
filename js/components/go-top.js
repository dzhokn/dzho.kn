export function initGoTop() {
  const goTop = document.querySelector('.go-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
      goTop.classList.add('visible');
    } else {
      goTop.classList.remove('visible');
    }
  });

  goTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
} 