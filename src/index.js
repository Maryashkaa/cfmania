// Добавляем элемент с id 'root' в body, если он отсутствует
if (!document.getElementById('root')) {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
}

// Импортируем функции из других файлов
import initialLoad from './js/initialLoad';
import loadMenuPage from './js/menuPage';
import loadContactPage from './js/contactPage';
import './css/style.css'

// Функция для очистки содержимого перед загрузкой новой страницы
function clearContent() {
    const content = document.getElementById('root');
    if (content) {
        content.innerHTML = '';  // Очищаем содержимое вместо удаления
    }
}

// Функция для переключения между страницами
export function switchToPage(pageLoadFunction) {
    clearContent();
    const root = document.getElementById('root');
    root.appendChild(pageLoadFunction());
}

// Создаем навигационную панель
export function createNavBar() {
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
export function initialPageLoad() {
    const root = document.getElementById('root');
    root.appendChild(initialLoad());
}

// Запускаем начальную загрузку
initialPageLoad();
 
