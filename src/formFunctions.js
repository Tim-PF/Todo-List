import {createProject, projectList, saveToLocalStorage} from './createProject'
import { findSelectedProject } from './createTasks';
function projectButtonClicked() {
const projectButton = document.querySelector('#addProject')

projectButton.addEventListener('click', () => {
    newProjectInput();
})
}

// removes hidden class of Form that creates name for new Project!
function newProjectInput() {
   const inputForm = document.querySelector('#projectForm')
   
   if (inputForm.classList.contains('hidden')) {
    inputForm.classList.remove('hidden')
   }
   inputForm.addEventListener('submit', submitForm)


}

// Gathers name information to name a Project 
function submitForm(event) {
    event.preventDefault();
    const fnameInput = document.querySelector('#fname');
    const fnameValue = fnameInput.value;
    const inputForm = document.querySelector('#projectForm');
    inputForm.classList.add('hidden')

    createProject(fnameValue)
    projectForm.reset();
    
}


// removes hidden class to show form
function formPopUp() {
   const formDiv = document.querySelector('.formDiv')
    formDiv.classList.remove('hidden')
}


// Cancel Button for Project Form
function cancelProject() {
    const form = document.querySelector('#projectForm');
    form.reset()
    form.classList.add('hidden')

}

//Cancel Button for Input Form
function cancelTask() {
    const form = document.querySelector('#taskForm');
    const formDiv = document.querySelector('.formDiv')
    formDiv.classList.add('hidden')
    form.reset()
    
}



// Important Button (star) when clicked

function importantButtonClick(importantButton, importantButtonTrue) {
  let  index = findSelectedProject(importantButton)
 let project = projectList[index].todos
// Finds Id of closest List item and with that the index to change important to true or false
 let closestListItem = importantButton.closest('li');
 let idValue = closestListItem.getAttribute('id')

// After this line, project[idValue].important will be toggled (true if it was false, false if it was true)
project[idValue].important = !project[idValue].important;

if (project[idValue].important) {
    // Add the "important" class
    importantButton.classList.add('hideList');
    importantButtonTrue.classList.remove('hideList'); 
} else {
    // Remove the "important" class
    importantButton.classList.remove('hideList');
    importantButtonTrue.classList.add('hideList'); 
}
 saveToLocalStorage()




}


export {projectButtonClicked, formPopUp, cancelProject, cancelTask, importantButtonClick}