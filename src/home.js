import { projectList } from "./createProject";
import { loadContent, hiddenProjectId } from "./content";
import { findSelectedProject } from "./createTasks";




function chooseProject() {
  let  selectedProject = document.querySelector('.selected')

  if (selectedProject && selectedProject.id === 'allTasks')  {
    return allTasks()
  }

  else {
    return null
  }
}

function allTasks() {
    clearContent()
    
    let homeArray = []
    console.log(homeArray)
    projectList.forEach((project) =>{
        project.todos.forEach((task) => {
          homeArray.push(task)
        });
    });

    return homeArray
}

function tasksImportant() {
    console.log("imp")
}

function tasksToday() {
    console.log("tod")
}

function tasksNextSevenDays() {
    console.log("7")
}



function clearContent() {
    console.log("Test Test")
        const ul = document.querySelector('.taskList');
        if (ul) {
          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
        }
      
}

export {allTasks, tasksImportant, tasksToday, tasksNextSevenDays, chooseProject}