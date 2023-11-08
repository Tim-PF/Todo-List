import {
  formPopUp,
  cancelTask,
  importantButtonClick,
  deleteButtonClicked,
  showHiddenForm,
  editCancelTask,
  moveTaskEditForm,
  checkButtonClick,
} from "./formFunctions";
import {
  submitFormTask,
  findSelectedProject,
  editFormTask,
  id,
} from "./createTasks";
import { projectList, saveToLocalStorage } from "./createProject";
import {
  allTasks,
  tasksImportant,
  tasksToday,
  tasksNextSevenDays,
  chooseProject,
} from "./home";
import Icon from "./images/coffeeCup.svg";

// Important for editing Tasks !
export let hiddenIdValue = null;
export let hiddenProjectId = null;
export function loadContent(name) {
  // NavBar

  const myIcon = new Image();
  myIcon.src = Icon;

  // Right Panel DIV

  const contentPanel = document.querySelector(".right-panel");
  contentPanel.innerHTML = "";
  // Content DIV for content
  const contentDiv = document.createElement("div");

  contentDiv.classList.add("list-todos");

  // Div with Project name inside
  const titleDiv = document.createElement("div");
  const titleBox = document.createElement("div");
  titleBox.textContent = name;
  titleBox.classList.add("titleDiv");
  titleDiv.appendChild(titleBox);
  contentPanel.appendChild(titleDiv);

  // Empty Ul to put Project Tasks into
  const list = document.createElement("ul");
  list.classList.add("taskList");
  contentDiv.appendChild(list);

  // Create the button element
  const button = document.createElement("button");
  button.id = "addTask";
  button.addEventListener("click", () => {
    formPopUp();
  });

  const selectedProject = document.querySelector(".selected");

  if (
    selectedProject &&
    (selectedProject.id === "allTasks" ||
      selectedProject.id === "importantTasks" ||
      selectedProject.id === "todayTasks" ||
      selectedProject.id === "nextSevenDaysTasks")
  ) {
    button.classList.add("hidden");
  }

  // Create the span element for the icon
  const span = document.createElement("span");
  span.className = "material-icons-round";
  span.textContent = "add_circle_outlined";

  // Create the text node for the button label
  const text = document.createTextNode("Add Task");

  // Append the span and text nodes to the button
  button.appendChild(span);
  button.appendChild(text);

  // Create Edit Element DIV

  const editTaskDiv = document.createElement("div");
  editTaskDiv.classList.add("editTaskDiv");
  editTaskDiv.classList.add("hidden");

  // Create the form element
  const editTaskForm = document.createElement("form");
  editTaskForm.id = "editTaskForm";
  editTaskDiv.addEventListener("submit", (event) => {
    console.log(hiddenProjectId);
    editFormTask(event, hiddenProjectId);
  });
  // Changes needed !!!

  // Create a label and input for the title
  const editTitleLabel = document.createElement("label");
  editTitleLabel.textContent = "Title:";
  const editTitleInput = document.createElement("input");
  editTitleInput.id = "editTaskInput"; // ID of edit title
  editTitleInput.setAttribute("type", "text");
  editTitleInput.setAttribute("name", "title");
  editTitleInput.setAttribute("placeholder", "Enter a title");

  // Create a label and input for the optional text box
  const editOptionalTextLabel = document.createElement("label");
  editOptionalTextLabel.textContent = "Optional Text:";
  const editOptionalTextInput = document.createElement("input");
  editOptionalTextInput.id = "editTaskOptionalInput"; // ID of edit optional Input
  editOptionalTextInput.setAttribute("type", "text");
  editOptionalTextInput.setAttribute("name", "optionalText");
  editOptionalTextInput.setAttribute("placeholder", "Enter optional text");

  // Create a label and input for the date
  const editDateLabel = document.createElement("label");
  editDateLabel.textContent = "Date:";
  const editDateInput = document.createElement("input");
  editDateInput.id = "editTaskDate"; // ID of edit Date
  editDateInput.setAttribute("type", "date");
  editDateInput.setAttribute("name", "date");

  // Create a submit button
  const editSubmitButton = document.createElement("button");
  editSubmitButton.setAttribute("type", "submit");
  editSubmitButton.classList.add("editSubmitButton");
  editSubmitButton.textContent = "Submit";

  const editCancelButton = document.createElement("button");
  editCancelButton.setAttribute("type", "button");
  editCancelButton.classList.add("editCancelButton");
  editCancelButton.textContent = "Cancel";
  editCancelButton.addEventListener("click", () => {
    editCancelTask();
  });
  // Append the form elements to the form
  editTaskForm.appendChild(editTitleLabel);
  editTaskForm.appendChild(editTitleInput);
  editTaskForm.appendChild(editOptionalTextLabel);
  editTaskForm.appendChild(editOptionalTextInput);
  editTaskForm.appendChild(editDateLabel);
  editTaskForm.appendChild(editDateInput);
  editTaskForm.appendChild(editSubmitButton);
  editTaskForm.appendChild(editCancelButton);

  editTaskDiv.appendChild(editTaskForm);

  contentDiv.appendChild(editTaskDiv);

  // Create Form Element DIV
  const formDiv = document.createElement("div");
  formDiv.classList.add("formDiv");
  formDiv.classList.add("hidden");

  // Create the form element
  const form = document.createElement("form");
  form.id = "taskForm";
  form.addEventListener("submit", (event) => {
    submitFormTask(event);
  });

  // Create a label and input for the title
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.id = "taskInput";
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("placeholder", "Enter a title");

  // Create a label and input for the optional text box
  const optionalTextLabel = document.createElement("label");
  optionalTextLabel.textContent = "Optional Text:";
  const optionalTextInput = document.createElement("input");
  optionalTextInput.id = "taskOptionalInput";
  optionalTextInput.setAttribute("type", "text");
  optionalTextInput.setAttribute("name", "optionalText");
  optionalTextInput.setAttribute("placeholder", "Enter optional text");

  // Create a label and input for the date
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date:";
  const dateInput = document.createElement("input");
  dateInput.id = "taskDate";
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "date");

  // Create a submit button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    cancelTask();
  });

  // Append the form elements to the form
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(optionalTextLabel);
  form.appendChild(optionalTextInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  formDiv.appendChild(form);

  contentDiv.appendChild(formDiv);

  // Append the button to a container or the document body
  contentDiv.appendChild(button);
  contentPanel.appendChild(contentDiv);

  pushTasksToContent(name);
}

// Basic Function to print todos in a list inside content
export function pushTasksToContent() {
  let index = findSelectedProject();
  if (index == null) {
    index = hiddenProjectId;
  }
  let currentProjectArray = chooseProject();

  if (currentProjectArray == null) {
    console.log("hihi");
    currentProjectArray = projectList[index].todos;
  }

  for (const task of currentProjectArray) {
    // Saves the projectId from the Task Object     Important!
    const currentProjectId = task.projectId;

    // li
    const tasks = document.createElement("li");
    tasks.id = task.id;

    // Checkbox
    const checkBoxDiv = document.createElement("div");
    checkBoxDiv.classList.add("unchecked");
    checkBoxDiv.addEventListener("click", () => {
      checkBoxDiv.classList.toggle("checked");
      checkButtonClick(checkBoxDiv, currentProjectId);
    });

    // Div with Title and Description
    const listInfos = document.createElement("div");
    listInfos.classList.add("list-infos");

    // Task Title Div
    const titleDiv = document.createElement("div");
    titleDiv.textContent = task.title;
    listInfos.appendChild(titleDiv);

    // Description Div

    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = task.description;
    listInfos.appendChild(descriptionDiv);

    // Date Div
    const dateDiv = document.createElement("div");
    dateDiv.textContent = task.date;
    dateDiv.classList.add("dateDiv");

    // Right Side Div for Buttons Important Edit and Delete Button
    const taskRightSideDiv = document.createElement("div");
    taskRightSideDiv.classList.add("taskButtons");

    // Important Button
    const importantButton = document.createElement("span");
    importantButton.classList.add("material-icons-round", "star-outline");
    importantButton.textContent = "star_outline";
    importantButton.addEventListener("click", () => {
      importantButtonClick(
        importantButton,
        importantButtonTrue,
        currentProjectId,
      );
    });

    // Second Important Button Full Star if important
    let importantButtonTrue = document.createElement("span");
    importantButtonTrue.classList.add(
      "material-icons-round",
      "important",
      "hideList",
    );
    importantButtonTrue.textContent = "star";
    importantButtonTrue.addEventListener("click", () => {
      importantButtonClick(
        importantButton,
        importantButtonTrue,
        currentProjectId,
      );
    });

    // Edit Button
    const editButton = document.createElement("span");
    editButton.classList.add("material-icons-round");
    editButton.textContent = "mode_edit_outline";
    editButton.addEventListener("click", (event) => {
      hiddenIdValue = hiddenId(editButton);
      // Now you can use the idValue variable here or pass it to other functions
      showHiddenForm();
      moveTaskEditForm();
      hiddenProjectId = currentProjectId;
    });

    // Delete Button
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("material-icons-round");
    deleteButton.textContent = "delete_outline";
    deleteButton.addEventListener("click", () => {
      deleteButtonClicked(deleteButton, currentProjectId);
    });
    // Append Button to Right Side Div

    taskRightSideDiv.appendChild(importantButton);
    taskRightSideDiv.appendChild(importantButtonTrue);
    taskRightSideDiv.appendChild(editButton);
    taskRightSideDiv.appendChild(deleteButton);

    // Append to Li
    tasks.appendChild(checkBoxDiv);
    tasks.appendChild(listInfos);
    tasks.appendChild(dateDiv);
    tasks.appendChild(taskRightSideDiv);

    // Functions to check if checked or important
    checkImportant(task, importantButton, importantButtonTrue, checkBoxDiv);

    // Append Li to UL
    const allTodos = document.querySelector(".taskList");
    allTodos.appendChild(tasks);
  }
}

// Checks if important and adds class important

function checkImportant(
  task,
  importantButton,
  importantButtonTrue,
  checkBoxDiv,
) {
  if (task.important) {
    // Add the "important" class
    importantButton.classList.add("hideList");
    importantButtonTrue.classList.remove("hideList");
  } else {
    // Remove the "important" class
    importantButton.classList.remove("hideList");
    importantButtonTrue.classList.add("hideList");
  }

  if (task.completed) {
    checkBoxDiv.classList.add("checked");
  } else {
    checkBoxDiv.classList.remove("checked");
  }
}

function hiddenId(editButton) {
  const closestListItem = editButton.closest("li");
  if (closestListItem) {
    // Get the value of the 'data-some-attribute' attribute from the closest <li> element
    const idValue = closestListItem.getAttribute("id");

    return idValue;
  }
}
