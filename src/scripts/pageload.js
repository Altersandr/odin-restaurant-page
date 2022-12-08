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

// window.addEventListener('onload', onPageLoad)

function pageLoad (){

    const content = document.getElementById('content');

    const menuBar = document.createElement('div'); //menu-bar
    menuBar.id = "menu-bar";

    const logo = document.createElement('img');
    logo.id = "logo";
    logo.src = "../src/img/logo.png";

    const nav = document.createElement('div'); //nav
    nav.id = "nav";

    const home = document.createElement('div');
    home.id = 'home';
    home.innerHTML = "Home";
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerHTML = "Menu";
    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.innerHTML = "Contact";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    menuBar.appendChild(logo);
    menuBar.appendChild(nav);
    content.appendChild(menuBar);


    const mainBody = document.createElement('div');
    mainBody.id = 'main-body';

    content.appendChild(mainBody);

    const footer = document.createElement('footer');
    footer.id = 'footer';
    
    const author = document.createElement('div');
    author.id = 'author';
    author.innerHTML = "Copyright © 2022 Altersandr";

    footer.appendChild(author);

    const github = document.createElement('a');
    github.href = "https://github.com/Altersandr";


    const githubImg = document.createElement('img');
    githubImg.className = 'github';
    githubImg.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";

    github.appendChild(githubImg);
    footer.appendChild(github);
    content.appendChild(footer)


};

function addToContent (divId){
    const div = document.createElement('div');
    div.id = divId;
    content.appendChild(div)
};

export {pageLoad};

