const menuLoad = () => {

    // create the new subject element
    const item = document.createElement('div');
    item.classList.add('item');


    // create card
    const card = document.createElement('div');
    card.classList.add('card');

    // create the title + description
    const title = document.createElement('div');
    title.innerHTML = "Title of Food";

    const desc = document.createElement('div');
    desc.innerHTML = "This is a description of food";

    card.appendChild(title);
    card.appendChild(desc);

    item.appendChild(card);

    return item;
}
export {menuLoad};