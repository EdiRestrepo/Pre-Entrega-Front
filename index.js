console.log('Hola Mundo');
const userList = document.querySelector(".user-list");

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2e9f8fc9479fa19131d9c8fc8ea7c110';
const baseImageUrl = 'https://image.tmdb.org/t/p/';

const categories = {
  trending: '/trending/all/week',
  querySearch: '/search/movie',
  genre: '/genre/movie/list',
  basic: '&language=en-US',
};


const fetchMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}${categories.trending}?api_key=${API_KEY}${categories.basic}&page=${1}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return console.log("ERROR" + error);
    }
}

function renderUserListItems(movies) {
    const markup = movies
      .map(
        (movie) => `<li class="item">
        <div class="card" style="width: 18rem;">
        <img class='cardsMovie__image' class="card-img-top" src='${baseImageUrl}w200${movie.poster_path}' alt='image movie' />
        <div class="card-body">
        <h5 class="card-title"><b>Title</b>: ${movie.title || movie.original_name }</h5>
        <p class="card-text"><b>Language</b>: ${movie.original_language}</p>
        <p class="card-text"><b>First air date</b>: ${movie.first_air_date || 'No register'}</p>
        </div>
        </div>
        </li>`
      )
      .join("");
    userList.innerHTML = markup;
  }


fetchMovies().then(movies =>{
    renderUserListItems(movies.results);
    console.log(movies.results)
} )

 