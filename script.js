
// Full site JS (v4.3)
document.addEventListener('DOMContentLoaded',()=>{
  console.log('v4.3 real JS loaded');
  window.addEventListener('scroll',()=>{
    const header=document.querySelector('header');
    header.style.background=window.scrollY>50?'#111':'#000';
  });
});
