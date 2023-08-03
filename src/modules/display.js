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

export default Display;