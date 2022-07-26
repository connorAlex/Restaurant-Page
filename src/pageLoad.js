

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

    const menu = document.createElement('button');
    menu.classList.add('menu');
    menu.innerHTML = "Menu";

    const contact = document.createElement('button');
    contact.classList.add('contact');
    contact.innerHTML = "Contact";
    
    // append buttons to the page element
    pages.appendChild(about);
    pages.appendChild(menu);
    pages.appendChild(contact);

    // create footer
    const footer = document.createElement('footer');
    footer.innerHTML = "Footer";

    return {nav , container, footer};
}

export {initialLoad};