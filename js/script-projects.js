function init() {
  const dialog = document.querySelector('dialog');
  const close = document.querySelector('.close');
  function onCloseClick() {
    dialog.innerHTML = '';
    dialog.style.display = 'none';
    close.style.display = 'none';
  }
  
  function onImageClick(event) { // On each image clicked give me the corresponding event
    const src = event.currentTarget.getAttribute('src'); // Grabbing the source of the image clicked
    const img = new Image(); // Create HTML <img> tag with JS

    img.onload = function() { // Once my image has loaded...
      dialog.innerHTML = `<img src="${img.src}" />`;  // Go find the <dialog> previously defined above
      dialog.style.display = 'flex'; // Show the hidden dialog box
    }

    img.src = src; // Define the src attribute of the <img src="_image_source_" />

    close.style.display = 'block';
  }

  function onVideoClick(event) {
    const src = event.currentTarget.querySelector('source').getAttribute('src');
    dialog.innerHTML = `<video autoplay loop muted playsinline><source src="${src}" type="video/mp4"></video>`;
    dialog.style.display = 'flex';
    close.style.display = 'block';
  }
  
  function addEventListeners() {
    const videos = [...document.querySelectorAll('video')];
    const images = [...document.querySelectorAll('img')]; // Query the whole document for imgs, then put them in an array
    images.forEach(image => image.addEventListener('click', onImageClick)); // For each image, create a unique 'click' event
    videos.forEach(video => video.addEventListener('click', onVideoClick));
    close.addEventListener('click', onCloseClick);
  }
  addEventListeners(); // I'm loaded, now add events to HTML elements
}
document.addEventListener("DOMContentLoaded", init); // Once all HTML has loaded, fire an event called init()