import Display from "./display";
import Todo from "./todoItem";
import Project from "./todoProject";

class App {
    projects = []; // All projects that are currently present
    currProject; // The currently-selected project

    constructor() {
        this.display = new Display();

        // Loading sample tasks/projects
        const project1 = new Project("Pre-Penn Tasks");
        this.currProject = project1;
        project1.todos.push(new Todo("Thrive at Penn | Canvas", "", "8/18/2023", "Medium"));
        project1.todos.push(new Todo("Buy Dorm Items", "", "8/18/2023", "High"));
        project1.todos.push(new Todo("Pack Items", "", "8/21/2023", "Low"));
        const sampleElement1 = this.display.createNewProject(project1.title);
        this.addProjectListeners(sampleElement1, project1);
        
        const project2 = new Project("The Odin Project");
        project2.todos.push(new Todo("Finish Todo List Project", "", "N/A", "High"));
        project2.todos.push(new Todo("Finish JavaScript Course", "skim CS section", "N/A", "Medium"));
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
                    const newProject = new Project(projectName);
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
                    const newTask = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
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
            console.log(`${newProject.title} displayed`);
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

        const deleteButton = projectElement.lastElementChild;
        deleteButton.addEventListener("click", (event) => {
            const decision = prompt("Click \"OK\" to delete project: " + newProject.title + "\n(text input irrelevant)");
            if (decision === null) return;
            for (let i = 0; i < this.projects.length; i++) {
                if (this.projects[i] === newProject) this.projects.splice(i, 1);
            }
            this.display.deleteProject(projectElement);
            if (this.currProject === newProject) {
                this.currProject = undefined;
                this.display.clearTasks();
            }
            event.stopPropagation();
            console.log("project deleted");
        });
    }
}

export default App;