const audioLink = document.querySelectorAll('.bird');
const button = document.querySelector('.button');

const audio = document.querySelector('.main-audio');
let isPlay = false;

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
        } else  {
            mainImage.classList.add('slavka');
        }
    }
}

navigation.addEventListener('click', changeTheme);
