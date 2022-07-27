const aboutLoad = () => {

    // create the new item element
    const item = document.createElement('div');
    item.classList.add('item');

    // Add subtitle
    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = "About Us";

    item.appendChild(subtitle);

    // add About copy to item
    const desc = document.createElement('div');
    desc.classList.add('desc');
    desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere vehicula. Vestibulum augue massa, euismod eleifend lectus vitae, dictum ultricies enim. Donec felis metus, iaculis ornare dolor eget, venenatis ullamcorper sapien. Aenean ut leo mauris. Integer in leo vulputate, gravida enim a, egestas mi. Nam consectetur a orci eu consequat. Quisque dictum elit eget maximus placerat. Aliquam tincidunt elementum quam non semper.";

    item.appendChild(desc);

    return item;

}

export {aboutLoad};