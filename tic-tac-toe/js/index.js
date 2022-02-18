const area = document.getElementById('area');
let resultName = '';
let move = 0;
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-closer');
const boxes = document.getElementsByClassName('box');

const LIMIT = 10;
let RESULTS = [];

const winPlayer = () => {
    RESULTS = [...RESULTS, {Player: true, Tie: false, Computer: false}];
}

const winTie = () => {
    RESULTS = [...RESULTS, {Player: false, Tie: true, Computer: false}];
}

const winComputer = () => {
    RESULTS = [...RESULTS, {Player: false, Tie: false, Computer: true}];
}

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        playStepMusic();
        move++;
        check();
        if (move == 9){
            resultName = 'Ничья';
            winTie();
            prepareResult(resultName);
        }
    }
});

const check = () => {
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
            resultName = 'крестики';
            winPlayer();
            prepareResult(resultName);
        } else if (
            boxes[arr[i][0]].innerHTML == '0' &&
            boxes[arr[i][1]].innerHTML == '0' &&
            boxes[arr[i][2]].innerHTML == '0'
        ) {
            resultName = 'нолики';
            winComputer();
            prepareResult(resultName);
        } 
    }
}

const prepareResult = winner => {
    if (resultName == 'Ничья'){
        contentWrapper.innerHTML = `${winner}!`;
    } else {
    contentWrapper.innerHTML = `Победили ${winner}! Вы выиграли за ${move} ходов`;
    playWinMusic();
    }
    modalResult.style.display = 'block';
}

const cleanBox = () => {
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = '';
    }
}

const closeModal = () => {
    modalResult.style.display = 'none';
    cleanBox();
    move = 0;

    if (RESULTS.length > LIMIT) {
        RESULTS.shift();
    }
    addResult(RESULTS);
    localStorage.setItem('tableResult', JSON.stringify(RESULTS));
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
            
const addResult = (items) => {
    document.querySelector('.results-table').innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td class="numberResult">№ ${i + 1}</td>
            <td>${items[i].Player ? '1' : '0'}</td>
            <td>${items[i].Tie ? '1' : '0'}</td>
            <td>${items[i].Computer ? '1' : '0'}</td>
        `;
        document.querySelector('.results-table').appendChild(row);
    }
}

function cleanFunction() {
    document.querySelector('.results-table').innerHTML = '';
    RESULTS = [];
    localStorage.setItem('tableResult', JSON.stringify(RESULTS));
}

const cleanButton = document.addEventListener('click', cleanFunction);

function init() {
    RESULTS = JSON.parse(localStorage.getItem('tableResult')) || [];
    addResult(RESULTS);
}

window.addEventListener('load', init);