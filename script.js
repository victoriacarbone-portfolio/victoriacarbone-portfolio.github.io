const reveals = document.querySelectorAll('.reveal');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealSections);

revealSections();


function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);

  carousel.scrollBy({
    left: direction * 320,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  // Select ALL images inside your photography grids/carousels
  const images = document.querySelectorAll(".photo-grid img, .carousel img, .gallery-item img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
    });
  });

  // Close when clicking X
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Close when clicking outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });

});

// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".carousel img").forEach(img => {

  img.addEventListener("click", () => {

    lightbox.classList.add("active");

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;

  });

});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }

});
