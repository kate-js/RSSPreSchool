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

const sun = document.querySelector('.header-sun');

//change themes
function changeTheme() {
    const arrClass = ['body', '.section-title', '.section', '.no-aktiv-button', '.price-description', '.section-inner'];
    
    for (let key of arrClass) {
        const theme = document.querySelectorAll([key]);
        for (let keys of theme) {
            keys.classList.toggle('light-theme');
        }
    }

    const allHover = ['.buttons-portfolio'];

    for (let prop of allHover) {
        const themeHover = document.querySelectorAll([prop]);
        for (let props of themeHover) {
            props.classList.toggle('light-button');
        }
    }

}
sun.addEventListener('click', changeTheme);

 //change seasons in portfolio
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.portfolio-image');
 
function changeImage(event) {
    console.log(event.target);
    if(event.target.classList.contains('buttons-portfolio')) {
        console.log('contains', event.target.dataset.season);
        if (event.target.dataset.season === "winter") {
                portfolioImages.forEach((img, index) => img.src = `./css/assets/img/winter/${index + 1}.jpeg`);
            } else if (event.target.dataset.season === "spring") {
                portfolioImages.forEach((img, index) => img.src = `./css/assets/img/spring/${index + 1}.jpeg`);
            } else if (event.target.dataset.season === "summer") {
                portfolioImages.forEach((img, index) => img.src = `./css/assets/img/summer/${index + 1}.jpeg`);
            } else {
                portfolioImages.forEach((img, index) => img.src = `./css/assets/img/autumn/${index + 1}.jpeg`);
        };                                                         
    };
}; 

portfolioBtns.addEventListener('click', changeImage);

