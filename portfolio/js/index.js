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



//change themes
const sun = document.querySelector('.header-sun');

function changeTheme() {
    const arrClass = ['body', '.section-title', '.section', '.buttons-portfolio', '.price-description', '.section-inner'];
    
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
    if(event.target.classList.contains('buttons-portfolio')) {
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

//active button in portfolio

const portfolioBut = document.querySelectorAll('.buttons-portfolio');

    function changeClassActive(event) {

        if(event.target.classList.contains('buttons-portfolio')){
            const active = document.querySelector('.active-button');
            active.classList.remove('active-button');
            event.target.classList.add('active-button');
        }
    }

    portfolioBut.forEach((el) => el.addEventListener('click', changeClassActive));
