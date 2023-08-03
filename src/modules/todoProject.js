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

export default Project;