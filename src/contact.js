const contactLoad = () => {

    // create the subject element
    const subject = document.createElement('div');
    subject.classList.add('subject');

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
    subject.appendChild(subtitle);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(address);
    contactContainer.appendChild(email);
    subject.appendChild(contactContainer);
    

    return subject;
}

export {contactLoad};