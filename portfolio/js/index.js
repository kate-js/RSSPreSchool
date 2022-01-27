const nav_burger = document.querySelector('.nav-burger');
const nav = document.querySelector('.nav');

function toggleMenu() {
    nav_burger.classList.toggle('open');
    nav.classList.toggle('open');
}
nav_burger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-link');

function closeMenu(event) {
    console.log(event.target.classList);
    if (event.target.classList.contains('nav-link')) {
        nav_burger.classList.remove('open');
        nav.classList.remove('open');
    }
  }

  navLinks.forEach((el) => el.addEventListener('click', closeMenu));

 