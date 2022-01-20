const nav_burger = document.querySelector('.nav-burger');
const nav = document.querySelector('.nav');

function toggleMenu() {
    nav_burger.classList.toggle('open');
    nav.classList.toggle('open');
}
nav_burger.addEventListener('click', toggleMenu);

//добавляем класс к nav и выходит меню
//убираем класс у nav когда выбрана ссылка

// const nav = document.querySelector('.nav');

// function toggleMenu() {
    
// }
// nav_burger.addEventListener('click', toggleMenu);