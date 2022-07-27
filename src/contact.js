const contactLoad = () => {

    // create the new item element
    const item = document.createElement('div');
    item.classList.add('item');

    // title
    const subtitle = document.createElement('div');
    subtitle.classList.add('contact');
    subtitle.innerHTML = "Contact Information"
    
    // small container div
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');


    // Phone ###
    const phone = document.createElement('div');
    phone.innerHTML = "555-555-5555";

    // Address
    const address = document.createElement('div');
    address.innerHTML = "123 e Easy Street, Chicago IL";

    // Email 
    const email = document.createElement('div');
    email.innerHTML = "lapasserelle@gmail.com";

    // append info
    item.appendChild(subtitle);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(address);
    contactContainer.appendChild(email);
    item.appendChild(contactContainer);
    

    return item;
}

export {contactLoad};