function init() {
  let isPlaying = false;
  let duration = 0;

  const dialog = document.querySelector('dialog');
  const close = document.querySelector('.close');
  const square1 = document.querySelector('.grid__square-one');
  const circle1 = document.querySelector('.grid__circle-one');
  const square2 = document.querySelector('.grid__square-two');
  const circle2 = document.querySelector('.grid__circle-two');
  const sound = document.querySelector('.click');
  const playerTrack = document.querySelector('.player__track');
  const playButton = document.querySelector('.player__play-button');
  const playerProgress = document.querySelector('.player__progress');

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

  function onScroll() {
    const windowHeight = window.innerHeight;
    square1.style.transform = `translateY(${windowHeight - (window.pageYOffset * 1.5)}px) scaleY(${window.pageYOffset * 0.01})`;
    circle1.style.transform = `translateY(${windowHeight - (window.pageYOffset * 1.75)}px) scale(${window.pageYOffset * 0.005})`;
    square2.style.transform = `translateY(${windowHeight - (window.pageYOffset * 1.5)}px) scale(${window.pageYOffset * 0.01})`;
    circle2.style.transform = `translateY(${windowHeight - (window.pageYOffset * 1.75)}px) scale(${window.pageYOffset * 0.05})`;
  }

  function onLinkClick(event) {
    event.preventDefault();
    sound.play();
    window.location.href = event.currentTarget.getAttribute('href');
  }

  function onPlayClick() {
    if (isPlaying) {
      playerTrack.load();
      playButton.innerHTML = 'PLAY';
      playerProgress.style.width = '0px';
    } else {
      playerTrack.play();
      playButton.innerHTML = 'PAUSE';
      playerProgress.style.transitionDuration = `${duration}s`;
      playerProgress.style.width = '100%';
    }
    isPlaying = !isPlaying;
  }

  function onTrackCanPlay() {
    console.log('can play');
    duration = playerTrack.duration;
    console.log(duration);
  }
  
  function addEventListeners() {
    const videos = [...document.querySelectorAll('video')];
    const images = [...document.querySelectorAll('img')];
    const hrefs = [...document.querySelectorAll('a')];
    images.forEach(image => image.addEventListener('click', onImageClick));
    videos.forEach(video => video.addEventListener('click', onVideoClick));
    hrefs.forEach(href => href.addEventListener('click', onLinkClick));
    close.addEventListener('click', onCloseClick);
    playButton.addEventListener('click', onPlayClick);
    playerTrack.addEventListener('canplay', onTrackCanPlay);
    // window.addEventListener('scroll', onScroll);
  }

  addEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
