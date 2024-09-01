function loadMenuPage() {
    const content = document.createElement('div');
    content.id = 'menu-page';

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuTitle.classList.add('menu-title');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Cappuccino - $5';

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Latte - $6';

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'Espresso - $4';

    content.appendChild(menuTitle);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);

    return content;
}

export default loadMenuPage;