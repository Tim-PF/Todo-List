import { projectList } from "./createProject";

class Tasks {
    constructor(title,description,date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = false;
    }

}

// Gathers all Informations from Input Task Form and creates a new Task in process
function submitFormTask(event) {
   event.preventDefault();
   const titleTask = document.querySelector('#taskInput');
   const optionalDescription = document.querySelector('#taskOptionalInput');
   const taskDate = document.querySelector('#taskDate');

   const title = titleTask.value;
   const description = optionalDescription.value;
   const date = taskDate.value;
   
   createNewTask(title,description,date);
   
}

// Finds index of Selected Project and saves the created Task inside of the todos Array of called Project
function createNewTask(title,description,date) {
 const task = new Tasks(title, description, date);
 let index = findSelectedProject();
 projectList[index].todos.push(task)

}

//Finds Selected Project by looking for class= selected
function findSelectedProject() {
    const selectedProject = document.querySelector('.selected');
    return selectedProject.getAttribute('data-project')

}
export {submitFormTask}