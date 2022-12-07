/* <div id="content">
        <div id="menu-bar">
            <img src="../src/img/logo.png" alt="logo" height="180px">
            <div id="nav">
                <div id="home">Home</div>
                <div id="menu">Menu</div>
                <div id="contact">Contact</div>
            </div>
        </div>
        <div id="main-body"></div>
        <footer id="footer">
            <div id = 'author'>Copyright © 2022 Altersandr</div>
            <a href="https://github.com/Altersandr">
                <img src= "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt = 'Altersandr' width="30px" class="github">
            </a>
        </footer>
    </div> */


const content = document.getElementById('content');

const menuBar = document.createElement('div'); //menu-bar
menuBar.id = "menu-bar";
const logo = document.createElement('img');
logo.src = "../src/img/logo.png";
logo.height = "180px"

const nav = document.createElement('div'); //nav
nav.id = "nav";

const home = document.createElement('div');
home.id = 'home';
const menu = document.createElement('div');
menu.id = 'menu';
const contact = document.createElement('div');
contact.id = 'contact';

const mainBody = document.createElement('div');
mainBody.id = 'main-body';


function onPageLoad (){

};

function addToContent (divId){
    const div = document.createElement('div');
    div.id = divId;
    content.appendChild(div)
}


