import { pageLoad } from './scripts/pageload';

pageLoad()

// const menu = document.getElementById('menu');

menu.addEventListener('click', ()=>alert('shit'))


// const menuItems = [item1, item2, item3, item4, item5, item6, item7, item8, item9];


const item1 = {
    title: "Roses Mille Crepe",
    pic: "/src/img/rosesmillecrepe.jpg",
    price: "6€"
}

const item1Div = document.createElement('div');
item1Div.id = "item1"
const item1Title = document.createElement('div');
item1Title.classList = "title item1"
const item1Price = document.createElement('div');
item1Price.classList = "price item1"
item1Div.style.backgroundImage = `url(${item1.pic})`;

item1Div.appendChild(item1Title);
item1Div.appendChild(item1Price);

const mainBody = document.getElementById('main-body');

mainBody.appendChild(item1Div)

