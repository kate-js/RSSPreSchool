const url = 'https://api.themoviedb.org/3/search/movie?api_key=431d21ecf313376ee5cf686960b2e354&query=spring';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
}

getData();

function showData(movie) {
  const img = document.createElement('img');
  const main_item = document.querySelector('.item')
  img.classList.add('movie-img')
  img.src = `https://image.tmdb.org/t/p/w300/` + movie.results[1].poster_path;
  img.alt = `movie-image`;
  main_item.append(img);

  const div = document.createElement('div');
  div.classList.add('info');
  div.innerHTML = `<h3>` + movie.results[1].title + `</h3>` + `<span>` + movie.results[1].vote_average + `</span>`;
  main_item.append(div);
  
  const div_description = document.createElement('div');
  div_description.classList.add('description');
  div_description.classList.add('overview');
  div_description.innerHTML = `<h3>` + movie.results[1].title + `</h3>` + `<span>` + movie.results[1].overview + `</span>`;
  main_item.append(div_description);

}
