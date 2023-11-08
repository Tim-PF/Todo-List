import { projectList, saveToLocalStorage } from "./createProject";
import { loadContent, hiddenIdValue } from "./content";

class Tasks {
  constructor(projectId, id, title, description, date) {
    this.projectId = projectId;
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.important = false;
    this.completed = false;
  }
}

// Gathers all Informations from Input Task Form and creates a new Task in process
function submitFormTask(event) {
  event.preventDefault();
  const form = document.querySelector("#taskForm");
  const titleTask = document.querySelector("#taskInput");
  const optionalDescription = document.querySelector("#taskOptionalInput");
  const taskDate = document.querySelector("#taskDate");

  const projectId = findSelectedProject();
  const title = titleTask.value;
  const description = optionalDescription.value;
  const date = taskDate.value;

  createNewTask(projectId, defaultId, title, description, date);

  form.reset();

  reloadContent();
}

function editFormTask(event, hiddenProjectId) {
  event.preventDefault();

  const form = document.querySelector("#editTaskForm");
  const titleTask = document.querySelector("#editTaskInput");
  const optionalDescription = document.querySelector("#editTaskOptionalInput");
  const taskDate = document.querySelector("#editTaskDate");

  const title = titleTask.value;
  const description = optionalDescription.value;
  const date = taskDate.value;

  editTask(hiddenProjectId, defaultId, title, description, date);

  form.reset();

  reloadContent(hiddenProjectId);
}

// defaultID for now ! Add more after localStorage
let defaultId = 0;
// Id or defaultID if not found
let id = Number(localStorage.getItem("currentId")) || defaultId;

// Finds index of Selected Project and saves the created Task inside of the todos Array of called Project
function createNewTask(hiddenProjectId, defaultId, title, description, date) {
  const newId = id;
  const task = new Tasks(hiddenProjectId, newId, title, description, date);
  const index = findSelectedProject();
  projectList[index].todos.push(task);

  id++;
  saveToLocalStorage();
}

// Finds Selected Project by looking for class= selected
function findSelectedProject() {
  const selectedProject = document.querySelector(".selected");
  if (selectedProject === null) {
    return;
  }
  if (selectedProject.id == "allTasks") {
  } else {
    return selectedProject.getAttribute("data-project");
  }
}

// Finds Project index in ProjectList and than laods name into loadContent
function reloadContent(hiddenProjectId) {
  let project = null;
  let projectName = project;
  if (hiddenProjectId == null) {
    project = findSelectedProject();
  } else {
    project = hiddenProjectId;
    projectName = projectList[project].name;
  }

  const selectedProject = document.querySelector(".selected");

  if (
    selectedProject &&
    (selectedProject.id === "allTasks" ||
      selectedProject.id === "importantTasks" ||
      selectedProject.id === "todayTasks" ||
      selectedProject.id === "nextSevenDaysTasks")
  ) {
    projectName = selectedProject.textContent;
  }

  console.log(projectName);

  loadContent(projectName);
}

function editTask(hiddenProjectId, defaultId, title, description, date) {
  const index = hiddenProjectId;
  const project = projectList[index].todos;
  // Finds Id of closest List item and with that the index to change important to true or false

  const idValue = hiddenIdValue;

  // For loop to look for real Id in case one task gets deleted its important

  let realtask;

  for (const task of project) {
    if (task.id == idValue) {
      realtask = task;
    }
  }

  realtask.title = title;
  realtask.description = description;
  realtask.date = date;

  saveToLocalStorage();
}
export { submitFormTask, findSelectedProject, id, editFormTask };
