// this code for stick navbar 
const navbar = document.querySelector('.header_wrapper');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

// this code for mobile menu 
const bars = document.querySelector('#bars');
const menu = document.querySelector('.menu');

bars.addEventListener('click', function(){
    bars.classList.toggle('clicked');
    menu.classList.toggle('showMenu')
})
