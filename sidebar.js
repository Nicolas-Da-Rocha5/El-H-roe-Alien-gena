const toggleIcon = document.querySelector('.icon-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

toggleIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  if (sidebar.classList.contains('open')) {
    toggleIcon.setAttribute('name', 'close-outline');
  } else {
    toggleIcon.setAttribute('name', 'menu-outline');
    submenu.classList.remove('open');
    submenuToggle.classList.remove('active');
  }
});

submenuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  submenu.classList.toggle('open');
  submenuToggle.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  toggleIcon.setAttribute('name', 'menu-outline');
  submenu.classList.remove('open');
  submenuToggle.classList.remove('active');
});