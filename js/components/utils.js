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

export function initFontLoading() {
  const fontPromise = document.fonts.load('1em "Dancing Script"');
  
  fontPromise.then(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('loaded');
    });
  }).catch(() => {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 1000);
  });
}

// Unhide the content and jump to the right place on the page at the same time
export function unhideSkipContent() {
  let hidden = document.querySelector('.skip-me');

  hidden.classList.remove('skip-me');
  let el_css = window.getComputedStyle(hidden, null);
  let h = Number(el_css.getPropertyValue('height').replace('px', ''));
  let pb = Number(el_css.getPropertyValue('padding-bottom').replace('px', ''));
  window.scroll(0, h + pb);
};