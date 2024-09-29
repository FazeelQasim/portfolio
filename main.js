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
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}




// For Typing Effect
const texts = ["WordPress Developer", "Front-End Developer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

(function type() {
    const prefix = 'Fazeel Qasim | '; // Fixed text
    document.getElementById('text').textContent = prefix + letter;
    
    if (!isDeleting && index < texts[count].length) {
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        setTimeout(type, 150); // Speed of typing
    } else if (isDeleting && index > 0) {
        letter = currentText.slice(0, --index);
        setTimeout(type, 100); // Speed of deleting
    } else if (!isDeleting && index === texts[count].length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 2000); // Pause before deleting
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length; // Move to next text
        setTimeout(type, 500); // Wait before typing next text
    }
})();




// For Light Box of Other Skills Section
const articles = [
  {
      title: 'Article Title 1',
      content: `<h2>A Comprehensive Guide To Exploring the Thrills of Online Slot Gaming
</h2><p>This is the content of Article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>`
  },
  {
      title: 'Article Title 2',
      content: `<h2>Uncovering the Best SEO Tools for Beginners in the Digital World</h2><p>This is the content of Article 2. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>`
  },
  {
      title: 'Article Title 3',
      content: `<h2>Top 10 best home decor stores in Little Rock, Arkansas</h2><p>This is the content of Article 3. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>`
  },
  {
    title: 'Article Title 4',
    content: `<h2>The Key Summer 2024 Trends, Influences, And Directions To Know</h2><p> lorem lasjkdf laskdj f sdlfks df sd f</p>`
  }
];

function openLightbox(index) {
  document.getElementById('lightbox-article').innerHTML = articles[index].content;
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

