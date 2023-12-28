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
    console.log(movieApi);

    movieApi.forEach(item => {
        const bodyDiv = document.createElement('div');
        bodyDiv.classList.add('bodyDiv');
        const cardUl = document.createElement('ul');
        cardUl.classList.add('iDiv');
        const cardLi = document.createElement('li');
        const cardTLi = document.createElement('li');
        const imgDiv = document.createElement('img');
        const nameDiv = document.createElement('p');
        const likeIcon = createSpanIcon("favorite");
        const commentBtn = document.createElement('button');
        commentBtn.innerText = 'Comments';
        commentBtn.classList.add('comment-btn');
       
        const WLLCT = document.createElement('p');
        WLLCT.innerHTML = `${item.weight}mb likes`

        imgDiv.setAttribute('src', item.image.medium);
        imgDiv.classList.add('imgDiv')
        nameDiv.innerHTML = item.name
        cardLi.appendChild(imgDiv);
        cardLi.appendChild(nameDiv);
        cardTLi.appendChild(WLLCT);
        cardTLi.appendChild(likeIcon);
        cardLi.appendChild(cardTLi);
        cardUl.appendChild(cardLi);
        bodyDiv.appendChild(cardUl);
        bodyDiv.appendChild(commentBtn);
        moviesImgDisplay.appendChild(bodyDiv)
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