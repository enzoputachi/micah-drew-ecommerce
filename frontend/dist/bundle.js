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

/***/ "../backend/data.js":
/*!**************************!*\
  !*** ../backend/data.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst products = [\r\n  {\r\n    _id: \"1\",\r\n    name: \"Full Zip running Shirts\",\r\n    image: \"img/new/fine lady.jpg\",\r\n    price: 70,\r\n    brand: \"Nzoski\",\r\n    rating: 4.5,\r\n    numReviews: 10,\r\n    countInStock: 6,\r\n  },\r\n  {\r\n    _id: \"1\",\r\n    name: \"Full Zip running Shirts\",\r\n    image: \"img/Clothes/tobias-tullius-Fg15LdqpWrs-unsplash.jpg\",\r\n    price: 60,\r\n    brand: \"Nzoski\",\r\n    rating: 4.5,\r\n    numReviews: 10,\r\n    countInStock: 6,\r\n  },\r\n  {\r\n    _id: \"1\",\r\n    name: \"Full Zip running Shirts\",\r\n    image: \"img/Clothes/tobias-tullius-Fg15LdqpWrs-unsplash.jpg\",\r\n    price: 60,\r\n    brand: \"Nzoski\",\r\n    rating: 4.5,\r\n    numReviews: 10,\r\n    countInStock: 6,\r\n  },\r\n  {\r\n    _id: \"1\",\r\n    name: \"Full Zip running Shirts\",\r\n    image: \"img/Clothes/ryan-hoffman-6Nub980bI3I-unsplash.jpg\",\r\n    price: 60,\r\n    brand: \"Nzoski\",\r\n    rating: 4.5,\r\n    numReviews: 10,\r\n    countInStock: 6,\r\n  },\r\n  {\r\n    _id: \"1\",\r\n    name: \"Full Zip running Shirts\",\r\n    image: \"img/new/fine lady.jpg\",\r\n    price: 60,\r\n    brand: \"Nzoski\",\r\n    rating: 4.5,\r\n    numReviews: 10,\r\n    countInStock: 6,\r\n  },\r\n  {\r\n    _id: \"1\",\r\n    name: \"Full Zip running Shirts\",\r\n    image: \"img/new/fine lady.jpg\",\r\n    price: 60,\r\n    brand: \"Nzoski\",\r\n    rating: 4.5,\r\n    numReviews: 10,\r\n    countInStock: 6,\r\n  },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\r\n\n\n//# sourceURL=webpack://frontend/../backend/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Error404Screen.js */ \"./src/screens/Error404Screen.js\");\n/* harmony import */ var _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/HomeScreen.js */ \"./src/screens/HomeScreen.js\");\n/* harmony import */ var _screens_ProductScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/ProductScreen.js */ \"./src/screens/ProductScreen.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\n//define the route address for each screen\r\nconst routes = {\r\n    \"/\": _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    \"/proudct/:id\": _screens_ProductScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n}\r\n\r\n//create a router function \r\nconst router = async () => {\r\n    const request = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseRequestUrl)();\r\n    const parseUrl = (request.resource ? `/${request.resource}`: '/') +\r\n                    (request.id ? `/${request.id}` : '') +\r\n                    (request.verb ? `/${request.verb}` :'');\r\n    const screen = routes[parseUrl]? routes[parseUrl]: _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    const main = document.getElementById(\"main-container\");\r\n    main.innerHTML = await screen.render();\r\n}\r\n\r\nwindow.addEventListener('load', router) ;\r\nwindow.addEventListener('hashchange', router);\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/screens/Error404Screen.js":
/*!***************************************!*\
  !*** ./src/screens/Error404Screen.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404Screen = {\r\n    render: () => {\r\n        return `<div>Page not found!</div>`\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404Screen);\n\n//# sourceURL=webpack://frontend/./src/screens/Error404Screen.js?");

/***/ }),

/***/ "./src/screens/HomeScreen.js":
/*!***********************************!*\
  !*** ./src/screens/HomeScreen.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _backend_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../backend/data.js */ \"../backend/data.js\");\n\r\n\r\n// create an object literal to render products dynamically\r\nconst HomeScreen = {\r\n    render: async () => {\r\n        // const { products } = data;\r\n        //define ajax request\r\n        const response = await fetch('http://localhost:5000/api/products')\r\n        if (!response || !response.ok) {\r\n            return `<div>Error in getting data</div>`\r\n        }\r\n        const products = await response.json();\r\n\r\n        return `\r\n        <ul class=\"products\">\r\n            ${products.map( product => `\r\n                <li>\r\n                    <div class=\"product\">\r\n                        <a href=\"/#/product/${product._id}\">\r\n                            <img src=\"${product.image}\" alt=\"${product.name}\" />\r\n                        </a>\r\n                        <div class=\"product-name\">\r\n                            <a href=\"/#/product/1\">\r\n                                ${product.name}\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"product-brand\">\r\n                            ${product.brand}\r\n                        </div>\r\n                        <div class=\"product-price\">\r\n                            $${product.price}\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                `).join('\\n')\r\n            }\r\n        `;\r\n    },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\n//# sourceURL=webpack://frontend/./src/screens/HomeScreen.js?");

/***/ }),

/***/ "./src/screens/ProductScreen.js":
/*!**************************************!*\
  !*** ./src/screens/ProductScreen.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProductScreen = {\r\n    render: () => {\r\n        return `<div>ProductScreen</div>`\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductScreen);\n\n//# sourceURL=webpack://frontend/./src/screens/ProductScreen.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseRequestUrl: () => (/* binding */ parseRequestUrl)\n/* harmony export */ });\n//create parseRe\r\nconst parseRequestUrl = () => {\r\n    const url = document.location.hash.toLowerCase();\r\n    const request = url.split(\"/\");\r\n    return {\r\n        resource: request[1],\r\n        id: request[2],\r\n        action: request[3],\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils.js?");

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