import {createProject} from './createProject'

function projectButtonClicked() {
const projectButton = document.querySelector('#addProject')

projectButton.addEventListener('click', () => {
    newProjectInput();
})
}


function newProjectInput() {
   const inputForm = document.querySelector('#projectForm')
   inputForm.addEventListener('submit', submitForm)
   if (inputForm.classList.contains('hidden')) {
    inputForm.classList.remove('hidden')
   }
}

function submitForm(event) {
    event.preventDefault();
    const fnameInput = document.querySelector('#fname');
    const fnameValue = fnameInput.value;
    createProject(fnameValue)
    projectForm.reset();
    
}

function formPopUp() {
   const formDiv = document.querySelector('.formDiv')
    formDiv.classList.remove('hidden')
}


export {projectButtonClicked, formPopUp }