import { pageLoad } from './scripts/pageload';

import { loadMenu } from './scripts/menu';

import { loadContact } from "./scripts/contact";

import { loadHome } from "./scripts/home";

pageLoad();

menu.addEventListener('click', loadMenu);
contact.addEventListener('click', loadContact);
home.addEventListener('click', loadHome);
