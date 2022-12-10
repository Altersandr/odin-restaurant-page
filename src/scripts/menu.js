
const item1 = {
    name: "item1",
    title: "Roses Mille Crepe",
    pic: "src/img/rosesmillecrepe.jpg",
    price: "6€"
};

const item2 = {
    name: "item2",
    title: "Dorayaki",
    pic: "src/img/dorayaki.jpg",
    price: "3€"
};

const item3 = {
    name: "item3",
    title: "Magnum Pan",
    pic: "src/img/magnumpan.jpg",
    price: "7€"
};

const item4 = {
    name: "item4",
    title: "Creepy Cupcake",
    pic: "src/img/creepycupcake.jpg",
    price: "3,5€"
};

const item5 = {
    name: "item5",
    title: "Pikachu",
    pic: "src/img/pikachu.jpg",
    price: "5,5€"
};

const item6 = {
    name: "item6",
    title: "Mooncake",
    pic: "src/img/mooncake.jpg",
    price: "4€"
};

const item7 = {
    name: "item7",
    title: "Caramel Mille Crepe",
    pic: "src/img/caramelmillecrepe.jpg",
    price: "6€",
};

const item8 = {
    name: "item8",
    title: "Melon Pan",
    pic: "src/img/melonpan.jpg",
    price: "5€"
};

const item9 = {
    name: "item9",
    title: "Hokkaido Milk Toast",
    pic: "src/img/hokkaidomilktoast.jpg",
    price: "4,5€"
};

function loadMenu(){

    const mainBody = document.getElementById('main-body');
    mainBody.className = "menu";
    const menuItems = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
    mainBody.innerHTML = "";
    menuItems.forEach(item=>{
        const divX = document.createElement('div');
        divX.id = item.name;
        divX.className = "items"
        const titleX  = document.createElement('div');
        titleX.classList = `title ${item.name}`;
        titleX.innerHTML = item.title;
        const priceX = document.createElement('div');
        priceX.classList = `price ${item.price}`;
        priceX.innerHTML = item.price;
        divX.style.backgroundImage = `url(${item.pic})`;
    
        divX.appendChild(titleX);
        divX.appendChild(priceX);
    
        mainBody.appendChild(divX)
    
    })
};

export {loadMenu};








