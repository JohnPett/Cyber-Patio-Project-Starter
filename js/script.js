function init() {
  const dialog = document.querySelector('dialog');
  const close = document.querySelector('.close');
  const main = document.querySelector('main');
  const follower = document.querySelector('.follower');


    // MOUSE FOLLOW

    // 0.01 : 0.35
    let acceleration = 0.1;

    // Just for initial positioning
    let x = currX = innerWidth / 2;
    let y = currY = innerHeight / 2;


    // Store the mouse position 
    document.addEventListener('mousemove', event => {
      let e = event.touches ? event.touches[0] : event;
      x = e.clientX;
      y = e.clientY;
    });

    const update = (elm, prop, val) => {
      elm.style.setProperty(prop, val);
    };

    const lerp = (_new, _old) => {
      return (_new += (_old - _new) * acceleration);
    };

    const animate = () => {
      currX = lerp(currX, x);
      currY = lerp(currY, y);

      update(follower, '--mouse-x', currX);
      update(follower, '--mouse-y', currY);

      requestAnimationFrame(animate);
    };

    animate();

  // SWIPER

  new Swiper('.swiper-container-vertical', {
    direction: 'vertical',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hide:false,
    },
  });

  new Swiper('.swiper-container-vertical', {
    direction: 'vertical',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hide:false,
    },
  });
  
  new Swiper('.swiper-container-horizontal', {
    direction: 'horizontal',
    mousewheel: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // function onCloseClick() {
  //   dialog.innerHTML = '';
  //   dialog.style.display = 'none';
  //   close.style.display = 'none';
  // }

  // function onImageClick(event) { // On each image clicked give me the corresponding event
  //   const src = event.currentTarget.getAttribute('src'); // Grabbing the source of the image clicked
  //   const img = new Image(); // Create HTML <img> tag with JS

  //   img.onload = function() { // Once my image has loaded...
  //     dialog.innerHTML = `<img src="${img.src}" />`;  // Go find the <dialog> previously defined above
  //     dialog.style.display = 'flex'; // Show the hidden dialog box
  //   }

  //   img.src = src; // Define the src attribute of the <img src="_image_source_" />

  //   close.style.display = 'block';
  // }

  // function onVideoClick(event) {
  //   const src = event.currentTarget.querySelector('source').getAttribute('src');
  //   dialog.innerHTML = `<video autoplay loop muted playsinline><source src="${src}" type="video/mp4"></video>`;
  //   dialog.style.display = 'flex';
  //   close.style.display = 'block';
  // }
      
  //   function addEventListeners() {
  //   const videos = [...document.querySelectorAll('video')];
  //   const images = [...document.querySelectorAll('img')]; // Query the whole document for imgs, then put them in an array
  //   images.forEach(image => image.addEventListener('click', onImageClick)); // For each image, create a unique 'click' event
  //   videos.forEach(video => video.addEventListener('click', onVideoClick));
  //   close.addEventListener('click', onCloseClick);
  // }


  // addEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
