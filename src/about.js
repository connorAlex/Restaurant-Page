const aboutLoad = () => {

    // create the new item element
    const item = document.createElement('div');
    item.classList.add('item');

    // create a card for contact info
    const card = document.createElement('div');
    card.classList.add('infoCard');

    // Add subtitle
    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = "About Us";

    card.appendChild(subtitle);

    // add About copy to item
    const desc = document.createElement('div');
    desc.classList.add('desc');
    desc.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere vehicula. Vestibulum augue massa, euismod eleifend lectus vitae, dictum ultricies enim. Donec felis metus, iaculis ornare dolor eget, venenatis ullamcorper sapien. Aenean ut leo mauris. Integer in leo vulputate, gravida enim a, egestas mi. Nam consectetur a orci eu consequat. Quisque dictum elit eget maximus placerat. Aliquam tincidunt elementum quam non semper.<p>Phasellus iaculis at leo a volutpat. Nunc eget dictum leo. Vestibulum massa felis, viverra ut diam ut, gravida finibus neque. Donec nibh turpis, facilisis vel sem vitae, accumsan aliquam velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Sed sit amet rhoncus mauris, eget gravida elit. Aliquam semper tortor vitae aliquam rutrum. Praesent cursus urna sem, eget imperdiet ipsum dapibus ac. Vestibulum euismod ex vestibulum diam pulvinar porttitor. Pellentesque eleifend commodo sem non vestibulum. Phasellus dignissim rutrum mollis. Sed in maximus augue, et congue odio. Etiam ultricies dignissim orci, in tempor tellus vestibulum a. Sed luctus sem vitae pulvinar euismod. Etiam molestie ultricies tempus";

    card.appendChild(desc);

    item.appendChild(card);

    return item;

}

export {aboutLoad};