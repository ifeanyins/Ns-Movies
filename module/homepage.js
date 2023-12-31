import { LikeApi, submitLike } from './likeApi.js';
const url = 'https://api.tvmaze.com/shows';
const movieApi = async () => {
  const fetchResult = await fetch(url);
  const ShowResult = await fetchResult.json();
  return ShowResult.slice(0, 15);
};

window.onload = movieApi();

const movieList = async () => {
  const allMovies = await movieApi();
  const likesApi = await LikeApi();
  allMovies.forEach((movie) => {
    const cardLikes = likesApi.find((like) => like.item_id === movie.id);
    const { id } = movie;
    let liveCount = +cardLikes?.likes;

    const moviesContainer = document.querySelector('#movie-display');
    const movieUL = document.createElement('ul');
    const movieLI = document.createElement('li');
    movieLI.className = 'movie-cards';
    movieLI.innerHTML = `<div>
      <img src=${movie.image.original} alt=${movie.name}>
      </div>
      <a href="${movie.officialSite}" class="movie-title">${movie.name}</a>
      <div class="movie-info">
        <p<i class="fa-solid fa-star" id='rating'></i>${movie.rating.average}</p>
        </div>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <p class = "totalLikes">${liveCount} likes</p>
        <button id = ${id} class = "commentBtn">Comments</button>`;

    movieUL.appendChild(movieLI);
    moviesContainer.appendChild(movieUL);

    const likeButton = movieLI.getElementsByClassName('fa-heart')[0];
    likeButton.addEventListener(
      'click', (btn) => {
        const liveCountElement = movieLI.getElementsByClassName('totalLikes')[0];
        liveCount += 1;
        liveCountElement.innerHTML = `${liveCount} likes`;
        submitLike(id);
        btn.disabled = true;
        likeButton.style.color = 'red';
      },
      { once: true },
    );
  });
};

export { movieApi, movieList };