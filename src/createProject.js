import {loadContent} from './content'
import { findSelectedProject } from './createTasks';

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}
// Array of all Projects
const projectList = [];
// Creates a new Project to store tasks in and prints them to sidebar
 function createProject(prName) {
    
  let projectName = new Project(prName) ;
  projectList.push(projectName);
  printForm()
}

//Prints all Projects inside projectlist to the sidebar
function printForm() {
   let projectData = 0;

   const sidebarProjects = document.querySelector('.Projects');

   
   deleteCurrentProjects(sidebarProjects)
   

    for (const project of projectList) {
    

       let  projectDiv = document.createElement('div')

       // Need to insert before the formDiv
       const formDiv = document.querySelector('#projectForm')

       
       
       projectDiv.textContent = project.name;
       let projectName = projectDiv.textContent
       projectDiv.classList.add('project-item')
       projectDiv.setAttribute('data-project', projectData);

       
       selectProject(projectDiv);
       projectDiv.addEventListener('click', () => {selectProject(projectDiv),
        loadContent(projectName)
       })
       
        
       // Edit And Delete Div
       const buttonDiv= document.createElement('div')
       buttonDiv.classList.add('formActionButtons')

       //Edit Button
       const editDiv = document.createElement('div');
       editDiv.classList.add('editDiv')

       // Edit Form (reset input directly)
       const editForm = document.querySelector('#editForm')
       const cancelButton = document.querySelector('.projectEditCancelButton')
       cancelButton.addEventListener('click', () => {
        removeHidden()
        editForm.classList.add('hidden')
       })


       // Event listener for Edit Button
       editDiv.addEventListener('click', (event) => {
        event.stopPropagation();
        moveEditForm(editDiv)
        removeHidden();
        editForm.reset();
        openEditForm(editDiv);
        
        
       })

    

       const editIconSpan = document.createElement('span');
       editIconSpan.classList.add('material-icons-round');
       editIconSpan.textContent = 'edit';
       editDiv.appendChild(editIconSpan)
       buttonDiv.appendChild(editDiv)

       

       //Delete Button
       const deleteDiv = document.createElement('div')
       deleteDiv.classList.add('deleteDiv');
       deleteDiv.addEventListener('click', (event) => {event.stopPropagation();
        deleteProject(deleteDiv)
       })

       const deleteIconSpan = document.createElement('span');
       deleteIconSpan.classList.add('material-icons-round');
       deleteIconSpan.textContent = 'delete';
       deleteDiv.appendChild(deleteIconSpan);
       buttonDiv.appendChild(deleteDiv)


       // Append Buttons to projectDiv
       projectDiv.appendChild(buttonDiv)
            

     
       sidebarProjects.insertBefore(projectDiv, formDiv);


       projectData++;

    }
}

// Gives clicked Project the selected class for better Identification
function selectProject(currentProject) {
    
    let projectDivs = document.querySelectorAll('.project-item')
    projectDivs.forEach(project => {
        
       if (project.classList.contains('selected')) {
        
        project.classList.remove('selected')
       }
     currentProject.classList.add('selected')
    
    })
    

}
//Prevents Divs from getting printed more than one time 
function deleteCurrentProjects(sidebarProjects) {
    const existingProjectItems = sidebarProjects.querySelectorAll('.project-item');
    existingProjectItems.forEach(item => item.remove());
}

//Deletes Projects 
function deleteProject(deleteDiv) {
const projectItem = deleteDiv.closest('.project-item');
selectProject(projectItem);
 let index = findSelectedProject();
 if (index >= 0 && index < projectList.length) {
    projectList.splice(index, 1); // Removes one element at the specified index
    printForm()
    
    const contentPanel = document.querySelector('.right-panel')
    contentPanel.innerHTML = "";
    

}
}
// Edit Form to Rename a Project
function openEditForm(editDiv) {
    const editForm = document.querySelector('#editForm');
    // Pop Up Form
    editForm.classList.remove('hidden')

    

    //Searching for closest project
    let projectItem = editDiv.closest('.project-item');

    // Add hidden class to Project Element in sidebar
    projectItem.classList.add('hidden')

    // Selects the current nearest projects with .selected class and removes prior selected class from other elements
    selectProject(projectItem);
    

    editForm.addEventListener('submit', editFormTask)
}


function editFormTask(event) {
    event.preventDefault();
    const editForm = document.querySelector('#editForm');
    // Index to rename in Todo List. Looking for current Selected Project
    let index = findSelectedProject();
   const editName = document.querySelector('#editname')
   
    let editDiv = document.querySelector('.editDiv')
    let projectItem = editDiv.closest('.project-item');
    projectItem.classList.remove('hidden')
   
    projectList[index].name = editName.value
    editForm.classList.add('hidden')
    
    printForm()
}


// Removes hidden class from every ProjectName in case edit button get pressed on one element and than on the other
function removeHidden() {
  const  projectDivs = document.querySelectorAll('.project-item')
    projectDivs.forEach((project) => {
        if (project.classList.contains('hidden')) {
            project.classList.remove('hidden')
        }
    })
}

// Moved Edit Form directly under the called Form
function moveEditForm (editDiv) {

 let projectItem = editDiv.closest('.project-item');
 let existingForm = document.querySelector('#editForm')
 projectItem.insertAdjacentElement('afterend', existingForm);

}
export {createProject, projectList}