import {createProject, projectList, saveToLocalStorage} from './createProject'
import { findSelectedProject } from './createTasks';
import { pushTasksToContent, loadContent, hiddenIdValue } from './content';
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

function showHiddenForm() {
    
    const formDiv = document.querySelector('.editTaskDiv')
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

function editCancelTask() {
    const form = document.querySelector('#editTaskForm');
    const formDiv = document.querySelector('.editTaskDiv');

    const ulElement = document.querySelector('.taskList');
    const listItems = ulElement.querySelectorAll('li');
    let searchListItem = null;
    
    listItems.forEach((listItem) => {
        const idOfListItem = listItem.getAttribute('id');
        if (idOfListItem === hiddenIdValue) {
          searchListItem = listItem;
        }
      });
      searchListItem.classList.remove('hidden')

    formDiv.classList.add('hidden')


    form.reset()
    
}


// Important Button (star) when clicked

function importantButtonClick(importantButton, importantButtonTrue, currentProjectId) {
  let  index = currentProjectId
 let project = projectList[index].todos
// Finds Id of closest List item and with that the index to change important to true or false
 let closestListItem = importantButton.closest('li');
 let idValue = closestListItem.getAttribute('id')

 // For loop to look for real Id in case one task gets deleted its important
 let realIdValue;
 let realtask
 
for (let task of project) {
  
 if (task.id == idValue) {
   realtask = task
   realIdValue = task.id


 }
}



// After this line, project[realIdValue].important will be toggled (true if it was false, false if it was true)
realtask.important = !realtask.important;

if (realtask.important) {
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


function checkButtonClick(checkBoxDiv, currentProjectId) {
    let  index = currentProjectId
   let project = projectList[index].todos
  // Finds Id of closest List item and with that the index to change important to true or false
   let closestListItem = checkBoxDiv.closest('li');
   let idValue = closestListItem.getAttribute('id')
  
   // For loop to look for real Id in case one task gets deleted its important
   let realIdValue;
   let realtask
   
  for (let task of project) {
    
   if (task.id == idValue) {
     realtask = task
     realIdValue = task.id
  
  
   }
  }
  realtask.completed = !realtask.completed

   saveToLocalStorage()
  
  
  
  
  }


function deleteButtonClicked(deleteButton, currentProjectId) {
    let  index = currentProjectId
  
    let project = projectList[index].todos
    let projectName = projectList[index].name
   // Finds Id of closest List item and with that the index to change important to true or false
    let closestListItem = deleteButton.closest('li');
    let idValue = closestListItem.getAttribute('id')
   
    // For loop to look for real Id in case one task gets deleted its important
    let realIdValue;
    
   
   for (let task of project) {
     
    if (task.id == idValue) {
   
      realIdValue = task.id
   
    }
   }
   
   // Task to get removed
   let taskToRemove = project.find(item => item.id === realIdValue);

   if (taskToRemove) {
       // Remove the task from the project array
       console.log(taskToRemove)
       project = project.filter(item => item !== taskToRemove);
       projectList[index].todos = project
       // Save the updated project array to local storage
       saveToLocalStorage();
       loadContent(projectName)
   }
}

// Toggle hidden of task and moves Edit Form Task right under the selected class!
function moveTaskEditForm() {
    const editTaskDiv = document.querySelector('.editTaskDiv');
    const ulElement = document.querySelector('.taskList');
    const listItems = ulElement.querySelectorAll('li');
    let searchListItem = null;
  
    listItems.forEach((listItem) => {
      const idOfListItem = listItem.getAttribute('id');
      if (idOfListItem === hiddenIdValue) {
        searchListItem = listItem;
      }
    });
    searchListItem.classList.add('hidden')
    if (searchListItem) {
      searchListItem.insertAdjacentElement('afterend', editTaskDiv);
    }
  }
  
export {projectButtonClicked, formPopUp, cancelProject, cancelTask, importantButtonClick,deleteButtonClicked, showHiddenForm, editCancelTask,moveTaskEditForm,checkButtonClick}