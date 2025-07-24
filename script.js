// Dark/Light mode toggle

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('voidscan-mode') === 'light') {
  body.classList.add('light');
  modeToggle.textContent = '☀️';
}

modeToggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    modeToggle.textContent = '🌙';
    localStorage.setItem('voidscan-mode', 'dark');
  } else {
    body.classList.add('light');
    modeToggle.textContent = '☀️';
    localStorage.setItem('voidscan-mode', 'light');
  }
});