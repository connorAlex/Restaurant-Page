const aboutLoad = () => {

    console.log("about selected");
    // create the subject element
    const subject = document.createElement('div');
    subject.classList.add('subject');

    // Add subtitle
    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = "About Us";

    subject.appendChild(subtitle);

    // add About copy to subject
    const desc = document.createElement('div');
    desc.classList.add('desc');
    desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus posuere vehicula. Vestibulum augue massa, euismod eleifend lectus vitae, dictum ultricies enim. Donec felis metus, iaculis ornare dolor eget, venenatis ullamcorper sapien. Aenean ut leo mauris. Integer in leo vulputate, gravida enim a, egestas mi. Nam consectetur a orci eu consequat. Quisque dictum elit eget maximus placerat. Aliquam tincidunt elementum quam non semper.";

    subject.appendChild(desc);
    
    return subject;

}

export {aboutLoad};