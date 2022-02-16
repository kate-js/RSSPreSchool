const area = document.getElementById('area');
let result = '';
let move = 0;
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-closer');

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        playStepMusic();
        move++;
        check();
        if (move == 9){
            result = 'Ничья';
            prepareResult(result);
        }
    }
});

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < arr.length; i++) {
        if(
            boxes[arr[i][0]].innerHTML == 'X' &&
            boxes[arr[i][1]].innerHTML == 'X' &&
            boxes[arr[i][2]].innerHTML == 'X' 
        ) {
            result = 'крестики';
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == '0' &&
            boxes[arr[i][1]].innerHTML == '0' &&
            boxes[arr[i][2]].innerHTML == '0'
        ) {
            result = 'нолики';
            prepareResult(result);
        } 
    }
}

const prepareResult = winner => {
    if (result == 'Ничья'){
        contentWrapper.innerHTML = `${winner}!`;
    } else {
    contentWrapper.innerHTML = `Победили ${winner}! Вы выиграли за ${move} ходов`;
    }
    playWinMusic();
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

const audio = document.querySelector('.main-audio');
const audioWin = document.querySelector('.audio');

const playStepMusic = () => {
    audio.src = `./css/assets/sound/step.wav`;
    audio.play();
    audio.currentTime = 0;
}

const playWinMusic = () => {
    audioWin.src = `./css/assets/sound/sound.wav`;
    audioWin.play();
    audioWin.currentTime = 0;
}