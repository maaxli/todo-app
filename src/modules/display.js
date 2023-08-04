import Folder from "../assets/folder.svg";

// Role: Interact with DOM, handle display

class Display {
    constructor() {
    }

    createNewProject(projectTitle) {
        const projects = document.querySelector(".project-list");
        let newProject = document.createElement("li");
        let folderIcon = new Image();
        folderIcon.src = Folder;
        newProject.appendChild(folderIcon);
        newProject.appendChild(document.createTextNode(" " + projectTitle));
        projects.appendChild(newProject);
        return newProject;
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

        console.log("done displaying tasks");
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

export default Display;