const url = 'https://api.themoviedb.org/3/search/movie?api_key=431d21ecf313376ee5cf686960b2e354';
const mainItems = document.querySelector('.main-items');
const resultValue = document.querySelector('.result-value');

async function getData(query) {
  console.log(query);
  const res = await fetch(`${url}&query=${query}`);
  const data = await res.json();

  mainItems.innerHTML = '';

  data.results.forEach(element => 
    showData(element)
  );
  
  resultValue.innerHTML = query;
}

document.getElementById('form').addEventListener('submit', functSubmit);

function functSubmit(event) {
  event.preventDefault();
  var value = document.getElementById("search").value;
  getData(value);
}

function showData(movie) {

  const main_item = document.createElement('div');
  main_item.classList.add('item');

  mainItems.append(main_item);

  const img = document.createElement('img');
  img.classList.add('movie-img');
  if (movie.poster_path === null ||
    movie.vote_average === null ||
    movie.vote_average < 1) {
      main_item.classList.add('none');
  } else {
    img.src = `https://image.tmdb.org/t/p/w300/` + movie.poster_path;
  }
  
  img.alt = `movie-image`;
  main_item.append(img);

  const div = document.createElement('div');
  div.classList.add('info');
  div.innerHTML = `<h3>` + movie.title + `</h3>` + `<span class="">` + movie.vote_average + `</span>`;
    if (movie.vote_average <5) {
      div.classList.add('red');
    } else if (movie.vote_average >= 7) {
      div.classList.add('green');
    } else if (movie.vote_average > 5 && movie.vote_average < 7) {
      div.classList.add('orange');
    } 
  main_item.append(div);
  
  const div_description = document.createElement('div');
  div_description.classList.add('overview');
  div_description.innerHTML = `<h3>` + movie.title + `</h3>` + `<span>` + movie.overview + `</span>`;
  main_item.append(div_description);

}

getData('iron');

const theme = document.querySelector('.theme');

  function changeLightTheme() {
    const body = document.querySelector('.body');
    const image = document.querySelector('.dark');
    const input = document.querySelector('.text');

    body.classList.toggle('light-theme');
    input.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
      image.src = 'css/assets/moon.svg';
    } else {
      image.src = 'css/assets/sun.svg';
    }
  }
theme.addEventListener('click', changeLightTheme);

const mainLogo = document.querySelector('.logo');
  function mainPage(){
    getData('iron');
    search.value = '';
  };
mainLogo.addEventListener('click', mainPage)

console.log(`
Добрый день, проверяющий!
Из дополнительных функций реализованно следующее:
- при клике на лого открывается базовая страница и сбрасывается запрос;
- добавлена функция смены темы для просмотра;
- рейтинг выделен цветом;
- при наведениии появляется описание;
Спасибо.
`);