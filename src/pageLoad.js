import {aboutLoad} from './about';
import { foodLoad } from './food';
import { drinksLoad } from './drinks';

const initialLoad = () => {

    // create nav bar
    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.innerHTML = "Restaurant Name";

    // create container
    const container = document.createElement('div');
    container.classList.add('container');

    // create pages
    const pages = document.createElement('div');
    pages.classList.add('pages');

    container.appendChild(pages);

    // create page buttons
    const about = document.createElement('button');
    about.innerHTML = "About";
    about.onclick = function() {aboutLoad(pages)};

    const food = document.createElement('button');
    food.innerHTML = "Food";
    food.onclick = () => container.appendChild(foodLoad());

    const drinks = document.createElement('button');
    drinks.innerHTML = "Drinks";
    drinks.onclick = () => drinksLoad(pages);

    pages.appendChild(about);
    pages.appendChild(food);
    pages.appendChild(drinks);

    // create footer
    const footer = document.createElement('footer');
    footer.innerHTML = "Footer";

    return {nav , container, footer};
}

export {initialLoad};