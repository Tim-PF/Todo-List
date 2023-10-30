
function projectButtonClicked() {
const projectButton = document.querySelector('#addProject')

projectButton.addEventListener('click', () => {
    newProjectInput();
})
}


function newProjectInput() {
   const inputForm = document.querySelector('#projectForm')
   if (inputForm.classList.contains('hidden')) {
    inputForm.classList.remove('hidden')
   }
}
export {projectButtonClicked}