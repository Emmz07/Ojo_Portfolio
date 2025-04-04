
# Ojo Emmanuel - Portfolio Website

## 📌 Overview
This is my personal portfolio website showcasing my skills, experience, projects, and contact information. It is built using **HTML, CSS, and JavaScript** to provide a smooth and responsive user experience.

## 🚀 Technologies Used
- **HTML5**: Markup structure for the website.
- **CSS3**: Styling and animations (including custom styles and dark mode support).
- **JavaScript (ES6+)**: Interactive features like theme toggle, smooth scrolling, and animations.
- **Font Awesome**: Icons for social media and UI elements.

## 🛠 Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Dark Mode Toggle**: Users can switch between dark and light themes.
- **Smooth Scroll Navigation**: Links smoothly scroll to the corresponding sections.
- **Animated Content**: Sections animate when they enter the viewport.
- **Downloadable Resume**: A downloadable resume is available in PDF format.
- **Contact Form**: Users can send messages directly through the form.

## 🌙 Dark Mode Toggle
- The dark mode is enabled by default.
- Clicking the sun/moon icon toggles between light and dark mode.
- User preference is saved in `localStorage`.

## 🎯 JavaScript Functionalities
### 1. **Theme Toggle (`main.js`)**
```js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});
```
### 2. **Smooth Scrolling**
```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```
### 3. **Form Submission Handling**
```js
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});
```

## 🎨 Custom Animations (CSS).
```css
.animate-slide-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

## 📩 Contact
📧 Email: [ojoemmanueltiwalade@gmail.com](mailto:ojoemmanueltiwalade@gmail.com)
🌐 GitHub: [Emmz07](https://github.com/Emmz07)
💼 LinkedIn: [Ojo Emmanuel](https://www.linkedin.com/in/ojo-emmanuel-86782a25a/)



Thank you.

