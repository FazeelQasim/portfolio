const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
    overlay.classList.toggle('show-overlay');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
});
