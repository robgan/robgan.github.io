import * as React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div class="header" id="nav">
      <div class="left">
        <div class="branding">
          <h1>Robert Gan</h1>
        </div>
      </div>
      <div class="center">
        <div class="nav">
          <ul>
            <li class="nav-item">
              <a href="#nav">Home</a>
            </li>
            <li class="nav-item">
              <a href="#aboutme">| About Me</a>
            </li>
            <li class="nav-item">
              <a href="#projects">| Projects</a>
            </li>
            <li class="nav-item">
              <a href="#work">| Experience</a>
            </li>
            <li class="nav-item">
              <a href="#contact">| Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right"></div>
    </div>
  );
}
export default Nav;
