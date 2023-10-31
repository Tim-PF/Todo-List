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
       
       projectDiv.textContent = project.name;
       projectDiv.classList.add('project-item')
       projectDiv.setAttribute('data-project', projectData);

       projectDiv.addEventListener('click', () => {loadContent(projectDiv.textContent),
       selectProject(projectDiv)})

     
       sidebarProjects.appendChild(projectDiv)

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