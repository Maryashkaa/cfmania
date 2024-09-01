// Импортируем функции из других файлов
import initialLoad from './initialLoad';
import loadMenuPage from './menuPage';
import loadContactPage from './contactPage';

// Функция для очистки содержимого перед загрузкой новой страницы
function clearContent() {
    const content = document.getElementById('root');
    if (content) {
        content.remove();
    }
}

// Функция для переключения между страницами
function switchToPage(pageLoadFunction) {
    clearContent();
    const root = document.getElementById('content');
    root.appendChild(pageLoadFunction());
}

// Создаем навигационную панель
function createNavBar() {
    const navBar = document.createElement('nav');
    const homeLink = document.createElement('button');
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', () => switchToPage(initialLoad));

    const menuLink = document.createElement('button');
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => switchToPage(loadMenuPage));

    const contactLink = document.createElement('button');
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', () => switchToPage(loadContactPage));

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(contactLink);

    return navBar;
}

// Функция для начальной загрузки страницы
function initialPageLoad() {
    const root = document.getElementById('content');
    root.appendChild(createNavBar());
    root.appendChild(initialLoad());
}

// Запускаем начальную загрузку
initialPageLoad();
