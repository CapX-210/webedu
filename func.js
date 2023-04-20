const icon = document.querySelector('.icon');
const menu = document.querySelector('.dropdown-menu');

icon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
