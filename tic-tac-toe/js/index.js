const area = document.getElementById('area');

let move = 0;

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
        move++;
    }
});
