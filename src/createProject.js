import { loadContent } from "./content";
import { findSelectedProject, id } from "./createTasks";
import {
  allTasks,
  tasksImportant,
  tasksToday,
  tasksNextSevenDays,
} from "./home";

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}
// Array of all Projects
const defaultProjectList = [];
let projectList = localStorage.getItem("myProjectList");
projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

// Creates a new Project to store tasks in and prints them to sidebar
function createProject(prName) {
  const projectName = new Project(prName);
  projectList.push(projectName);

  saveToLocalStorage();
  printForm();
}

// Prints all Projects inside projectlist to the sidebar
function printForm() {
  let projectData = 0;

  const sidebarProjects = document.querySelector(".Projects");

  // Left Panel DIV Premade Projects (All Tasks, Today, Next7days, Important) adds Event Listener
  const allTasksButton = document.querySelector("#allTasks");

  allTasksButton.addEventListener("click", () => {
    selectProject(allTasksButton);
    loadContent("All Tasks");
  });

  const importantButton = document.querySelector("#importantTasks");
  importantButton.addEventListener("click", () => {
    selectProject(importantButton);
    loadContent("Important");
  });

  const todayButton = document.querySelector("#todayTasks");
  todayButton.addEventListener("click", () => {
    selectProject(todayButton);
    loadContent("Today");
  });

  const nextSevenDaysButton = document.querySelector("#nextSevenDaysTasks");
  nextSevenDaysButton.addEventListener("click", () => {
    selectProject(nextSevenDaysButton);
    loadContent("This Week");
  });

  deleteCurrentProjects(sidebarProjects);

  for (const project of projectList) {
    const projectDiv = document.createElement("div");

    // Need to insert before the formDiv
    const formDiv = document.querySelector("#projectForm");

    const projectName = project.name;
    projectDiv.classList.add("project-item");
    projectDiv.setAttribute("data-project", projectData);

    projectDiv.addEventListener("click", () => {
      selectProject(projectDiv), loadContent(projectName);
    });

    const newspan = document.createElement("span");
    newspan.classList.add("material-icons-round");
    newspan.textContent = "menu";
    projectDiv.appendChild(newspan);

    const projectText = document.createElement("p");
    projectText.textContent = project.name;
    projectDiv.appendChild(projectText);

    // Edit And Delete Div
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("formActionButtons");

    // Edit Button
    const editDiv = document.createElement("div");
    editDiv.classList.add("editDiv");

    // Edit Form (reset input directly)
    const editForm = document.querySelector("#editForm");
    const cancelButton = document.querySelector(".projectEditCancelButton");
    cancelButton.addEventListener("click", () => {
      removeHidden();
      editForm.classList.add("hidden");
    });

    // Event listener for Edit Button
    editDiv.addEventListener("click", (event) => {
      event.stopPropagation();
      moveEditForm(editDiv);
      removeHidden();
      editForm.reset();
      openEditForm(editDiv);
    });

    const editIconSpan = document.createElement("span");
    editIconSpan.classList.add("material-icons-round");
    editIconSpan.textContent = "edit";
    editDiv.appendChild(editIconSpan);
    buttonDiv.appendChild(editDiv);

    // Delete Button
    const deleteDiv = document.createElement("div");
    deleteDiv.classList.add("deleteDiv");
    deleteDiv.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteProject(deleteDiv);
    });

    const deleteIconSpan = document.createElement("span");
    deleteIconSpan.classList.add("material-icons-round");
    deleteIconSpan.textContent = "delete";
    deleteDiv.appendChild(deleteIconSpan);
    buttonDiv.appendChild(deleteDiv);

    // Append Buttons to projectDiv
    projectDiv.appendChild(buttonDiv);

    sidebarProjects.insertBefore(projectDiv, formDiv);

    selectProject(projectDiv);

    projectData++;
  }
}

// Gives clicked Project the selected class for better Identification
function selectProject(currentProject) {
  const projectDivs = document.querySelectorAll(".project-item");

  //  if (projectDivs.length == 0) {
  // let  projectDiv = document.querySelector('.project-item')
  //   projectDiv.classList.add('selected')
  // }
  projectDivs.forEach((project) => {
    if (project.classList.contains("selected")) {
      project.classList.remove("selected");
    }
    currentProject.classList.add("selected");
  });
}
// Prevents Divs from getting printed more than one time
function deleteCurrentProjects(sidebarProjects) {
  const existingProjectItems =
    sidebarProjects.querySelectorAll(".project-item");
  existingProjectItems.forEach((item) => item.remove());
}

// Deletes Projects
function deleteProject(deleteDiv) {
  const projectItem = deleteDiv.closest(".project-item");
  selectProject(projectItem);
  const index = findSelectedProject();
  if (index >= 0 && index < projectList.length) {
    projectList.splice(index, 1); // Removes one element at the specified index
    saveToLocalStorage();
    printForm();

    const contentPanel = document.querySelector(".right-panel");
    contentPanel.innerHTML = "";
  }
}
// Edit Form to Rename a Project
function openEditForm(editDiv) {
  const editForm = document.querySelector("#editForm");
  // Pop Up Form
  editForm.classList.remove("hidden");

  // Searching for closest project
  const projectItem = editDiv.closest(".project-item");

  // Add hidden class to Project Element in sidebar
  projectItem.classList.add("hidden");

  // Selects the current nearest projects with .selected class and removes prior selected class from other elements
  selectProject(projectItem);

  editForm.addEventListener("submit", editFormTask);
}

function editFormTask(event) {
  event.preventDefault();
  const editForm = document.querySelector("#editForm");
  // Index to rename in Todo List. Looking for current Selected Project
  const index = findSelectedProject();
  const editName = document.querySelector("#editname");

  const editDiv = document.querySelector(".editDiv");
  const projectItem = editDiv.closest(".project-item");
  projectItem.classList.remove("hidden");

  // Gives Access to Selected Project Object
  projectList[index].name = editName.value;
  editForm.classList.add("hidden");
  saveToLocalStorage();
  printForm();
  loadContent(projectList[index].name);
}

// Removes hidden class from every ProjectName in case edit button get pressed on one element and than on the other
function removeHidden() {
  const projectDivs = document.querySelectorAll(".project-item");
  projectDivs.forEach((project) => {
    if (project.classList.contains("hidden")) {
      project.classList.remove("hidden");
    }
  });
}

// Moved Edit Form directly under the called Form
function moveEditForm(editDiv) {
  const projectItem = editDiv.closest(".project-item");
  const existingForm = document.querySelector("#editForm");
  projectItem.insertAdjacentElement("afterend", existingForm);
}

function saveToLocalStorage() {
  localStorage.setItem("myProjectList", JSON.stringify(projectList));
  localStorage.setItem("currentId", id.toString());
}
export {
  createProject,
  projectList,
  printForm,
  saveToLocalStorage,
  defaultProjectList,
};
