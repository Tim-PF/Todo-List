import { formPopUp, cancelTask } from "./formFunctions";
import { submitFormTask } from "./createTasks";
import { projectList } from "./createProject";
import { findSelectedProject } from "./createTasks";

export function loadContent(name) {

// Right Panel DIV
 console.log(name)
 const contentPanel = document.querySelector('.right-panel')
 contentPanel.innerHTML = "";
 // Content DIV for content
 const contentDiv = document.createElement('div');
 
 contentDiv.classList.add('content');

 // Div with Project name inside
const titleDiv = document.createElement ('div');
const titleBox = document.createElement('div');
titleBox.textContent = name;
titleDiv.appendChild(titleBox)
contentPanel.appendChild(titleDiv)



//Empty Ul to put Project Tasks into
const list = document.createElement('ul')
list.classList.add('taskList')
contentDiv.appendChild(list)




// Create the button element
const button = document.createElement('button');
button.id = 'addTask';
button.addEventListener('click', () => {
 formPopUp();
})

// Create the span element for the icon
const span = document.createElement('span');
span.className = 'material-icons-round';
span.textContent = 'add_circle_outlined';

// Create the text node for the button label
const text = document.createTextNode('Add Task');

// Append the span and text nodes to the button
button.appendChild(span);
button.appendChild(text);

// Append the button to a container or the document body
contentDiv.appendChild(button)

// Create Form Element DIV
const formDiv = document.createElement('div')
formDiv.classList.add('formDiv');
formDiv.classList.add('hidden');

// Create the form element
const form = document.createElement('form');
form.id = 'taskForm'
form.addEventListener('submit', submitFormTask)

// Create a label and input for the title
const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title:';
const titleInput = document.createElement('input');
titleInput.id = 'taskInput';
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('name', 'title');
titleInput.setAttribute('placeholder', 'Enter a title');

// Create a label and input for the optional text box
const optionalTextLabel = document.createElement('label');
optionalTextLabel.textContent = 'Optional Text:';
const optionalTextInput = document.createElement('input');
optionalTextInput.id = 'taskOptionalInput'
optionalTextInput.setAttribute('type', 'text');
optionalTextInput.setAttribute('name', 'optionalText');
optionalTextInput.setAttribute('placeholder', 'Enter optional text');

// Create a label and input for the date
const dateLabel = document.createElement('label');
dateLabel.textContent = 'Date:';
const dateInput = document.createElement('input');
dateInput.id = "taskDate"
dateInput.setAttribute('type', 'date');
dateInput.setAttribute('name', 'date');

// Create a submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

const cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'button');
cancelButton.textContent = 'Cancel';
cancelButton.addEventListener('click', () => {
    cancelTask()
})

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




contentDiv.appendChild(formDiv)
contentPanel.appendChild(contentDiv);

pushTasksToContent(name)


}


// Basic Function to print todos in a list inside content
function pushTasksToContent() {
   const index = findSelectedProject()
   const currentProjectArray = projectList[index].todos;
    for ( let task of currentProjectArray) {

        //li
    let   tasks = document.createElement('li')
       
       //Checkbox
   let checkBoxDiv = document.createElement('div')
       checkBoxDiv.textContent = "DummyText"
       tasks.appendChild(checkBoxDiv)


       //Task Title Div
     let  titleDiv = document.createElement('div')
       titleDiv.textContent = task.title;
       tasks.appendChild(titleDiv)
       
       //Append Li to UL
    let   allTodos = document.querySelector('.taskList')
       allTodos.appendChild(tasks)
    }
}





