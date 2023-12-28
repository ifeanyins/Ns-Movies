import { getMoviesApi } from "./homepage";

const generatePopUp = async () => {
    const moviesApi = await getMoviesApi();
    moviesApi.forEach(item => {
       
    });

}
generatePopUp()
export {generatePopUp}

// addition of eventlist
// ener , pop up container and information , like button and comment also linters