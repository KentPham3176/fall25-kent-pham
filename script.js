// script.js — small shared interactions for Cozy Chore
// (renamed from main.js)

// Chore data array
const chores = [
  {
    title: "Wash Dishes",
    description: "Clean all dishes after dinner.",
    category: "Kitchen",
    exp: 10,
    status: "unfinished"
  },
  {
    title: "Vacuum Living Room",
    description: "Vacuum the carpet and tidy up cushions.",
    category: "Cleaning",
    exp: 15,
    status: "finished"
  },
  {
    title: "Feed the Cat",
    description: "Give food and water to the cat.",
    category: "Pet Care",
    exp: 5,
    status: "unfinished"
  },
  {
    title: "Take Out Trash",
    description: "Empty all bins and take trash outside.",
    category: "Cleaning",
    exp: 8,
    status: "unfinished"
  },
  {
    title: "Water Plants",
    description: "Water all indoor plants.",
    category: "Gardening",
    exp: 7,
    status: "finished"
  }
];

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

  // Dynamically render chores in #chore-list
  const choreList = document.getElementById('chore-list');
  if (choreList) {
      choreList.innerHTML = chores.map(chore => `
        <div class="chore-card">
          <h3>${chore.title}</h3>
          <p>${chore.description}</p>
          <p><strong>Category:</strong> ${chore.category}</p>
          <p><strong>EXP:</strong> ${chore.exp}</p>
          <p><strong>Status:</strong> <span class="status ${chore.status}">${chore.status.charAt(0).toUpperCase()+chore.status.slice(1)}</span></p>
        </div>
      `).join('');
  }
});
