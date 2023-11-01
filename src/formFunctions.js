import {createProject} from './createProject'
function projectButtonClicked() {
const projectButton = document.querySelector('#addProject')

projectButton.addEventListener('click', () => {
    newProjectInput();
})
}

// removes hidden class of Form that creates name for new Project!
function newProjectInput() {
   const inputForm = document.querySelector('#projectForm')
   
   if (inputForm.classList.contains('hidden')) {
    inputForm.classList.remove('hidden')
   }
   inputForm.addEventListener('submit', submitForm)
}

// Gathers name information to name a Project 
function submitForm(event) {
    event.preventDefault();
    const fnameInput = document.querySelector('#fname');
    const fnameValue = fnameInput.value;
    const inputForm = document.querySelector('#projectForm');
    inputForm.classList.add('hidden')

    createProject(fnameValue)
    projectForm.reset();
    
}


// removes hidden class to show form
function formPopUp() {
   const formDiv = document.querySelector('.formDiv')
    formDiv.classList.remove('hidden')
}


export {projectButtonClicked, formPopUp }