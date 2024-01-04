import './style.css'
import { movieList } from '../module/homepage'
import getMovieLength from '../module/movieLength';

function pageLoad () {
    getMovieLength();
    movieList();
}
pageLoad()