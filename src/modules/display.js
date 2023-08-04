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
    
    createNewTask(Todo) {
        
    }

    displayProjectTasks(projectListItem, projectList) {
        projectList.forEach(project => project.classList.remove("selected"));
        projectListItem.classList.add("selected");
        console.log("project selection displayed");
        // Highlight selected project (in sidebar)
        // Populate list of tasks
        // Change project title display
    }
}

export default Display;