import Display from "./display";
import Todo from "./todoItem";
import Project from "./todoProject";

// Role: acts as the controller, handles event listeners, etc.
//      does _not_ alter the DOM directly
//      does listen for events and handle/manipulate todo/project instances
class App {
    projects = [];

    constructor() {
        this.display = new Display();
    }

    initialize() {
        const newProjectButton = document.querySelector(".create-project");
        newProjectButton.addEventListener("click", () => {
            while (true) {
                const projectName = prompt("Enter project name");
                if (projectName.length > 1) {
                    const newProject = new Project(projectName);
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

export default App;