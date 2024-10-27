const menuIcon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const ScrollReveal = require('scrollreveal');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
 
const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.home-content',{delay:200,origin:'top'});
sr.reveal('.home-img',{delay:450,origin:'top'});



