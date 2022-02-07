//const audioLink = document.querySelectorAll('.bird');
const button = document.querySelector('.button');
const audio = document.querySelector('.main-audio');

function changeButton() {

    if(button.classList.contains('play-button')) {
        audio.play();
        button.classList.remove('play-button');
        button.classList.add('pause-button');
    } else {
        audio.pause();
        button.classList.remove('pause-button');
        button.classList.add('play-button');
    }
}

button.addEventListener('click', changeButton);

function playMusic() {
    if (audio.src === '') {
        audio.src = `./css/assets/sound/forest.mp3`;
        audio.play();
        logo.classList.add('active');
    }
    // var visibilityBlock = document.querySelector('.info-bird-visibility');
    //     visibilityBlock.classList.remove('info-bird-visibility');
}

button.addEventListener('click', playMusic);

const navigation = document.querySelector('.navigation');
let mainImage = document.querySelector('.main');

function changeTheme(e) {
    if (e.target.classList.contains('bird')) {
        audio.pause();
        const bird = e.target.dataset.item;
        mainImage.className = 'main';
        audio.src = `./css/assets/sound/${bird}.mp3`;
        audio.play();
        button.classList.remove('play-button');
        button.classList.add('pause-button');

        if (e.target.dataset.item === 'solovey') {
            mainImage.classList.add('solovey');
        } else if (e.target.dataset.item === 'drozd') {
            mainImage.classList.add('drozd');
        } else if (e.target.dataset.item === 'zarynka') {
            mainImage.classList.add('zarynka');
        } else if (e.target.dataset.item === 'javoronok') {
            mainImage.classList.add('javoronok');
        } else {
            mainImage.classList.add('slavka');
        }
        const birdBlock = document.querySelector(`.info-bird.${bird}`);
        var visibilityBlock = document.querySelector('.info-bird-visibility');
        var infoContainer = document.querySelector('.info-container');

        infoContainer.classList.add('info-container-active');
        birdBlock.classList.add('info-bird-visibility');
        if (visibilityBlock) {
            visibilityBlock.classList.remove('info-bird-visibility');
        }
    }
}

navigation.addEventListener('click', changeTheme);

const birds = document.querySelectorAll('.bird');

function changeActive(e) {
    var activeButton = document.querySelector('.active');
    activeButton.classList.remove('active');
    e.target.classList.add('active');
}

birds.forEach((el)=> el.addEventListener('click', changeActive));

const logo = document.querySelector('.header-logo');

function baseTheme () {
    audio.pause();
    audio.src = `./css/assets/sound/forest.mp3`;
    audio.play();
    button.classList.remove('play-button');
    button.classList.add('pause-button');
    mainImage.className = 'main';
    var visibilityBlock = document.querySelector('.info-bird-visibility');
    if (visibilityBlock) {
        visibilityBlock.classList.remove('info-bird-visibility');
    }
    
    var infoContainer = document.querySelector('.info-container');
    infoContainer.classList.remove('info-container-active');
}

logo.addEventListener('click', baseTheme);
