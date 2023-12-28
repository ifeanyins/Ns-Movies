const url = "https://api.tvmaze.com/shows";

const getMoviesApi = async () => {
    const movies = await fetch(url);
    const getMovies = await movies.json();
    const slicedMovies = getMovies.slice(0, 15)
    return slicedMovies;
}

const displayMovies = async () => {
    const moviesImgDisplay = document.getElementById('movie-display');
    moviesImgDisplay.classList.add('movie-imgDiplay');
    const movieApi = await getMoviesApi();
    console.log(movieApi);

    movieApi.forEach(item => {
        const bodyDiv = document.createElement('div');
        bodyDiv.classList.add('bodyDiv');
        const Div = document.createElement('div');
        Div.classList.add('iDiv')
        const imgDiv = document.createElement('img');
        const nameDiv = document.createElement('p');

        imgDiv.setAttribute('src', item.image.medium);
        imgDiv.classList.add('imgDiv')
        nameDiv.innerHTML = item.name
        Div.appendChild(imgDiv);
        Div.appendChild(nameDiv);
        bodyDiv.appendChild(Div);
        moviesImgDisplay.appendChild(bodyDiv)
    });

    // put in another module later
    const movieLength = document.getElementById('movielength');
    const getLength = movieApi.length;
    console.log(getLength)
}

export {displayMovies}