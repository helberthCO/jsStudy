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

/***/ "./src/js/components/guessNumberGame/guessNumberGame.js":
/*!**************************************************************!*\
  !*** ./src/js/components/guessNumberGame/guessNumberGame.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./querySelectors */ \"./src/js/components/guessNumberGame/querySelectors.js\");\n/* harmony import */ var _stringConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringConstants */ \"./src/js/components/guessNumberGame/stringConstants.js\");\n\n\n\n\nvar winnerNumber = Math.floor(Math.random() * 20) + 1;\nvar scoreNumber = 20;\nvar highScoreNumber = Number(_querySelectors__WEBPACK_IMPORTED_MODULE_0__.highScoreNode.innerText);\n\nvar checkGuessedNumber = function checkGuessedNumber() {\n  var guessedNumber = Number(_querySelectors__WEBPACK_IMPORTED_MODULE_0__.guessInputNode.value);\n\n  switch (true) {\n    case !guessedNumber:\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.messageNode.textContent = _stringConstants__WEBPACK_IMPORTED_MODULE_1__.noNumberString;\n      break;\n\n    case guessedNumber > winnerNumber:\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.messageNode.textContent = _stringConstants__WEBPACK_IMPORTED_MODULE_1__.tooHighString;\n      scoreNumber--;\n      break;\n\n    case guessedNumber < winnerNumber:\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.messageNode.textContent = _stringConstants__WEBPACK_IMPORTED_MODULE_1__.tooLowString;\n      scoreNumber--;\n      break;\n\n    case guessedNumber === winnerNumber:\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.messageNode.textContent = _stringConstants__WEBPACK_IMPORTED_MODULE_1__.correctString;\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.secretNumberNode.textContent = winnerNumber;\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.appWrapperNode.style.backgroundColor = 'MediumSeaGreen';\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.secretNumberNode.style.width = '30rem';\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.checkBtnNode.disabled = true;\n      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.highScoreNode.textContent = scoreNumber > highScoreNumber ? scoreNumber : highScoreNumber;\n      highScoreNumber = scoreNumber;\n      break;\n  }\n\n  scoreNumber > 0 ? _querySelectors__WEBPACK_IMPORTED_MODULE_0__.scoreNode.textContent = scoreNumber : (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.messageNode.textContent = _stringConstants__WEBPACK_IMPORTED_MODULE_1__.youLostString, _querySelectors__WEBPACK_IMPORTED_MODULE_0__.scoreNode.textContent = 0);\n};\n\nvar resetGame = function resetGame() {\n  scoreNumber = 20;\n  winnerNumber = Math.floor(Math.random() * 20) + 1;\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.guessInputNode.value = '';\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.scoreNode.textContent = scoreNumber;\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.messageNode.textContent = _stringConstants__WEBPACK_IMPORTED_MODULE_1__.initialString;\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.secretNumberNode.textContent = '?';\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.secretNumberNode.style.width = '15rem';\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.appWrapperNode.style.backgroundColor = '#222';\n  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.checkBtnNode.disabled = false;\n};\n\n_querySelectors__WEBPACK_IMPORTED_MODULE_0__.checkBtnNode.addEventListener('click', checkGuessedNumber);\n_querySelectors__WEBPACK_IMPORTED_MODULE_0__.againBtnNode.addEventListener('click', resetGame);\n\n//# sourceURL=webpack://devstudy/./src/js/components/guessNumberGame/guessNumberGame.js?");

/***/ }),

/***/ "./src/js/components/guessNumberGame/querySelectors.js":
/*!*************************************************************!*\
  !*** ./src/js/components/guessNumberGame/querySelectors.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"againBtnNode\": () => (/* binding */ againBtnNode),\n/* harmony export */   \"appWrapperNode\": () => (/* binding */ appWrapperNode),\n/* harmony export */   \"checkBtnNode\": () => (/* binding */ checkBtnNode),\n/* harmony export */   \"guessInputNode\": () => (/* binding */ guessInputNode),\n/* harmony export */   \"highScoreNode\": () => (/* binding */ highScoreNode),\n/* harmony export */   \"messageNode\": () => (/* binding */ messageNode),\n/* harmony export */   \"scoreNode\": () => (/* binding */ scoreNode),\n/* harmony export */   \"secretNumberNode\": () => (/* binding */ secretNumberNode)\n/* harmony export */ });\nvar secretNumberNode = document.querySelector('.number');\nvar guessInputNode = document.querySelector('.guess');\nvar checkBtnNode = document.querySelector('.check');\nvar againBtnNode = document.querySelector('.again');\nvar messageNode = document.querySelector('.message');\nvar scoreNode = document.querySelector('.score');\nvar appWrapperNode = document.querySelector('.app__wrapper');\nvar highScoreNode = document.querySelector('.highscore');\n\n\n//# sourceURL=webpack://devstudy/./src/js/components/guessNumberGame/querySelectors.js?");

/***/ }),

/***/ "./src/js/components/guessNumberGame/stringConstants.js":
/*!**************************************************************!*\
  !*** ./src/js/components/guessNumberGame/stringConstants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"correctString\": () => (/* binding */ correctString),\n/* harmony export */   \"initialString\": () => (/* binding */ initialString),\n/* harmony export */   \"noNumberString\": () => (/* binding */ noNumberString),\n/* harmony export */   \"tooHighString\": () => (/* binding */ tooHighString),\n/* harmony export */   \"tooLowString\": () => (/* binding */ tooLowString),\n/* harmony export */   \"youLostString\": () => (/* binding */ youLostString)\n/* harmony export */ });\nvar initialString = 'Start guessing...';\nvar noNumberString = 'No Number!';\nvar correctString = 'Correct Number!';\nvar tooHighString = 'Too High!';\nvar tooLowString = 'Too Low!';\nvar youLostString = 'Ops, You Lost!';\n\n\n//# sourceURL=webpack://devstudy/./src/js/components/guessNumberGame/stringConstants.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_guessNumberGame_guessNumberGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/guessNumberGame/guessNumberGame */ \"./src/js/components/guessNumberGame/guessNumberGame.js\");\n // const valeAnguloMail = 'valeria.angulo@pluriza.com';\n// const helberth = {\n//   firstName: 'Helberth',\n//   lastName: 'Caro',\n//   birthDate: '1991-02-22',\n//   job: 'Frontend Engineer',\n//   friends: ['Juan Camilo', 'Juan David', 'Juan Felipe'],\n//   hasDriveLicense: true,\n//   currentAge: function () {\n//     const daysInMonth = 30.436875;\n//     const birthDate = new Date(`${this.birthDate}T12:00:00Z`);\n//     const currentDate = new Date();\n//     const birthDateYear = birthDate.getFullYear();\n//     const currentDateYear = currentDate.getFullYear();\n//     let yearsOld = currentDateYear - birthDateYear;\n//     birthDate.setFullYear(currentDateYear);\n//     const currentDateMS = currentDate.getTime();\n//     let birthDateMS = birthDate.getTime();\n//     if (currentDateMS < birthDateMS) {\n//       --yearsOld;\n//       birthDate.setFullYear(currentDateYear - 1);\n//       birthDateMS = birthDate.getTime();\n//     }\n//     let daysOld = (currentDateMS - birthDateMS) / 86400000;\n//     const monthsMath = daysOld / daysInMonth;\n//     const monthsOld = Math.floor(monthsMath);\n//     daysOld = Math.floor(daysInMonth * (monthsMath - monthsOld));\n//     const fullAge = `${yearsOld} years, ${monthsOld} months and ${daysOld} days`;\n//     return fullAge;\n//   },\n// };\n\n//# sourceURL=webpack://devstudy/./src/js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;