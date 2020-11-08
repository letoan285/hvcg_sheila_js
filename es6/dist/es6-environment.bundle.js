/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
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
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./src/products/index.js\");\n// console.log('hello')\r\n// import discountProduct, { product1, product3,product2,product4 } from './products';\r\n// // const product = \"This is product\";\r\n// console.log(product1, product2);\r\n// import category from './categories';\r\n// console.log('xxx', category);\r\n// console.log('discountProduct', discountProduct);\r\n;\r\nconsole.log(_products__WEBPACK_IMPORTED_MODULE_0__.productList, _products__WEBPACK_IMPORTED_MODULE_0__.productDetail);\r\ndocument.getElementById('root').innerHTML = 'product1';\r\n\r\n\r\n// export name vs export default\n\n//# sourceURL=webpack://es6/./src/index.js?");

/***/ }),

/***/ "./src/products/index.js":
/*!*******************************!*\
  !*** ./src/products/index.js ***!
  \*******************************/
/*! namespace exports */
/*! export productDetail [provided] [no usage info] [missing usage info prevents renaming] -> ./src/products/productDetail.js .productDetail */
/*! export productList [provided] [no usage info] [missing usage info prevents renaming] -> ./src/products/productList.js .productList */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productDetail\": () => /* reexport safe */ _productDetail__WEBPACK_IMPORTED_MODULE_0__.productDetail,\n/* harmony export */   \"productList\": () => /* reexport safe */ _productList__WEBPACK_IMPORTED_MODULE_1__.productList\n/* harmony export */ });\n/* harmony import */ var _productDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productDetail */ \"./src/products/productDetail.js\");\n/* harmony import */ var _productList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productList */ \"./src/products/productList.js\");\n\r\n\n\n//# sourceURL=webpack://es6/./src/products/index.js?");

/***/ }),

/***/ "./src/products/productDetail.js":
/*!***************************************!*\
  !*** ./src/products/productDetail.js ***!
  \***************************************/
/*! namespace exports */
/*! export productDetail [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productDetail\": () => /* binding */ productDetail\n/* harmony export */ });\nconst productDetail = {\r\n    id: 1, productName: 'first Products', price: 4000\r\n}\n\n//# sourceURL=webpack://es6/./src/products/productDetail.js?");

/***/ }),

/***/ "./src/products/productList.js":
/*!*************************************!*\
  !*** ./src/products/productList.js ***!
  \*************************************/
/*! namespace exports */
/*! export productList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productList\": () => /* binding */ productList\n/* harmony export */ });\nconst productList = [\r\n    { id: 1, productName: 'first Products', price: 4000 },\r\n    { id: 2, productName: 'second Products', price: 4000 },\r\n    { id: 3, productName: 'third Products', price: 4000 }\r\n]\n\n//# sourceURL=webpack://es6/./src/products/productList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;