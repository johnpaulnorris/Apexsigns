
// === Sticky Header Background Fade ===
document.addEventListener("scroll", () => {
    const header = document.querySelector(".sticky-header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    }
});

// === Call Button Visibility on Mobile ===
document.addEventListener("DOMContentLoaded", () => {
    const callButton = document.querySelector('.call-now');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            callButton.style.display = 'inline-block';
        } else {
            callButton.style.display = 'none';
        }
    });
});

// === Lightbox Function ===
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = 1000;
    lightbox.style.opacity = 0;
    lightbox.style.transition = 'opacity 0.3s ease';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
    lightbox.appendChild(img);

    document.body.appendChild(lightbox);
    requestAnimationFrame(() => {
        lightbox.style.opacity = 1;
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    });
}
