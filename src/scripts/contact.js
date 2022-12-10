const map = document.createElement('img');
map.id = "map";
map.src = "../src/img/map.png";

const igDiv = document.createElement('div');
igDiv.id = 'instagram';

const pNumber = document.createElement('p');
pNumber.innerHTML = "2 3653 5586"

const igTag = document.createElement('p');
igTag.innerHTML = "@slabmilano"

const numberDiv = document.createElement('div');
numberDiv.id = 'number';

const ig = document.createElement('img');
ig.id = 'ig';
ig.src = "../src/img/ig.svg";
ig.height = '30';

const phone = document.createElement('img');
phone.id = 'phone';
phone.src = "../src/img/phone.svg";
phone.height = '50';

function loadContact (){
    igDiv.appendChild(ig);
    igDiv.appendChild(igTag);
    numberDiv.appendChild(phone);
    numberDiv.appendChild(pNumber);

    const mainBody = document.getElementById('main-body');
    mainBody.innerHTML = "";
    mainBody.appendChild(igDiv);
    mainBody.appendChild(numberDiv)
    mainBody.appendChild(map);
};

export {loadContact};

