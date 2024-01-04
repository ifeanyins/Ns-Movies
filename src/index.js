import './style.css'
import { movieList } from '../module/try'

function pageLoad () {
    getMovieLength();
    movieList();
}
pageLoad()