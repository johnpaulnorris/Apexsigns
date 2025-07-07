// === Sticky Header ===
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = '#111';
    } else {
      header.style.background = '#000';
    }
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
  const sliderImages = document.querySelectorAll('.vehicle-slider-container img');
  let current = 0;

  function showNextImage() {
    sliderImages[current].classList.remove('active');
    current = (current + 1) % sliderImages.length;
    sliderImages[current].classList.add('active');
  }

  sliderImages[0].classList.add('active'); // Start with first image
  setInterval(showNextImage, 3000); // Change image every 3 seconds
}
