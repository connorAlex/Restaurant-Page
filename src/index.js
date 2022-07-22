import { initialLoad } from './pageLoad';
import './style.css';

const page = document.querySelector('.content');

// load core page elements
page.appendChild(initialLoad());