import isToday from "date-fns/isToday";
import parseISO from "date-fns/parseISO";
import isThisWeek from "date-fns/isThisWeek";
import { projectList } from "./createProject";
import { loadContent, hiddenProjectId } from "./content";
import { findSelectedProject } from "./createTasks";

function chooseProject() {
  const selectedProject = document.querySelector(".selected");

  if (selectedProject && selectedProject.id === "allTasks") {
    return allTasks();
  }

  if (selectedProject && selectedProject.id === "importantTasks") {
    return tasksImportant();
  }

  if (selectedProject && selectedProject.id === "todayTasks") {
    return tasksToday();
  }

  if (selectedProject && selectedProject.id === "nextSevenDaysTasks") {
    return tasksNextSevenDays();
  }

  return null;
}

function allTasks() {
  clearContent();

  const homeArray = [];
  projectList.forEach((project) => {
    project.todos.forEach((task) => {
      homeArray.push(task);
    });
  });

  return homeArray;
}

function tasksImportant() {
  clearContent();
  const importantArray = [];
  projectList.forEach((project) => {
    project.todos.forEach((task) => {
      if (task.important) {
        importantArray.push(task);
      } else {
      }
    });
  });

  return importantArray;
}

function tasksToday() {
  clearContent();
  const todayArray = [];
  projectList.forEach((project) => {
    project.todos.forEach((task) => {
      console.log(task.date);
      if (isToday(parseISO(task.date))) {
        todayArray.push(task);
      } else {
      }
    });
  });
  return todayArray;
}

function tasksNextSevenDays() {
  clearContent();
  const thisWeekArray = [];
  projectList.forEach((project) => {
    project.todos.forEach((task) => {
      console.log(task.date);
      if (isThisWeek(parseISO(task.date))) {
        thisWeekArray.push(task);
      } else {
      }
    });
  });
  return thisWeekArray;
}

function clearContent() {
  const ul = document.querySelector(".taskList");
  if (ul) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
}

export {
  allTasks,
  tasksImportant,
  tasksToday,
  tasksNextSevenDays,
  chooseProject,
};
