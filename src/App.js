const menuIcon= document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const ScrollReveal = require('scrollreveal');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
 
 
