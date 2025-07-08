// === Sticky Header ===
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 50 ? '#111' : '#000';
  });
});

// === Vehicle Graphics Slider with Logging ===
if (document.querySelector('.vehicle-slider-container')) {
  const sliderContainer = document.querySelector('.vehicle-slider-container');
  const totalImages = 212;
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `images/v ${i}.jpg`;
    img.alt = `Vehicle Graphic ${i}`;
    img.onerror = function () {
      console.error(`❌ Image not found: ${img.src}`);
    };
    img.onload = function () {
      console.log(`✅ Loaded: ${img.src}`);
    };
    sliderContainer.appendChild(img);
  }
  const sliderImages = sliderContainer.querySelectorAll('img');
  let current = 0;
  function showNextImage() {
    if (sliderImages.length > 0) {
      sliderImages[current].classList.remove('active');
      current = (current + 1) % sliderImages.length;
      sliderImages[current].classList.add('active');
    }
  }
  if (sliderImages.length > 0) {
    sliderImages[0].classList.add('active');
    setInterval(showNextImage, 3000);
  } else {
    console.warn('⚠ No vehicle images loaded for slider.');
  }
}
