/*==================================================
                ECOGIS STUDIO
                  script.js

TABLE OF CONTENTS

1. Reveal Animations
2. Carousel Controls
3. Photography Lightbox

==================================================*/


/*==================================================
              REVEAL ANIMATIONS
==================================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


/*==================================================
              CAROUSEL CONTROLS
==================================================*/

function scrollCarousel(id, direction) {

    const carousel = document.getElementById(id);

    if (!carousel) return;

    carousel.scrollBy({
        left: direction * 320,
        behavior: "smooth"
    });

}


/*==================================================
             PHOTOGRAPHY LIGHTBOX
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");

    // If the page doesn't have a lightbox, stop here.
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    // Only enable the lightbox for photography images.
    const images = document.querySelectorAll(
        ".photo-grid img, .carousel-item img, .paired-images img"
    );

    images.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });

    function closeLightbox() {
        lightbox.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {
            closeLightbox();
        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {
            closeLightbox();
        }

    });

});
