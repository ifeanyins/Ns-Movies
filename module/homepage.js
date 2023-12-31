// import { LikeApi, NewLike } from './likes.js';
/**
 * the like Api file is similar to the leaderboard api project so the first fucnction is to get the api containing whatever content you want displayed then the second function is to customize the api 
 */

const url = "https://api.tvmaze.com/shows";

const getMoviesApi = async () => {
    const movies = await fetch(url);
    const getMovies = await movies.json();
    const slicedMovies = getMovies.slice(0, 15)
    return slicedMovies;
}
// created a function for span icons
const createSpanIcon = (name) => {
    const icon = document.createElement('span');
    icon.classList.add("material-symbols-outlined");
    icon.textContent = name;
    return icon;
}
const displayMovies = async () => {
    const moviesImgDisplay = document.getElementById('movie-display');
    moviesImgDisplay.classList.add('movie-imgDiplay');
    const movieApi = await getMoviesApi();
    const likesApi = await likeApi(); //revisit
    console.log(movieApi);

    movieApi.forEach(card => {
        const  cardLikes = likesApi.find(like => like. item_id === card.id ) // also look at the item notation
        const {id} = card; // destructuring
        let liveCount = +cardLikes?.likes; // to return the existing likes

        const bodyDiv = document.createElement('div');
        bodyDiv.classList.add('bodyDiv');
        const cardUl = document.createElement('ul');
        cardUl.classList.add('iDiv');
        const cardLi = document.createElement('li');
        const cardTLi = document.createElement('li');
        const imgDiv = document.createElement('img');
        const nameDiv = document.createElement('p');
        const likeIcon = createSpanIcon("favorite");
        const likeLiveCount = document.createElement('span');
        likeLiveCount.classList.add('totalLikes'); //
        likeLiveCount.innerHTML =` ${liveCount} likes`;
        const commentBtn = document.createElement('button');
        commentBtn.innerText = 'Comments';
        commentBtn.classList.add('comment-btn');
        commentBtn.setAttribute('id', {id}); // add id into comment button not sure this works
       
        const WLLCT = document.createElement('p');
        WLLCT.innerHTML = `${card.weight}mb likes`
        
        const likeButton = cardLi.getElementsByClassName("material-symbols-outlined")[0]; //
        likeButton.addEventListener('click', async (btn) => {
            const liveCountElement = cardLi.getElementsByClassName('totalLikes')[0];
            liveCount += 1;
            liveCountElement.innerHTML = `${liveCount} likes`;
            NewLike(id);
            btn.disabled = true;
            likeButton.style.color = 'red';
        },
            {once: true},
        ),

        imgDiv.setAttribute('src', card.image.medium);
        imgDiv.classList.add('imgDiv')
        nameDiv.innerHTML = card.name
        cardLi.appendChild(imgDiv);
        cardLi.appendChild(nameDiv);
        cardTLi.appendChild(WLLCT);
        cardTLi.appendChild(likeIcon);
        cardTLi.appendChild(likeLiveCount);
        cardLi.appendChild(cardTLi);
        cardUl.appendChild(cardLi);
        bodyDiv.appendChild(cardUl);
        bodyDiv.appendChild(commentBtn);
        moviesImgDisplay.appendChild(bodyDiv);
    });

    // put in another module later
    const movieLength = document.getElementById('movielength');
    const getLength = movieApi.length;
    const lengthPgh = document.createElement('p');
    lengthPgh.innerHTML = `Best Tv Series of all Time (${getLength})`;
    movieLength.appendChild(lengthPgh)
    console.log(getLength)
}

export {displayMovies, getMoviesApi}