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

    const food = document.createElement('button');
    food.innerHTML = "Food";

    const drinks = document.createElement('button');
    drinks.innerHTML = "Food";

    pages.appendChild(about);
    pages.appendChild(food);
    pages.appendChild(drinks);

    // create footer
    const footer = document.createElement('footer');
    footer.innerHTML = "Footer";

    return {nav , container, footer};
}

export {initialLoad};