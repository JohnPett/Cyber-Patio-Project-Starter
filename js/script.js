function init() {
  function onNumberHover(event) {
    const src = event.currentTarget.getAttribute('data-src');
    const background = document.querySelector('.background');
    const img = new Image();
    img.onload = function() {
      background.innerHTML = `<img src="${img.src}" />`;
    }
    img.src = src;
  };

  const numbers = [...document.querySelectorAll('.content__number')];
  numbers.forEach(number => {
    number.addEventListener('mouseover', onNumberHover);
  });
}

document.addEventListener("DOMContentLoaded", init);
