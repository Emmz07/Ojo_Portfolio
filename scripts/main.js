// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference, default to dark mode if none saved
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateThemeIcon();
  // Save theme preference
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});

function updateThemeIcon() {
  const icon = themeToggle.classList;
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Function to handle fade-in animations on scroll
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.animate-fade-in');

  elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (rect.top <= windowHeight - 100) {
          element.classList.add('visible');
      }
  });
}

// Run the function on scroll and on page load
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Function to handle animations on scroll
function animateSectionsOnScroll() {
  const sections = document.querySelectorAll('.section-animate');

  sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (rect.top <= windowHeight - 100) {
          section.classList.add('visible');
      }
  });
}

// Run the function on scroll and on page load
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('load', animateSectionsOnScroll);