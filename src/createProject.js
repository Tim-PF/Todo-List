import {loadContent} from './content'

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


       projectDiv.addEventListener('click', () => {selectProject(projectDiv),
        loadContent(projectName)
       })
       
        
       // Edit And Delete Div
       const buttonDiv= document.createElement('div')
       buttonDiv.classList.add('formActionButtons')

       //Edit Button
       const editDiv = document.createElement('div');
       editDiv.classList.add('editDiv')

       const editIconSpan = document.createElement('span');
       editIconSpan.classList.add('material-icons-round');
       editIconSpan.textContent = 'edit';
       editDiv.appendChild(editIconSpan)
       buttonDiv.appendChild(editDiv)

       

       //Delete Button
       const deleteDiv = document.createElement('div')
       deleteDiv.classList.add('deleteDiv');

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





export {createProject, projectList}