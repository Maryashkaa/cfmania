import IconCfm from '../img/cfmm.jpg'
import { createNavBar } from '..';


function initialLoad() {
    const content = document.createElement('root');
    content.id = 'root'
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
    text.textContent = 'Кофемания — это не просто кофейня, это штаб-квартира вселенной для темщиков. Здесь все собравшиеся обсуждают темки на миллиарды, пока ждут свой раф на кокосовом, а каждый глоток кофе — это новый виток философских размышлений. Тут, среди ароматов свежесваренного кофе и лёгкого блеска украшений, Кофемания становится местом, где каждое обсуждение может стать началом нового открытия. Так что, если вы искали место, где можно обсудить смысл жизни за чашечкой эспрессо, вы попали в правильное место. Наслаждайтесь!';
    mainBlock.appendChild(place);
    mainBlock.appendChild(text);

    const img = document.createElement('img');
    img.src = IconCfm;
    img.width = 1500;
    img.height = 500;

    content.appendChild(createNavBar());
    content.appendChild(mainText);
    content.appendChild(mainBlock);
    content.appendChild(img);
    return content
}

export default initialLoad;
