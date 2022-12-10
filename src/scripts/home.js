const home = document.getElementById('home');

const h3 = document.createElement('h3');
const homeImg = document.createElement('img');

h3.innerHTML = "Sweets Laboratory, a modern and well-finished Chinese pastry bar that winks at the very young, here you can see our newest addition to the menu, a Christmas special drink: 🎄Strawberry Matcha Latte🎄";

homeImg.src = "src/img/home.jpg";
homeImg.id = "home-img";


function loadHome(){
    const mainBody = document.getElementById('main-body');
    mainBody.innerHTML = ""; 
    mainBody.appendChild(h3);
    mainBody.appendChild(homeImg)
};

export {loadHome}
