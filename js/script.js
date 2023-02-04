function init() {
  const logo = document.querySelector('.logo');
  const main = document.querySelector('main');

  (function hideBanner() {
    const banner = document.querySelector('.banner');
    setTimeout(function() {
      banner.style.opacity = 0;
    }, 20000);
  })();

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
    const pageY = window.pageYOffset * 0.01;
    if (window.pageYOffset > 20 && pageY > 1) {
      logo.style.transform = `scale(${pageY})`;
      logo.style.opacity = 1;
      main.style.opacity = 0;
    }
    if (pageY > 5) {
      logo.style.opacity = 0;
      main.style.opacity = 1;
    }
  }

  window.addEventListener('scroll', onScroll);
}

document.addEventListener("DOMContentLoaded", init);
