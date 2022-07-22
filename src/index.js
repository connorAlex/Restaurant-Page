import { initialLoad } from './pageLoad';
import {aboutLoad} from './about';
import { foodLoad } from './food';
import { drinksLoad } from './drinks';
import './style.css';

const page = document.querySelector('.content');


// load core page elements
let elements = initialLoad();
for (const [key, value] of Object.entries(elements)){
    page.appendChild(value);
}

let subject = document.querySelector('.subject');
subject.appendChild(foodLoad());

// logic to switch tabs
let about = document.querySelector('.about');
let food = document.querySelector('.food');
let drinks = document.querySelector('.drinks');

about.onclick = function() {aboutLoad()};
food.onclick = () => subject.replaceChildren(foodLoad());
drinks.onclick = () => drinksLoad();