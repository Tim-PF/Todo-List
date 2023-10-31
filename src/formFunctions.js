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
    console.log("clicked")
    event.preventDefault();
    const fnameInput = document.querySelector('#fname');
    const fnameValue = fnameInput.value;
    createProject(fnameValue)
    projectForm.reset();
    
}




export {projectButtonClicked}