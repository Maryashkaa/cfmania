import initialLoad from "./initialLoad";
import {switchToPage} from '../index'

function loadContactPage() {
    const content = document.createElement('div');
    content.id = 'contact-page';
//category
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactTitle.classList.add('contact-title');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <p>Phone: +7 (999) 995-95-95</p>
        <p>Email: info@coffeemania.ru</p>
        <p>Address: Putitna 22 </p>
    `;

    content.appendChild(contactTitle);
    content.appendChild(contactInfo);
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home'; 
    homeButton.classList.add('home-button'); 

    
    homeButton.addEventListener('click', () => {
        switchToPage(initialLoad);
    });

   
    content.appendChild(homeButton);

   
    content.appendChild(contactTitle);
    content.appendChild(contactInfo);


    return content;
}

export default loadContactPage;