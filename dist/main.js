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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/pageload */ \"./src/scripts/pageload.js\");\n\n\n(0,_scripts_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)()\n\n// const menu = document.getElementById('menu');\n\nmenu.addEventListener('click', ()=>alert('shit'))\n\n\n// const menuItems = [item1, item2, item3, item4, item5, item6, item7, item8, item9];\n\n\nconst item1 = {\n    title: \"Roses Mille Crepe\",\n    pic: \"/src/img/rosesmillecrepe.jpg\",\n    price: \"6€\"\n}\n\nconst item1Div = document.createElement('div');\nitem1Div.id = \"item1\"\nconst item1Title = document.createElement('div');\nitem1Title.classList = \"title item1\"\nconst item1Price = document.createElement('div');\nitem1Price.classList = \"price item1\"\nitem1Div.style.backgroundImage = `url(${item1.pic})`;\n\nitem1Div.appendChild(item1Title);\nitem1Div.appendChild(item1Price);\n\nconst mainBody = document.getElementById('main-body');\n\nmainBody.appendChild(item1Div)\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/scripts/pageload.js":
/*!*********************************!*\
  !*** ./src/scripts/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* <div id=\"content\">\n        <div id=\"menu-bar\">\n            <img src=\"../src/img/logo.png\" alt=\"logo\" height=\"180px\">\n            <div id=\"nav\">\n                <div id=\"home\">Home</div>\n                <div id=\"menu\">Menu</div>\n                <div id=\"contact\">Contact</div>\n            </div>\n        </div>\n        <div id=\"main-body\"></div>\n        <footer id=\"footer\">\n            <div id = 'author'>Copyright © 2022 Altersandr</div>\n            <a href=\"https://github.com/Altersandr\">\n                <img src= \"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg\" alt = 'Altersandr' width=\"30px\" class=\"github\">\n            </a>\n        </footer>\n    </div> */\n\n// window.addEventListener('onload', onPageLoad)\n\nfunction pageLoad (){\n\n    const content = document.getElementById('content');\n\n    const menuBar = document.createElement('div'); //menu-bar\n    menuBar.id = \"menu-bar\";\n\n    const logo = document.createElement('img');\n    logo.id = \"logo\";\n    logo.src = \"../src/img/logo.png\";\n\n    const nav = document.createElement('div'); //nav\n    nav.id = \"nav\";\n\n    const home = document.createElement('div');\n    home.id = 'home';\n    home.innerHTML = \"Home\";\n    const menu = document.createElement('div');\n    menu.id = 'menu';\n    menu.innerHTML = \"Menu\";\n    const contact = document.createElement('div');\n    contact.id = 'contact';\n    contact.innerHTML = \"Contact\";\n\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n    menuBar.appendChild(logo);\n    menuBar.appendChild(nav);\n    content.appendChild(menuBar);\n\n\n    const mainBody = document.createElement('div');\n    mainBody.id = 'main-body';\n\n    content.appendChild(mainBody);\n\n    const footer = document.createElement('footer');\n    footer.id = 'footer';\n    \n    const author = document.createElement('div');\n    author.id = 'author';\n    author.innerHTML = \"Copyright © 2022 Altersandr\";\n\n    footer.appendChild(author);\n\n    const github = document.createElement('a');\n    github.href = \"https://github.com/Altersandr\";\n\n\n    const githubImg = document.createElement('img');\n    githubImg.className = 'github';\n    githubImg.src = \"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg\";\n\n    github.appendChild(githubImg);\n    footer.appendChild(github);\n    content.appendChild(footer)\n\n\n};\n\nfunction addToContent (divId){\n    const div = document.createElement('div');\n    div.id = divId;\n    content.appendChild(div)\n};\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/scripts/pageload.js?");

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