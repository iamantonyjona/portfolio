document.addEventListener("DOMContentLoaded", function () {
  const homeImg = document.querySelector('.homeimg');
  if (homeImg) {
    homeImg.classList.add('animate');
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for header size
          behavior: 'smooth'
        });
      }
    });
  });
});

// Scroll-triggered animation for home image
document.addEventListener("scroll", function () {
  const homeImg = document.querySelector('.homeimg');
  if (homeImg) {
    const rect = homeImg.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      homeImg.classList.add('animate');
    }
  }
});

// Typewriter effect
const typedText = ["Full Stack Developer", "Web Designer", "Web Developer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 150;

function type() {
  const multipleTextElement = document.querySelector(".multiple-text");
  if (multipleTextElement) {
    if (charIndex < typedText[textIndex].length) {
      multipleTextElement.innerHTML += typedText[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        multipleTextElement.innerHTML = "";
        textIndex = (textIndex + 1) % typedText.length;
        charIndex = 0;
        setTimeout(type, typingSpeed); // Restart typing after a delay
      }, 1000); // Delay before starting next word
    }
  }
}

window.onload = type;

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '50px',
  duration: 1500,
  easing: 'ease-in-out',
  reset: true // Reset animations when elements scroll back into view
});

// Apply ScrollReveal to elements
sr.reveal('.hello', { origin: 'top', interval: 200 });
sr.reveal('.name', { origin: 'left', delay: 200 });
sr.reveal('.content', { origin: 'right', delay: 400 });
sr.reveal('.social-media', { origin: 'bottom', delay: 600 });
sr.reveal('.downloadcv', { origin: 'bottom', delay: 800 });
sr.reveal('.homeimg img', { origin: 'bottom', delay: 1000 });

// About Section Animations
sr.reveal('.aboutimg img', { origin: 'left', delay: 300 }); 
sr.reveal('.about-title', { origin: 'top', delay: 200 });
sr.reveal('.about-title2', { origin: 'top', delay: 400 });
sr.reveal('.about-p', { origin: 'right', delay: 600 });
sr.reveal('.readme', { origin: 'bottom', delay: 800 });

// Skills Section Animations
sr.reveal('.skills-header', { origin: 'top', delay: 200 });
sr.reveal('.box', { origin: 'bottom', interval: 200 });
sr.reveal('.box-header', { origin: 'left', interval: 150 });
sr.reveal('.box p', { origin: 'right', interval: 100 });

// JavaScript for sticky navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// JavaScript for navbar toggle and close
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Close the navbar when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Simulate a click to close the toggle menu
      }
    });
  });

  // Scroll sections active link
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active");
      }
    });
  });
});


