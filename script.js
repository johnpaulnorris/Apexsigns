
// Full site JS (v4.2)
document.addEventListener('DOMContentLoaded',()=>{
  console.log('v4.2 real JS loaded');
  window.addEventListener('scroll',()=>{
    const header=document.querySelector('header');
    header.style.background=window.scrollY>50?'#111':'#000';
  });
});

// Lightbox Logic (gallery.html only)
if (document.querySelector('.gallery')) {
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.className = 'lightbox-overlay';
  lightboxOverlay.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="">';

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
