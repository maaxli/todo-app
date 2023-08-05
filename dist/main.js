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
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




class App {
    projects = []; // All projects that are currently present
    currProject; // The currently-selected project

    constructor() {
        this.display = new _display__WEBPACK_IMPORTED_MODULE_0__["default"]();

        // Loading sample tasks/projects
        const project1 = new _todoProject__WEBPACK_IMPORTED_MODULE_2__["default"]("Pre-Penn Tasks");
        this.currProject = project1;
        project1.todos.push(new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Thrive at Penn | Canvas", "", "8/18/2023", "Medium"));
        project1.todos.push(new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Buy Dorm Items", "", "8/18/2023", "High"));
        project1.todos.push(new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Pack Items", "", "8/21/2023", "Low"));
        const sampleElement1 = this.display.createNewProject(project1.title);
        this.addProjectListeners(sampleElement1, project1);
        
        const project2 = new _todoProject__WEBPACK_IMPORTED_MODULE_2__["default"]("The Odin Project");
        project2.todos.push(new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Finish Todo List Project", "", "N/A", "High"));
        project2.todos.push(new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Finish JavaScript Course", "skim CS section", "N/A", "Medium"));
        const sampleElement2 = this.display.createNewProject(project2.title);
        this.addProjectListeners(sampleElement2, project2);

        const projectList = document.querySelectorAll(".project-list li");
        this.display.displayProjectTasks(project1, sampleElement1, projectList);
    }

    // Adding event listeners to all buttons
    initialize() {

        // Listening to the `+ New Project` button
        const newProjectButton = document.querySelector(".create-project");
        newProjectButton.addEventListener("click", () => {
            let projectName = "";
            // Prompting the user until a valid name is entered, or the user clicks "cancel"
            while (projectName.length < 2) {
                projectName = prompt("Enter project name");
                if (projectName === null) {
                    return;
                } else if (projectName.length > 1) {
                    // Project name is valid, so create a new project and add it to our array
                    const newProject = new _todoProject__WEBPACK_IMPORTED_MODULE_2__["default"](projectName);
                    this.projects.push(newProject);

                    // Display the project, AND return the new list item so we can add a listener
                    const projectElement = this.display.createNewProject(projectName);
                    this.addProjectListeners(projectElement, newProject);
                    return;
                }
                alert("Error: Project name must be at least 2 characters long.");
            }
        });

        // Listening to the `+ New Task` button
        const newTaskButton = document.querySelector(".create-todo");
        newTaskButton.addEventListener("click", () => {
            // Asks the client for the task's title, description, due date, and priority
            if (this.currProject === undefined) {
                alert("Please select a project to create a task, or create a project if none yet exist!");
                return;
            }
            let taskTitle = "";
            while (taskTitle.length < 2) {
                taskTitle = prompt("Enter task name");
                if (taskTitle === null) {
                    return;
                } else if (taskTitle.length > 1) {
                    break;
                }
                alert("Error: Task name must be at least 2 characters long.");
            }
            let taskDescription = prompt("Enter task description");
            if (taskDescription === null) return;
            let taskDueDate = prompt("Enter task due date");
            if (taskDueDate === null) return;
            let taskPriority = "";
            while (true) {
                taskPriority = prompt("Enter task priority (\"Low\"/\"Medium\"/\"High\")");
                if (taskPriority === null) {
                    return;
                } else if (taskPriority == "Low" || taskPriority == "Medium" || taskPriority == "High") {
                    // All fields are valid, so create a new task and add it to the current project
                    const newTask = new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitle, taskDescription, taskDueDate, taskPriority);
                    this.currProject.todos.push(newTask);
                    this.display.createNewTask(newTask);
                    return;
                }
                alert("Error: Enter valid task priority.");
            }
        });
    }

    // Helper method: Add event listeners to projects
    addProjectListeners(projectElement, newProject) {
        projectElement.addEventListener("click", () => {
            this.currProject = newProject;
            let projectList = document.querySelectorAll(".project-list li");
            this.display.displayProjectTasks(newProject, projectElement, projectList);
        });
        projectElement.addEventListener("mouseenter", () => {
            projectElement.classList.add("project-mouseover");
        });
        projectElement.addEventListener("mouseleave", () => {
            projectElement.classList.remove("project-mouseover");
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
/* harmony import */ var _assets_folder_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


// Role: Interact with DOM, handle display

class Display {
    constructor() {
    }

    createNewProject(projectTitle) {
        const projects = document.querySelector(".project-list");
        let projectElement = document.createElement("li");
        let folderIcon = new Image();
        folderIcon.src = _assets_folder_svg__WEBPACK_IMPORTED_MODULE_0__;
        projectElement.appendChild(folderIcon);
        projectElement.appendChild(document.createTextNode(" " + projectTitle));
        projects.appendChild(projectElement);
        return projectElement;
    }

    displayProjectTasks(newProject, projectElement, projectNodeList) {
        projectNodeList.forEach(project => project.classList.remove("selected"));
        projectElement.classList.add("selected");

        // Remove all the currently displayed tasks and load the new ones
        const taskList = document.querySelector(".todo-list");
        while (taskList.childElementCount > 1) {
            taskList.removeChild(taskList.firstChild);
        }
        newProject.todos.forEach((task) => {
            this.displayTask(task, taskList);
        });

        // Change project title display
        const projectTitle = document.querySelector(".todo-container h1");
        projectTitle.textContent = newProject.title;
    }

    createNewTask(newTask) {
        const taskList = document.querySelector(".todo-list");
        this.displayTask(newTask, taskList);
    }

    // Helper function, returns the task's element that was created
    displayTask(task, taskList) {
        const taskElement = document.createElement("li");
        taskElement.classList.add("todo-item");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("left-items");
        taskElement.appendChild(leftDiv);

        const topDiv = document.createElement("div");
        topDiv.classList.add("top");
        topDiv.textContent = task.title;
        leftDiv.appendChild(topDiv);

        const bottomDiv = document.createElement("div");
        bottomDiv.classList.add("bottom");
        leftDiv.appendChild(bottomDiv);

        const dueDateDiv = document.createElement("div");
        dueDateDiv.textContent = `Due: ${task.dueDate}`;
        bottomDiv.appendChild(dueDateDiv);

        const priorityDiv = document.createElement("div");
        priorityDiv.textContent = `Priority: ${task.priority}`;
        bottomDiv.appendChild(priorityDiv);

        const rightDiv = document.createElement("div");
        rightDiv.classList.add("right-items");
        taskElement.appendChild(rightDiv);

        const editDiv = document.createElement("div");
        editDiv.textContent = `Edit`;
        rightDiv.appendChild(editDiv);

        const deleteDiv = document.createElement("div");
        deleteDiv.textContent = `Delete`;
        rightDiv.appendChild(deleteDiv);

        const createTodoButton = document.querySelector(".final");
        taskList.insertBefore(taskElement, createTodoButton);
        return taskElement;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfba46690d019c379d15.svg";

/***/ }),
/* 4 */
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
        return this._dueDate;
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
/* 5 */
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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