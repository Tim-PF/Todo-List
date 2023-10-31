import { formPopUp } from "./formFunctions";
import { submitFormTask } from "./createTasks";

export function loadContent(name) {

// Right Panel DIV

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

// Append the form elements to the form
form.appendChild(titleLabel);
form.appendChild(titleInput);
form.appendChild(optionalTextLabel);
form.appendChild(optionalTextInput);
form.appendChild(dateLabel);
form.appendChild(dateInput);
form.appendChild(submitButton);


formDiv.appendChild(form);




contentDiv.appendChild(formDiv)
contentPanel.appendChild(contentDiv);


}