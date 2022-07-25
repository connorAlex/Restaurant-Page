const drinksLoad = () => {
    
    // create the subject element
    const subject = document.createElement('div');
    subject.classList.add('subject');

    // create card
    const card = document.createElement('div');
    card.classList.add('card');

    // create the title + description
    const title = document.createElement('div');
    title.innerHTML = "Title of Drink";

    const desc = document.createElement('div');
    desc.innerHTML = "This is a description of drink";

    card.appendChild(title);
    card.appendChild(desc);

    subject.appendChild(card);

    return subject;
}

export {drinksLoad};