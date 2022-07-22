

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

    // create the subject element
    const subject = document.createElement('div');
    subject.classList.add('subject');
    container.appendChild(subject);

    // create page buttons
    const about = document.createElement('button');
    about.classList.add("about");
    about.innerHTML = "About";

    const food = document.createElement('button');
    food.classList.add('food');
    food.innerHTML = "Food";

    const drinks = document.createElement('button');
    drinks.classList.add('drinks');
    drinks.innerHTML = "Drinks";
    
    // append buttons to the page element
    pages.appendChild(about);
    pages.appendChild(food);
    pages.appendChild(drinks);

    // create footer
    const footer = document.createElement('footer');
    footer.innerHTML = "Footer";

    return {nav , container, footer};
}

export {initialLoad};