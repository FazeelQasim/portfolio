// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav');
// const overlay = document.querySelector('.overlay');

// hamburger.addEventListener('click', () => {
//     nav.classList.toggle('show-menu');
//     overlay.classList.toggle('show-overlay');
// });

// overlay.addEventListener('click', () => {
//     nav.classList.remove('show-menu');
//     overlay.classList.remove('show-overlay');
// });


const header = document.querySelector('.styled-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });