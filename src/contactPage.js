function loadContactPage() {
    const content = document.createElement('div');
    content.id = 'contact-page';

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactTitle.classList.add('contact-title');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <p>Phone: +7 (495) 123-45-67</p>
        <p>Email: info@coffeemania.ru</p>
        <p>Address: Moscow, Red Square, 1</p>
    `;

    content.appendChild(contactTitle);
    content.appendChild(contactInfo);

    return content;
}

export default loadContactPage;