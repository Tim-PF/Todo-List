import { projectList } from "./createProject";
import { loadContent, hiddenProjectId } from "./content";
import { findSelectedProject } from "./createTasks";
import isToday from 'date-fns/isToday'
import parseISO from "date-fns/parseISO";
import isThisWeek from 'date-fns/isThisWeek'



function chooseProject() {
  let  selectedProject = document.querySelector('.selected')

  if (selectedProject && selectedProject.id === 'allTasks')  {
    return allTasks()
  }

  else if (selectedProject && selectedProject.id === 'importantTasks')  {
    return tasksImportant()
  }

  else if (selectedProject && selectedProject.id === 'todayTasks')  {
    
    return tasksToday()
  }

  else if (selectedProject && selectedProject.id === 'nextSevenDaysTasks')  {
    
    return tasksNextSevenDays()
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
    clearContent()
    let todayArray = []
    projectList.forEach((project) => {
        project.todos.forEach((task) => {
            console.log(task.date)
         if (isToday(parseISO(task.date))) {
            todayArray.push(task)
         }
         else {
            return;
         }
        });
    });
    return todayArray
}

function tasksNextSevenDays() {
    clearContent()
    let thisWeekArray = []
    projectList.forEach((project) => {
        project.todos.forEach((task) => {
            console.log(task.date)
         if (isThisWeek(parseISO(task.date))) {
            thisWeekArray.push(task)
         }
         else {
            return;
         }
        });
    });
    return thisWeekArray

   
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