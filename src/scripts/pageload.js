function pageLoad (){
    const body = document.querySelector('body');
    const content = document.getElementById('content');

    const menuBar = document.createElement('div'); //menu-bar
    menuBar.id = "menu-bar";

    const logo = document.createElement('img');
    logo.id = "logo";
    logo.src = "src/img/logo.png";

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
};

export {pageLoad};

