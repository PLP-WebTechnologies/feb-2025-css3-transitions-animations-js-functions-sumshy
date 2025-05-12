// Elements
const toggleThemeBtn = document.getElementById('toggleTheme');
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('boxToAnimate');

// Check localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle light/dark theme
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Save theme to localStorage
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

// Trigger animation on box
animateBtn.addEventListener('click', () => {
  box.classList.remove('animate'); // reset if it's already there
  void box.offsetWidth; // trigger reflow
  box.classList.add('animate');
});
