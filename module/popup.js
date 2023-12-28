import { getMoviesApi } from "./api";

const generatePopUp = async () => {
    const moviesApi = await getMoviesApi();
    moviesApi.forEach(item => {
       console.log(item)
       
    });

}
generatePopUp()
export {generatePopUp}