const menuLoad = () => {

    // add menu content
    const menu = {
        apps: [
            
            ['brandade de morue', 'salt cod with olive oil, cream & garlic'],
            ['escargots', 'snails in garlic, parsley & butter'],
            ['Poireaux vinaigrette', 'leeks, hazelnuts']
        ],

        entrees: [
            ['coq au vin', 'chicken in red wine, lardons & mushrooms'],
            ['tout le lapin', 'all of the rabbit'],
            ['canard montmorency', 'duckling with cherries, foie gras, chanterelles']
        ],

        desserts: [
            ['tarte au citron', 'lemon sabayon, pistachio meringue, shortbread crust'],
            ['creme brulee', 'chilled vanilla custard with caramelized sugar top']
        ]
    };

    // create the new subject element
    const item = document.createElement('div');
    item.classList.add('item');


    function createCard(course, title) {

        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');


        const courseTitle = document.createElement('div');
        courseTitle.classList.add('courseTitle');
        courseTitle.innerHTML = title;

        courseDiv.appendChild(courseTitle)
        course.forEach((e) => {

            // create a card
            const card = document.createElement('div');
            card.classList.add('card');

            // create a title div
            const title = document.createElement('div');
            title.innerHTML = e[0];

            // create the description div
            const desc = document.createElement('div');
            desc.innerHTML = e[1];

            // append all items to the proper parent
            card.appendChild(title);
            card.appendChild(desc);
            
            courseDiv.appendChild(card);
        });
        item.appendChild(courseDiv);
    };

    createCard(menu.apps, 'appetizers');
    createCard(menu.entrees, 'entrees');
    createCard(menu.desserts, 'desserts');

    return item;
}
export {menuLoad};