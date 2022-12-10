/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/pageload */ \"./src/scripts/pageload.js\");\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menu */ \"./src/scripts/menu.js\");\n/* harmony import */ var _scripts_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/contact */ \"./src/scripts/contact.js\");\n/* harmony import */ var _scripts_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/home */ \"./src/scripts/home.js\");\n\n\n\n\n\n\n\n\n(0,_scripts_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\nmenu.addEventListener('click', _scripts_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\ncontact.addEventListener('click', _scripts_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact);\nhome.addEventListener('click', _scripts_home__WEBPACK_IMPORTED_MODULE_3__.loadHome);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nconst map = document.createElement('img');\nmap.id = \"map\";\nmap.src = \"../src/img/map.png\";\n\nconst igDiv = document.createElement('div');\nigDiv.id = 'instagram';\n\nconst pNumber = document.createElement('p');\npNumber.innerHTML = \"2 3653 5586\"\n\nconst igTag = document.createElement('p');\nigTag.innerHTML = \"@slabmilano\"\n\nconst numberDiv = document.createElement('div');\nnumberDiv.id = 'number';\n\nconst ig = document.createElement('img');\nig.id = 'ig';\nig.src = \"../src/img/ig.svg\";\nig.height = '30';\n\nconst phone = document.createElement('img');\nphone.id = 'phone';\nphone.src = \"../src/img/phone.svg\";\nphone.height = '50';\n\nfunction loadContact (){\n    igDiv.appendChild(ig);\n    igDiv.appendChild(igTag);\n    numberDiv.appendChild(phone);\n    numberDiv.appendChild(pNumber);\n\n    const mainBody = document.getElementById('main-body');\n    mainBody.innerHTML = \"\";\n    mainBody.appendChild(igDiv);\n    mainBody.appendChild(numberDiv)\n    mainBody.appendChild(map);\n};\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst home = document.getElementById('home');\n\nconst h3 = document.createElement('h3');\nconst homeImg = document.createElement('img');\n\nh3.innerHTML = \"Sweets Laboratory, a modern and well-finished Chinese pastry bar that winks at the very young, here you can see our newest addition to the menu, a Christmas special drink: 🎄Strawberry Matcha Latte🎄\";\n\nhomeImg.src = \"../src/img/home.jpg\";\nhomeImg.id = \"home-img\";\n\n\nfunction loadHome(){\n    const mainBody = document.getElementById('main-body');\n    mainBody.innerHTML = \"\"; \n    mainBody.appendChild(h3);\n    mainBody.appendChild(homeImg)\n};\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/scripts/home.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\nconst item1 = {\n    name: \"item1\",\n    title: \"Roses Mille Crepe\",\n    pic: \"/src/img/rosesmillecrepe.jpg\",\n    price: \"6€\"\n};\n\nconst item2 = {\n    name: \"item2\",\n    title: \"Dorayaki\",\n    pic: \"/src/img/dorayaki.jpg\",\n    price: \"3€\"\n};\n\nconst item3 = {\n    name: \"item3\",\n    title: \"Magnum Pan\",\n    pic: \"/src/img/magnumpan.jpg\",\n    price: \"7€\"\n};\n\nconst item4 = {\n    name: \"item4\",\n    title: \"Creepy Cupcake\",\n    pic: \"/src/img/creepycupcake.jpg\",\n    price: \"3,5€\"\n};\n\nconst item5 = {\n    name: \"item5\",\n    title: \"Pikachu\",\n    pic: \"/src/img/pikachu.jpg\",\n    price: \"5,5€\"\n};\n\nconst item6 = {\n    name: \"item6\",\n    title: \"Mooncake\",\n    pic: \"/src/img/mooncake.jpg\",\n    price: \"4€\"\n};\n\nconst item7 = {\n    name: \"item7\",\n    title: \"Caramel Mille Crepe\",\n    pic: \"/src/img/caramelmillecrepe.jpg\",\n    price: \"6€\",\n};\n\nconst item8 = {\n    name: \"item8\",\n    title: \"Melon Pan\",\n    pic: \"/src/img/melonpan.jpg\",\n    price: \"5€\"\n};\n\nconst item9 = {\n    name: \"item9\",\n    title: \"Hokkaido Milk Toast\",\n    pic: \"/src/img/hokkaidomilktoast.jpg\",\n    price: \"4,5€\"\n};\n\nfunction loadMenu(){\n\n    const mainBody = document.getElementById('main-body');\n    mainBody.className = \"menu\";\n    const menuItems = [item1, item2, item3, item4, item5, item6, item7, item8, item9];\n    mainBody.innerHTML = \"\";\n    menuItems.forEach(item=>{\n        const divX = document.createElement('div');\n        divX.id = item.name;\n        divX.className = \"items\"\n        const titleX  = document.createElement('div');\n        titleX.classList = `title ${item.name}`;\n        titleX.innerHTML = item.title;\n        const priceX = document.createElement('div');\n        priceX.classList = `price ${item.price}`;\n        priceX.innerHTML = item.price;\n        divX.style.backgroundImage = `url(${item.pic})`;\n    \n        divX.appendChild(titleX);\n        divX.appendChild(priceX);\n    \n        mainBody.appendChild(divX)\n    \n    })\n};\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/scripts/menu.js?");

/***/ }),

/***/ "./src/scripts/pageload.js":
/*!*********************************!*\
  !*** ./src/scripts/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad (){\n    const body = document.querySelector('body');\n    const content = document.getElementById('content');\n\n    const menuBar = document.createElement('div'); //menu-bar\n    menuBar.id = \"menu-bar\";\n\n    const logo = document.createElement('img');\n    logo.id = \"logo\";\n    logo.src = \"../src/img/logo.png\";\n\n    const nav = document.createElement('div'); //nav\n    nav.id = \"nav\";\n\n    const home = document.createElement('div');\n    home.id = 'home';\n    home.innerHTML = \"Home\";\n    const menu = document.createElement('div');\n    menu.id = 'menu';\n    menu.innerHTML = \"Menu\";\n    const contact = document.createElement('div');\n    contact.id = 'contact';\n    contact.innerHTML = \"Contact\";\n\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n    menuBar.appendChild(logo);\n    menuBar.appendChild(nav);\n    content.appendChild(menuBar);\n\n\n    const mainBody = document.createElement('div');\n    mainBody.id = 'main-body';\n\n    content.appendChild(mainBody);\n};\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/scripts/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;