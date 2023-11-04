import { projectList } from "./createProject";
import { loadContent, hiddenProjectId } from "./content";
import { findSelectedProject } from "./createTasks";




function chooseProject() {
  let  selectedProject = document.querySelector('.selected')

  if (selectedProject && selectedProject.id === 'allTasks')  {
    return allTasks()
  }

  else if (selectedProject && selectedProject.id === 'importantTasks')  {
    return tasksImportant()
  }

  else {
    return null
  }
}

function allTasks() {
    clearContent()
    
    let homeArray = []
    projectList.forEach((project) =>{
        project.todos.forEach((task) => {
          homeArray.push(task)
        });
    });

    return homeArray
}

function tasksImportant() {
    clearContent()
    let importantArray = []
    projectList.forEach((project) =>{
        project.todos.forEach((task) => {
            if(task.important){
                importantArray.push(task)
            }
            else{
                return;
            }
        });
    });

 return importantArray
    
}

function tasksToday() {
    
}

function tasksNextSevenDays() {
   
}



function clearContent() {
   
        const ul = document.querySelector('.taskList');
        if (ul) {
          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
        }
      
}

export {allTasks, tasksImportant, tasksToday, tasksNextSevenDays, chooseProject}