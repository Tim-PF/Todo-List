import './style.css';
import _ from 'lodash';


home();


  function home() {
    const home = document.querySelector('#main');
    home.innerHTML = `
      <div class="navbar">
        <button id="sidebar-button">SideBar</button>
        <h1>TU<span style="color: red;">DU<span></h1>
        <button>Toggle MODE</button>      
        </div>      
      <div class="content">
        <div class="left-panel"></div>
        <div class="right-panel"></div>
      </div>

      <div class="footer"></div>
    `;
  }
  