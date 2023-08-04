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

    displayProjectTasks(newProject, projectListItem, projectList) {
        projectList.forEach(project => project.classList.remove("selected"));
        projectListItem.classList.add("selected");

        // Remove all the currently displayed tasks and load the new ones
        const taskListParent = document.querySelector(".todo-list");
        while (taskListParent.childElementCount > 1) {
            taskListParent.removeChild(taskListParent.firstChild);
        }
        newProject.todos.forEach((task) => {
            this.displayTask(task, taskListParent);
        });

        // Change project title display
        const projectTitle = document.querySelector(".todo-container h1");
        projectTitle.textContent = newProject.title;

        console.log("done displaying tasks");
    }

    // Helper function, returns the task's element that was created
    displayTask(task, taskListParent) {
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

        const deleteDiv = document.createChild("div");
        deleteDiv.textContent = `Delete`;
        rightDiv.appendChild(deleteDiv);

        taskListParent.appendChild(taskElement);
        return taskElement;
    }
}

export default Display;