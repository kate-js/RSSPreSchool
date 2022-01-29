//translate
let theme;
let lang;

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'second-title-1': 'Skills',
      'second-title-2': 'Portfolio',
      'second-title-3': 'Video',
      'second-title-4': 'Price',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'third-title-1': 'Standart',
      'third-title-2': 'Premium',
      'third-title-3': 'Gold',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'second-title-1': 'Навыки',
      'second-title-2': 'Портфолио',
      'second-title-3': 'Видео',
      'second-title-4': 'Цена',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'third-title-1': 'Стандарт',
      'third-title-2': 'Премиум',
      'third-title-3': 'Голд',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

const languageTranslate = document.querySelectorAll('[data-lang]');

function getTranslate(language) {
    const dataLang = document.querySelectorAll('[data-i18]');
    dataLang.forEach((el) => el.textContent = i18Obj[language][el.dataset.i18]);
    lang = language;
    localStorage.setItem('lang', language);
}
languageTranslate.forEach((ol) => ol.addEventListener('click', () => getTranslate(ol.dataset.lang)));

const langTranslate = document.querySelectorAll('.language');

function changeActive (event) {
    const activeLang = document.querySelector('.language_active');
    activeLang.classList.remove('language_active');

    const russian = document.querySelector('.russian');

    if (localStorage.getItem('lang') === 'ru') {
        russian.classList.add('language_active');
    } else {
        event.target.classList.add('language_active');
    }
}

langTranslate .forEach((el) => el.addEventListener('click', changeActive));

//burger
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
    if (event.target.classList.contains('buttons-portfolio')) {
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
    if (event.target.classList.contains('buttons-portfolio')) {
        const active = document.querySelector('.active-button');
        active.classList.remove('active-button');
        event.target.classList.add('active-button');
    }
}

portfolioBut.forEach((el) => el.addEventListener('click', changeClassActive));

//local storage

function init() {
    lang = localStorage.getItem('lang') || 'en';
    theme = localStorage.getItem('theme') || 'dark';

    getTranslate(lang);
}

window.addEventListener('load', init);
