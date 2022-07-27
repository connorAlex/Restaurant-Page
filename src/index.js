import { initialLoad } from './pageLoad';
import {aboutLoad} from './about';
import { menuLoad } from './menu';
import { contactLoad } from './contact';
import './style.css';

const page = document.querySelector('.content');
const container = document.querySelector('.container');

// load core page elements
let elements = initialLoad();
for (const [key, value] of Object.entries(elements)){
    page.appendChild(value);
}

// select subject tile
const subject = document.querySelector('.subject');

// immediately load Food menu
subject.appendChild(menuLoad());


// logic to switch tabs
let about = document.querySelector('.about');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');

let item = document.querySelector('.item');

about.onclick = () => replacePage(aboutLoad());
menu.onclick = () => replacePage(menuLoad());
contact.onclick = () => replacePage(contactLoad());


function replacePage(newItem) {
    subject.innerHTML = "";
    subject.appendChild(newItem);
}