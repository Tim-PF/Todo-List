import './style.css';
import _ from 'lodash';
import {toggleSideBar} from './sidebar';
import {toggleTheme} from './theme';
import {projectButtonClicked, cancelProject} from './formFunctions'



home();
toggleSideBar();
toggleTheme();
projectButtonClicked();

  function home() {
    const home = document.querySelector('#main');
    home.innerHTML = `
      <div class="navbar">
        <button id="sidebar-button">SideBar</button>
        <h1>TU<span style="color: red;">DU<span></h1>
        <button id="theme-button">Toggle MODE</button>      
        </div>      
      <div class="content">
        <div class="left-panel">
          <h1>Home</h1>
          <div class="Projects">
            <h1>Projects</h1>
            <form id="projectForm" class="hidden">
                <div class="projectIcon">
                            <span class="material-icons-round">menu</span>
                </div>
                <input type="text" id="fname" name="fname"><br>
                <button type="submit" class="projectSubmitButton">Add</button>
                <button type="button" class="projectCancelButton">Cancel</button>
            </form>
            <button id="addProject"><span class="material-icons-round">add_circle_outlined</span>Add Project</button>
            
          </div>
        </div>
        <div class="right-panel"></div>
      </div>

      <div class="footer"></div>
    `;
   const  cancelButton = document.querySelector('.projectCancelButton')
    cancelButton.addEventListener('click', () => {
        cancelProject();
    })
  }
  