// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
toggle.addEventListener('click', () => {
const expanded = toggle.getAttribute('aria-expanded') === 'true';
toggle.setAttribute('aria-expanded', String(!expanded));
menu.classList.toggle('show');
});
}


// Simple header blur on scroll
const header = document.querySelector('[data-blur]');
let lastY = 0;
window.addEventListener('scroll', () => {
const y = window.scrollY;
header.style.background = y > 10 ? 'rgba(10,11,15,.6)' : 'rgba(10,11,15,.4)';
lastY = y;
});