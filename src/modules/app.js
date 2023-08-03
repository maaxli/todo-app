import Display from "./display";
import Todo from "./todoItem";
import Project from "./todoProject";

// Role: acts as the controller, handles event listeners, etc.
//      does _not_ interact with the DOM directly
//      does listen for events and handle/manipulate todo/project instances
class App {
    constructor() {
        this.Display = new Display();
    }
    

}

export default App;