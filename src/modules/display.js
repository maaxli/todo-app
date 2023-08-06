import Folder from "../assets/folder.svg";
import Trash from "../assets/trash.svg";
import Pencil from "../assets/pencil.png";

// Role: Interact with DOM, handle display

class Display {
    constructor() {
    }


    /* PROJECT-RELATED FUNCTIONS */
    createNewProject(projectTitle) {
        const projects = document.querySelector(".project-list");
        const projectElement = document.createElement("li");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("project-left");
        projectElement.appendChild(leftDiv);

        const folderIcon = new Image();
        folderIcon.src = Folder;
        folderIcon.alt = "SVG folder";
        leftDiv.appendChild(folderIcon);

        const nameDiv = document.createElement("div");
        nameDiv.textContent = projectTitle;
        leftDiv.appendChild(nameDiv);

        const xDiv = document.createElement("div");
        xDiv.classList.add("delete-project");
        xDiv.classList.add("clickable");
        xDiv.textContent = "✕";
        projectElement.appendChild(xDiv);

        projects.appendChild(projectElement);
        return projectElement;
    }

    deleteProject(projectElement) {
        projectElement.remove();
    }

    displayProjectTasks(newProject, projectElement, projectNodeList) {
        projectNodeList.forEach(project => project.classList.remove("selected"));
        projectElement.classList.add("selected");

        // Remove all the currently displayed tasks and load the new ones
        const taskList = document.querySelector(".todo-list");
        while (taskList.childElementCount > 1) {
            taskList.removeChild(taskList.firstChild);
        }

        const taskElements = [];
        newProject.todos.forEach((task) => {
            taskElements.push(this.displayTask(task, taskList));
        });

        // Change project title display
        const projectTitle = document.querySelector(".todo-container h1");
        projectTitle.textContent = newProject.title;
        return taskElements;
    }


    /* TASK RELATED FUNCTIONS */
    clearTasks() {
        const taskTitle = document.querySelector(".todo-container h1");
        taskTitle.textContent = "";

        const todoListElement = document.querySelector(".todo-list");
        while (todoListElement.children.length > 1) {
            todoListElement.removeChild(todoListElement.firstChild);
        }

    }

    createNewTask(newTask) {
        const taskList = document.querySelector(".todo-list");
        return this.displayTask(newTask, taskList);
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

        const pencilIcon = new Image();
        pencilIcon.src = Pencil;
        pencilIcon.classList.add("clickable");
        pencilIcon.alt = "PNG pencil"
        rightDiv.appendChild(pencilIcon);

        const trashIcon = new Image();
        trashIcon.src = Trash;
        trashIcon.classList.add("clickable");
        trashIcon.alt = "SVG trash";
        rightDiv.appendChild(trashIcon);

        const createTodoButton = taskList.lastElementChild;
        taskList.insertBefore(taskElement, createTodoButton);
        return taskElement;
    }

    deleteTask(taskElement) {
        taskElement.remove();
    }
}

export default Display;