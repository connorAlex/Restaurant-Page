const menuLoad = () => {

    const menu = {
        apps: [
            ['Brandade de Morue', 'BDM Description'],
            ['French Onion Soup', 'Soup Description']
        ],

        entrees: [
            ['Coq au Vin', 'CAV description'],
            ['Entree 2', 'Entree2 Description']
        ],

        desserts: [
            ['Charlotte de Marons', 'CDM Placeholder'],
            ['Creme Brulee', 'Creme Brulee Placeholder']
        ]
    };

    // create the new subject element
    const item = document.createElement('div');
    item.classList.add('item');


    function createCard(course) {
        course.forEach((e) => {
            //create a card
            const card = document.createElement('div');
            card.classList.add('card');

            //create a title div
            const title = document.createElement('div');
            title.innerHTML = e[0];

            //create the description div
            const desc = document.createElement('div');
            desc.innerHTML = e[1];

            card.appendChild(title);
            card.appendChild(desc);
            
            item.appendChild(card);
        });
    };

    createCard(menu.apps);
    createCard(menu.entrees);
    createCard(menu.desserts);

    return item;
}
export {menuLoad};