/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




// Role: acts as the controller, handles event listeners, etc.
//      does _not_ alter the DOM directly
//      does listen for events and handle/manipulate todo/project instances
class App {
    projects = [];

    constructor() {
        this.display = new _display__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    initialize() {
        const newProjectButton = document.querySelector(".create-project");
        newProjectButton.addEventListener("click", () => {
            while (true) {
                const projectName = prompt("Enter project name");
                if (projectName.length > 1) {
                    const newProject = new _todoProject__WEBPACK_IMPORTED_MODULE_2__["default"](projectName);
                    this.projects.push(newProject);
                    this.display.createNewProject(newProject);
                    break;
                } else if (projectName) {
                    break;
                } else {
                    alert("Error: Project name must be at least 2 characters long.")
                }
            }
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Role: Interact with DOM, handle display

class Display {
    constructor() {
        console.log("display created");
    }

    createNewProject(project) {
        const projects = document.querySelector(".project-list");
        let newProject = document.createElement("li");
        newProject.textContent = project.title;
        projects.appendChild(newProject);
    }





}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        console.log("todo item created") // TODO interact with DOM

        /* Important note: 
         * The new todo item is only displayed when the user is "at" the correct place to view
         * the item, ie when the user is viewing the project that the todo item is inside
         * 
         * Otherwise, the user cannot see the item (duh). This seems to indicate that we don't
         * necessarily change the DOM here-- perhaps there is some other logic where, when the user
         * opens a project, (for example) the viewTodo() function is called and the user's screen is
         * populated with todo items that were previously created.
         * 
         * This idea applies to other classes as well.
         */
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
        console.log("new title set"); // TODO interact with DOM
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
        console.log("new description set"); // TODO interact with DOM
    }
    get dueDate() {
        this._dueDate = newDate;
    }
    set dueDate(newDate) {
        this._dueDate = newDate;
        console.log("new due date set"); // TODO interact with DOM
    }
    get priority() {
        return this._priority;
    }
    set priority(newPriority) {
        this._priority = newPriority;
        console.log("new priority set"); // TODO interact with DOM
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    todos = [];

    constructor(title) {
        this.title = title;
    }

    addTodo(item) {
        this.todos.push(item);
    }

    deleteTodo(item) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i] === item) {
                this.todos.splice(i, 1);
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const program = new _modules_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
program.initialize();
})();

/******/ })()
;