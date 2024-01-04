import { movieApi } from "./try";

const getMovieLength = async () => {
    const movieLength = document.getElementById('movielength');
    const getLengthAPI = await movieApi();
    const getLength = getLengthAPI.length;
    const lengthPgh = document.createElement('p');
    lengthPgh.innerHTML = `Best Tv Series of all Time (${getLength})`;
    movieLength.appendChild(lengthPgh)
    console.log(getLength)
}

export default getMovieLength 