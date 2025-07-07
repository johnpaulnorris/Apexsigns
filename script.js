// === Sticky Header ===
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 50 ? '#111' : '#000';
  });
});

// === Vehicle Graphics Slider ===
if (document.querySelector('.vehicle-slider-container')) {
  const sliderContainer = document.querySelector('.vehicle-slider-container');
  const totalImages = 212; // Adjust if more images added
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `images/v ${i}.jpg`;
    img.alt = `Vehicle Graphic ${i}`;
    sliderContainer.appendChild(img);
  }

  const sliderImages = sliderContainer.querySelectorAll('img');
  let current = 0;

  function showNextImage() {
    sliderImages[current].classList.remove('active');
    current = (current + 1) % sliderImages.length;
    sliderImages[current].classList.add('active');
  }

  sliderImages[0].classList.add('active');
  setInterval(showNextImage, 3000); // Change image every 3 seconds
}
