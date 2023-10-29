import './style.css';
import _ from 'lodash';
import {toggleSideBar} from './sidebar';
import {toggleTheme} from './theme';



home();
toggleSideBar();
toggleTheme();

  function home() {
    const home = document.querySelector('#main');
    home.innerHTML = `
      <div class="navbar">
        <button id="sidebar-button">SideBar</button>
        <h1>TU<span style="color: red;">DU<span></h1>
        <button id="theme-button">Toggle MODE</button>      
        </div>      
      <div class="content">
        <div class="left-panel"></div>
        <div class="right-panel"></div>
      </div>

      <div class="footer"></div>
    `;
  }
  