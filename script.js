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
