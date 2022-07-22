import { initialLoad } from './pageLoad';
import './style.css';

const page = document.querySelector('.content');

// load core page elements
let elements = initialLoad();
for (const [key, value] of Object.entries(elements)){
    page.appendChild(value);
}

// elements.forEach((e) => {
//     page.appendChild(e);
// });