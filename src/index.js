import { initialLoad } from './pageLoad';
import {aboutLoad} from './about';
import { menuLoad } from './menu';
import { contactLoad } from './contact';
import './style.css';

const page = document.querySelector('.content');


// load core page elements
let elements = initialLoad();
for (const [key, value] of Object.entries(elements)){
    page.appendChild(value);
}

// select subject tile
let subject = document.querySelector('.subject');

// immediately load Food menu
subject.appendChild(menuLoad());

// logic to switch tabs
let about = document.querySelector('.about');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

about.onclick = () => subject.replaceChildren(aboutLoad());
menu.onclick = () => subject.replaceChildren(menuLoad());
contact.onclick = () => subject.replaceChildren(contactLoad());