import Display from "./display";
import Todo from "./todoItem";
import Project from "./todoProject";

class App {
    projects = []; // All projects that are currently present
    currProject; // The currently-selected project

    constructor() {
        this.display = new Display();
    }

    // Adding event listeners to all buttons
    initialize() {

        // TODO: ONCE PROJECT IS ENTIRELY DONE, DYNAMICALLY LOAD THE DUMMY TASKS/PROJECTS
        //       AT THE BEGINNING OF INITIALIZATION (HERE) !!!

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
                    const projectListItem = this.display.createNewProject(projectName);
                    projectListItem.addEventListener("click", () => {
                        this.currProject = newProject;
                        let projectList = document.querySelectorAll(".project-list li");
                        this.display.displayProjectTasks(projectListItem, projectList);
                    });
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
                taskPriority = prompt("Enter task priority (low/medium/high)");
                if (taskPriority === null) {
                    return;
                } else if (taskPriority == "low" || taskPriority == "medium" || taskPriority == "high") {
                    // All fields are valid, so create a new task and add it to the current project
                    const newTask = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
                    this.currProject.todos.push(newTask);

                    // Display the project (TODO may have to add many more event listeners...)
                    this.display.createNewTask(newTask);
                    return;
                }
                alert("Error: Enter valid task priority.");
            }
        });
    }
}

export default App;