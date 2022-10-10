const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

let next = true;

setInterval(function () {
  if (next) {
    count++;
    if (count >= images.length) {
      next = false;
      count--;
    }
  } else {
    count--;
    if (count < 0) {
      next = true;
      count++;
    }
  }

  rollSlider();
}, 4000); // update about every 4 second

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
