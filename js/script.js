function init() {
  const logo = document.querySelector('.logo');
  const main = document.querySelector('main');

  (function animateLogo() {
    logo.animate([
      { transform: 'scale(0)' },
      { transform: 'scale(1)' }
    ], {
      duration: 400,
      iterations: 1
    });
  })();

  function onScroll() {
    if (window.pageYOffset > 20) {
      main.style.opacity = 1;
      logo.style.transform = 'scale(5)';
      logo.style.opacity = 0;
    } else {
      main.style.opacity = 0;
      logo.style.transform = 'scale(1)';
      logo.style.opacity = 1;
    }
  }

  window.addEventListener('scroll', onScroll);
}

document.addEventListener("DOMContentLoaded", init);
