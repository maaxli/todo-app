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

export default Todo;