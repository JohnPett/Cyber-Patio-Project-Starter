function init() {
  const dialog = document.querySelector('dialog');
  const close = document.querySelector('.close');
  const square = document.querySelector('.grid__square');
  const circle = document.querySelector('.grid__circle');

  function onCloseClick() {
    dialog.innerHTML = '';
    dialog.style.display = 'none';
    close.style.display = 'none';
  }
  
  function onImageClick(event) {
    const src = event.currentTarget.getAttribute('src');
    const img = new Image();
    img.onload = function() {
      dialog.innerHTML = `<img src="${img.src}" />`;
      dialog.style.display = 'flex';
    }
    img.src = src;
    close.style.display = 'block';
  }

  function onVideoClick(event) {
    const src = event.currentTarget.querySelector('source').getAttribute('src');
    dialog.innerHTML = `<video autoplay loop muted playsinline><source src="${src}" type="video/mp4"></video>`;
    dialog.style.display = 'flex';
    close.style.display = 'block';
  }

  function onScroll(event) {
    const windowHeight = window.innerHeight;
    console.log(window.pageYOffset);
    square.style.transform = `translateY(${windowHeight - (window.pageYOffset * 1.5)}px) scale(${window.pageYOffset * 0.01})`;
    circle.style.transform = `translateY(${windowHeight - (window.pageYOffset * 1.75)}px) scale(${window.pageYOffset * 0.005})`;
  }
  
  function addEventListeners() {
    const videos = [...document.querySelectorAll('video')];
    const images = [...document.querySelectorAll('img')];
    images.forEach(image => image.addEventListener('click', onImageClick));
    videos.forEach(video => video.addEventListener('click', onVideoClick));
    close.addEventListener('click', onCloseClick);
    window.addEventListener('scroll', onScroll);
  }

  addEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
