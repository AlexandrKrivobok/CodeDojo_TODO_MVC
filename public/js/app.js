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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Controller {\r\n    constructor(model, view) {\r\n        this.model = model;\r\n        this.view = view;\r\n\r\n        view.on('add', this.addTodo.bind(this));\r\n        view.on('toggle', this.toggleTodo.bind(this));\r\n        view.on('edit', this.editTodo.bind(this));\r\n        view.on('remove', this.removeTodo.bind(this));\r\n    }\r\n\r\n    addTodo(title) {\r\n        const todo = this.model.addItem({\r\n            id: Date.now(),\r\n            title, // === title: title,\r\n            completed: false\r\n        });\r\n\r\n        this.view.addItem(todo);\r\n    }\r\n\r\n    toggleTodo({ id, completed }) {\r\n        const todo = this.model.updateItem(id, { completed });\r\n\r\n        this.view.toggleItem(todo);\r\n    }\r\n\r\n    editTodo({ id, title }) {\r\n        const todo = this.model.updateItem(id, { title });\r\n\r\n        this.view.editItem(todo);\r\n    }\r\n\r\n    removeTodo(id) {\r\n        this.model.removeItem(id);\r\n        this.view.removeItem(id);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n//# sourceURL=webpack://todojs-oop/./src/controller.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventEmitter\": () => (/* binding */ EventEmitter),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(tag, props, ...children) {\r\n    const element = document.createElement(tag);\r\n\r\n    Object.keys(props).forEach(key => element[key] = props[key]);\r\n    \r\n    children.forEach(child => {\r\n        if (typeof child === 'string') {\r\n            child = document.createTextNode(child);\r\n        } \r\n            \r\n        element.appendChild(child);\r\n    });\r\n\r\n    return element;\r\n}\r\n\r\nclass EventEmitter {\r\n    constructr() {\r\n        this.events = {\r\n            //'add': [], // callbacks array for add event\r\n            //'edit': [] // callbacks array for edit event\r\n        };\r\n    }\r\n\r\n    // subcribe on event\r\n    on(type, callback) {\r\n        this.events[type] = this.events[type] || [];\r\n        this.events[type].push(callback);\r\n    }\r\n\r\n    // make all callbacks work\r\n    emit(type, arg) {\r\n        if (this.events[type]) {\r\n            this.events[type].forEach(callback => callback(arg));\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todojs-oop/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\r\n\r\n\r\n\r\nconst model = new _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst view = new _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"](model, view);\n\n//# sourceURL=webpack://todojs-oop/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Model {\r\n    constructor(state = []) {\r\n        this.state = state\r\n    }\r\n\r\n    getItem(id) {\r\n        return this.state.find(item => item.id == id);\r\n    }\r\n\r\n    addItem(item) {\r\n        this.state.push(item);\r\n\r\n        return item;\r\n    }\r\n\r\n    updateItem(id, data) {\r\n        const item = this.getItem(id);\r\n\r\n        Object.keys(data).forEach(prop => item[prop] = data[prop]);\r\n\r\n        return item;\r\n    }\r\n\r\n    removeItem(id) {\r\n        const index = this.state.findIndex(item => item.id == id);\r\n\r\n        if (index > -1) {\r\n            this.state.splice(index, 1);\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);\n\n//# sourceURL=webpack://todojs-oop/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\nclass View extends _helpers__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {\r\n    constructor() {\r\n        super();\r\n        \r\n        this.form = document.getElementById('todo-form');\r\n        this.input = document.getElementById('add-input');\r\n        this.list = document.getElementById('add-list');\r\n\r\n        this.form.addEventListener('submit', this.handleAdd.bind(this));\r\n    }\r\n\r\n    createElement(todo) {\r\n        const checkbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', { type: checkbox, className: 'checkbox', checked: todo.completed ? 'checked' : '' });\r\n        const label = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', { className: 'title' }, todo.title);\r\n        const editInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', { type: text, className: 'textfield' });\r\n        const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', { className: 'edit'}, 'Change');\r\n        const removeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', { className: 'remove'}, 'Delete');\r\n        const item = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', { className: `todo-item${todo.completed ? 'completed' : ''}`, 'data-id': todo.id }, checkbox, label, editInput, editButton, removeButton );\r\n\r\n        return this.addEventListeners(item);\r\n    }\r\n\r\n    addEventListeners(listItem) {\r\n        const checkbox = listItem.querySelector('.checkbox');\r\n        const editButton = listItem.querySelector('button.edit');\r\n        const removeButton = listItem.querySelector('button.remove');\r\n\r\n        checkbox.addEventListeners('change', this.handleToggle.bind(this));\r\n        editButton.addEventListeners('click', this.handleEdit.bind(this));\r\n        removeButton.addEventListeners('click', this.handleRemove.bind(this));\r\n\r\n        return listItem;\r\n    }\r\n\r\n    handleAdd(event) {\r\n        event.preventDefault();\r\n\r\n        if (!this.input.value) return alert('Task name required!');\r\n\r\n        const value = this.input.value;\r\n\r\n        this.emit('add', value);\r\n    }\r\n\r\n    handleToggle({ target }) {\r\n        const listItem = target.parentNode;\r\n        const id = listItem.getAttribute('data-id');\r\n        const completed = target.completed;\r\n\r\n        this.emit('toggle', { id, completed });\r\n    }\r\n\r\n    handleEdit({ target }) {\r\n        const listItem = target.parentNode;\r\n        const id = listItem.getAttribute('data-id');\r\n        const label = listItem.querySelector('.title');\r\n        const input = listItem.querySelector('.textfield');\r\n        const editButton = listItem.querySelector('button.edit');\r\n        const title = input.value;\r\n        const isEditing = listItem.classList.contains('editing');\r\n\r\n        if (isEditing) {\r\n            this.emit('edit', { id, title });\r\n        } else {\r\n            input.value = label.textContent;\r\n            editButton.textContent = 'Save';\r\n            listItem.classList.add('editing');\r\n        }\r\n    }\r\n\r\n    handleRemove({ target }) {\r\n        const listItem = target.parentNode;\r\n        const id = listItem.getAttribute('data-id');\r\n\r\n        this.emit('remove', id );\r\n    }\r\n\r\n    findListItem(id) {\r\n        return this.list.querySelector(`[data-id=\"${id}\"]`);\r\n    }\r\n\r\n    // add a li-item to the todo list\r\n    addItem(todo) {\r\n        const listItem = this.createElement(todo);\r\n\r\n        this.input.value = '';\r\n        this.list.appendChild(listItem);\r\n    }\r\n\r\n    // change li-item state to completed\r\n    toggleItem(todo) {\r\n        const listItem = this.findListItem(todo.id);\r\n        const checkbox = listItem.querySelector('.checkbox');\r\n\r\n        checkbox.checked = todo.completed;\r\n\r\n        if (todo.completed) {\r\n            listItem.classList.add('completed');\r\n        } else {\r\n            listItem.classList.remove('completed');\r\n        }\r\n    }\r\n\r\n    // change title for the li-item\r\n    editItem(todo) {\r\n        const listItem = this.findListItem(todo.id);\r\n        const label = listItem.querySelector('.title');\r\n        const input = listItem.querySelector('.textfield');\r\n        const editButton = listItem.querySelector('button.edit');\r\n\r\n        label.textContent = todo.title;\r\n        editButton.textContent = 'Change';\r\n        listItem.classList.remove('editing');\r\n    }\r\n\r\n    // remove li-item from the todo list\r\n    removeItem(id) {\r\n        const listItem = this.findListItem(todo.id);\r\n\r\n        this.list.removeChild(listItem);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n//# sourceURL=webpack://todojs-oop/./src/view.js?");

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