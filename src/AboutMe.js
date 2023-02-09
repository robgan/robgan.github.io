import * as React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="aboutme">
      <h1 class="aboutme">About Me</h1>
      <div class="flex">
        <div class="left-col">
          <h3>Get to know me!</h3>
          <div class="text-block">
            <p class="text">
              I’m a recent graduate and software engineer passionate about
              solving modern problems using modern technology. I'm always
              looking to learn new things bring ideas to life.
            </p>
            <p class="text">
              Formely at SAS and Amazon WFM, I've worked in data visualization
              and scale device management respectively.
            </p>
            <p class="text">
              Outside of the office I’m coming up with new things to 3D print,
              playing volleyball, or watching a movie or TV show.
            </p>
          </div>
          <img
            src={require("./assets/images/headshot.jpg")}
            alt="headshot"
            class="headshot"
          ></img>
        </div>
        <div class="right-col">
          <h3>Education</h3>
          <div class="text-block">
            <p class="text">
              I attended the University of North at Chapel Hill from 2019 - 2022
              and graduated with a BS in Computer Science and Data Science and
              Applied Sciences and Engineering minors
            </p>
          </div>
          <img
            class="school"
            alt=" logo"
            src="https://identity2.sites.unc.edu/wp-content/uploads/sites/885/2019/01/centered_logo.png"
          ></img>
          <h3>Skills</h3>
          <div class="text-block">
            <ul class="skills">
              <li>AWS</li>
              <li>Java</li>
              <li>C++</li>
              <li>HTMl</li>
              <li>CSS</li>
              <li>Python</li>
              <li>React</li>
              <li>Javascript</li>
              <li>MATLAB</li>
              <li>Git</li>
              <li>Github</li>
              <li>Smithy</li>
              <li>Dagger</li>
              <li>3D Printing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
