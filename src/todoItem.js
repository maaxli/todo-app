import format from '../node_modules/date-fns/format';

class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        console.log("todo item created") // TODO interact with DOM

        /* Important note: 
         * The new todo item is only displayed when the user is "at" the correct place to view
         * the item, ie when the user is viewing the project that the todo item is inside
         * 
         * Otherwise, the user cannot see the item (duh). This seems to indicate that we don't
         * necessarily change the DOM here-- perhaps there is some other logic where, when the user
         * opens a project, (for example) the viewTodo() function is called and the user's screen is
         * populated with todo items that were previously created.
         * 
         * This idea applies to other classes as well.
         */
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
        this._dueDate = newDate;
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