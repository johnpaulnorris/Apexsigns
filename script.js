
// Full site JS (v5.1)
document.addEventListener('DOMContentLoaded', function() {
  console.log('v5.1 real JS loaded');
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    header.style.background = window.scrollY > 50 ? '#000' : '#1a1a1a';
  });
});
