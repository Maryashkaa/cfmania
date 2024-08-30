import IconCfm from '../img/cfmm.jpg'

function initialLoad() {
    const content = document.getElementById('content');

    const mainText = document.createElement('div');
    mainText.classList.add('main-text');

    const h1Coffemania = document.createElement('h1');
    h1Coffemania.classList.add('coffemania');
    h1Coffemania.textContent = 'coffeemania';

    const h1ByM = document.createElement('h1');
    h1ByM.classList.add('byM');
    h1ByM.textContent = 'by Maryashka';

    mainText.appendChild(h1Coffemania);
    mainText.appendChild(h1ByM);

    const mainBlock = document.createElement('div');
    mainBlock.classList.add('main-block');

    const place = document.createElement('div');
    place.classList.add('place');
    place.textContent = 'about us';

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = 'Каждая Кофемания — это индивидуально разработанный проект.  Сейчас у нас 38 ресторанов в Москве и Московской области. Мы не следуем шаблону, когда открываем новые рестораны. Каждый раз мы привлекаем известных зарубежных или отечественных дизайнеров и архитекторов, что делает наш бренд также одним из законодателей моды в ресторанном бизнесе.';

    mainBlock.appendChild(place);
    mainBlock.appendChild(text);

    const img = document.createElement('img');
    img.src = IconCfm;
    img.width = 1000;
    img.height = 500;

    content.appendChild(mainText);
    content.appendChild(mainBlock);
    content.appendChild(img);
}

export default initialLoad;
