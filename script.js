// === Sticky Header ===
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 50 ? '#111' : '#000';
  });
});

// === Lightbox Functionality (gallery.html only) ===
if (document.querySelector('.gallery')) {
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.className = 'lightbox-overlay';
  lightboxOverlay.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Lightbox Image">
  `;
  document.body.appendChild(lightboxOverlay);

  const lightboxImg = lightboxOverlay.querySelector('img');
  const closeBtn = lightboxOverlay.querySelector('.lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxOverlay.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightboxOverlay.classList.remove('active');
  });
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('active');
    }
  });
}

// === Vehicle Graphics Slider ===
if (document.querySelector('.vehicle-slider-container')) {
  const sliderContainer = document.querySelector('.vehicle-slider-container');

  // Load all vehicle images dynamically
  const totalImages = 212;
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

  sliderImages[0].classList.add('active'); // Start with first image
  setInterval(showNextImage, 3000); // Change image every 3 seconds
}
