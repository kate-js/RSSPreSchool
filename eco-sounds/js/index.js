//audio
const audioLink = document.querySelectorAll('.bird');
const button = document.querySelector('.button');

function player(event){
    let sound = document.getElementById(event.target.dataset.item);
    sound.currentTime = 0;

    if (event.target.classList.contains('aktive')) {
        event.target.classList.remove('aktive');
        button.classList.remove('pause-button');
        button.classList.add('play-button');
        sound.pause();
    } else {
        event.target.classList.add('aktive');
        sound.play();
        button.classList.remove('play-button');
        button.classList.add('pause-button');
    }
    
}

audioLink.forEach((el) => el.addEventListener('click', player));