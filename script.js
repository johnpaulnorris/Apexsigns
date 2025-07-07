
// Full site JS (v4.2)
document.addEventListener('DOMContentLoaded',()=>{
  console.log('v4.2 real JS loaded');
  window.addEventListener('scroll',()=>{
    const header=document.querySelector('header');
    header.style.background=window.scrollY>50?'#111':'#000';
  });
});
