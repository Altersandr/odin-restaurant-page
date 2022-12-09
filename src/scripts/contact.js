const map = document.createElement('img');
map.id = "map";
map.src = "../src/img/map.png";
map.height = "400";

const ig = document.createElement('img');
ig.id = 'ig';
ig.src = "../src/img/ig.svg";
ig.height = '30';

const phone = document.createElement('img');
phone.id = 'phone';
phone.src = "../src/img/phone.svg";
phone.height = '50';

function loadContact (){
    const mainBody = document.getElementById('main-body');
    // mainBody.className = "contacts";
    mainBody.innerHTML = "";
    mainBody.appendChild(phone);
    mainBody.appendChild(ig);
    mainBody.appendChild(map);
};

export {loadContact};

