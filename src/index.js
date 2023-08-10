import './style.css';
import { callCreateItems } from './modules/router';
import logo from './assets/images/movieDB.png';

window.addEventListener('DOMContentLoaded', () => {
    const myLogo = document.querySelector('.my-logo');
    myLogo.src = logo;
    callCreateItems();
});