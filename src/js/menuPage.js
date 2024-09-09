import initialLoad from "./initialLoad";
import {switchToPage} from '../index'

function loadMenuPage() {
    const content = document.createElement('div');
    content.id = 'menu-page';

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuTitle.classList.add('menu-title');


    const homeButton = document.createElement('button');
homeButton.textContent = 'Home'; 
homeButton.classList.add ('home-button');

homeButton.addEventListener('click', () => {
    switchToPage(initialLoad);
});

content.appendChild(homeButton);
content.appendChild(menuTitle);


    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Щавелевый - 95$';

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Раф урбеч - 59$';

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'Espresso - $4';
    const menuItem4 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'Рэдбул тоник - 0$';

    content.appendChild(menuTitle);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);

    return content;
}




export default loadMenuPage;