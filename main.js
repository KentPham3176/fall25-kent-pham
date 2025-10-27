// main.js — small shared interactions for Cozy Chore
document.addEventListener('DOMContentLoaded', function () {
  // Highlight current nav link
  try {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href.split('/').pop() === path) a.classList.add('active');
    });
  } catch (e) { /* ignore if nav missing */ }

  // Menu button: simple toggle for potential mobile nav
  const menuBtn = document.querySelector('.menu-box button');
  const mainNav = document.querySelector('.main-nav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Example: expand/collapse panels (progressive enhancement)
  document.querySelectorAll('.panel .panel-inner').forEach(inner => {
    const parent = inner.closest('.panel');
    if (!parent) return;
    parent.addEventListener('click', (e) => {
      // Toggle a class to show expanded state (CSS can animate)
      parent.classList.toggle('expanded');
    });
  });
});
