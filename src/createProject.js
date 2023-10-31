import {loadContent} from './content'

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}

const projectList = [];

export function createProject(prName) {
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

       projectDiv.addEventListener('click', () => loadContent(projectDiv.textContent))

     
       sidebarProjects.appendChild(projectDiv)

       projectData++;

    }
}

//Prevents Divs from getting printed more than one time 
function deleteCurrentProjects(sidebarProjects) {
    const existingProjectItems = sidebarProjects.querySelectorAll('.project-item');
    existingProjectItems.forEach(item => item.remove());
}