// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
// Set current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
