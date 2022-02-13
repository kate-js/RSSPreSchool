const url = 'https://api.themoviedb.org/3/search/movie?api_key=431d21ecf313376ee5cf686960b2e354';

async function getData(query) {
  console.log(query);
  const res = await fetch(`${url}&query=${query}`);
  const data = await res.json();

  const main_items = document.querySelector('.main-items');
  main_items.innerHTML = '';

  data.results.forEach(element => 
    showData(element)
  );
}

document.getElementById('form').addEventListener('submit', functSubmit);

function functSubmit(e) {
  e.preventDefault();
  var value = document.getElementById("search").value;
  getData(value);
  search.value = '';
}

function showData(movie) {
  const main_items = document.querySelector('.main-items');

  const main_item = document.createElement('div');
  main_item.classList.add('item');
  main_items.append(main_item);

  const img = document.createElement('img');
  img.classList.add('movie-img')
  img.src = `https://image.tmdb.org/t/p/w300/` + movie.poster_path;
  img.alt = `movie-image`;
  main_item.append(img);

  const div = document.createElement('div');
  div.classList.add('info');
  div.innerHTML = `<h3>` + movie.title + `</h3>` + `<span>` + movie.vote_average + `</span>`;
  main_item.append(div);
  
  const div_description = document.createElement('div');
  div_description.classList.add('overview');
  div_description.innerHTML = `<h3>` + movie.title + `</h3>` + `<span>` + movie.overview + `</span>`;
  main_item.append(div_description);
}
