// script.js Final Build v4.1
// Sticky header background fade
document.addEventListener("scroll", () => {
    const header = document.querySelector(".sticky-header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    }
});
// Lightbox for gallery images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:1000;';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style = 'max-width:90%;max-height:90%;border-radius:10px;';
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', () => document.body.removeChild(lightbox));
}