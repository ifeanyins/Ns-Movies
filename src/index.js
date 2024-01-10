import './style.css'
import { movieList } from '../module/homepage'
import getMovieLength from '../module/movieLength';
import { Involvement } from '../module/popupApi';
import Popup from '../module/popup';

function pageLoad () {
    getMovieLength();
    movieList();
}
pageLoad();

document.addEventListener('click', async (e) => {
    if (!e.target.matches('.commentBtn')) { return };
    const { id } = e.target;
    const comList = await Involvement.getComments(id);
    const MoveInfo = await Popup.getInfos(id);
    await Popup.display(MoveInfo, id, comList);
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    popup.classList.add('active');
    overlay.classList.add('active');
    Popup.displayCom(comList);
});

document.querySelector('.overlay').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    popup.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  document.addEventListener('click', async (e) => {
    if (!e.target.matches('.submit')) {
      return;
    }
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const com = document.getElementById('comment').value;
    const { id } = e.target;
    await Involvemnt.postComments(id, name, com);
    const comList = await Involvemnt.getComments(id);
    Popup.displayCom(comList);
    Popup.countComments(comList);
 })