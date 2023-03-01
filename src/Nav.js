import * as React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div class="header" id="nav">
      <div class="left">
        <div class="branding">
          <img src={require("./assets/images/favicon.svg")} alt="logo"></img>
        </div>
      </div>
      <div class="center">
        <div class="nav">
          <ul>
            <li class="nav-item">
              <a href="#nav">Home</a>
            </li>
            <li>
              <h5>|</h5>
            </li>
            <li class="nav-item">
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <h5>|</h5>
            </li>
            <li class="nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li>
              <h5>|</h5>
            </li>
            <li class="nav-item">
              <a href="#work">Experience</a>
            </li>
            <li>
              <h5>|</h5>
            </li>
            <li class="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right"></div>
    </div>
  );
}
export default Nav;
