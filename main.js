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


// For Modal (Other Skills Section)
// Get the modal
var modal = document.getElementById("myModal");

// Get all images with the class "myImages"
var images = document.getElementsByClassName("myImages");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all images to add the onclick event
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
