/* <div id="main-body">
            div id item1
            title class item1 title
            picture class item1 picture
            price class item1 price
        </div> */



//make object with multiple menu items
//loop through them and create the cards
//append the cards to the page


const menuItems = [item1, item2, item3, item4, item5, item6, item7, item8, item9];


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
console.log(item1)

item1Div.appendChild(item1Title);
item1Div.appendChild(item1Price);






