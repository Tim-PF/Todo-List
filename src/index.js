import './style.css';
import _ from 'lodash';
import {toggleSideBar} from './sidebar';
import {toggleTheme} from './theme';
import {projectButtonClicked, cancelProject} from './formFunctions'
import { printForm } from './createProject';



home();
toggleSideBar();
toggleTheme();
projectButtonClicked();
printForm();


  function home() {
    const home = document.querySelector('#main');
    home.innerHTML = `
      <div class="navbar">
          
          <button id="sidebar-button"><span class="material-icons-round">menu</span></button>
          <div class="logo-area">
            <img src="./images/coffeeCup.svg">
            <h1>TO<span style="color: white;">DO<span></h1>
          </div>
          <div class="theme">
            <input type="checkbox" class="checkbox" id="checkbox" checked="true">
            <label for="checkbox" class="label">
                <img class="sun" src="images/sun.png">
                <span class="material-icons-round moon">dark_mode</span>
                <div class="ball"></div>
            </label>
        </div>     
      </div>      
      <div class="content">
        <div class="left-panel">
          <h1>Home</h1>
          <div class="home-projects">
          <img src="./images/all.png" alt="All">
          <div class="project-item" id="allTasks">All Tasks</div>
        </div>
        <div class="home-projects">
          <img src="./images/star.png" alt="Important">
          <div class="project-item"id="importantTasks">Important</div>
        </div>
        <div class="home-projects">
          <img src="./images/today.png" alt="Today">
          <div class="project-item"id="todayTasks">Today</div>
        </div>
        <div class="home-projects">
          <img src="./images/week.png" alt="This Week">
          <div class="project-item"id="nextSevenDaysTasks">This Week</div>
        </div>
          <div class="Projects">
            <h1>Projects</h1>
            <form id="editForm" class="hidden">
                <div class="projectIcon">
                            <span class="material-icons-round">menu</span>
                </div>
                <input type="text" id="editname" name="editname"><br>
                <button type="submit" class="projectEditSubmitButton">Rename</button>
                <button type="button" class="projectEditCancelButton">Cancel</button>
            </form>
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
  