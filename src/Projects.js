import * as React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h1 class="projects"> Projects </h1>
      <div class="projects-block">
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/ph2023.png")}
              alt="pearlhacks"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>Pearlhacks 2023 Website</h2>
            <div class="tags">
              <p class="software-tag">Software</p>
            </div>
            <p>
              Pearlhacks is a hackathon for non-binary and gender non-conforming
              individuals. As the Director of Technology, I updated, developed,
              and maintained the website to fit the 2023 hackathon theme.
            </p>
            <ul class="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Sponsor Authentication</li>
            </ul>
            <a href="https://www.pearlhacks.com">Link</a>
          </div>
        </div>
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/justintime.png")}
              alt="justintime"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>Just In Time</h2>
            <div class="tags">
              <p class="software-tag">Software</p>
            </div>
            <p>
              Just In Time is a cross-platform mobile app created in
              collaboration with the UNC Center for Nursing Excellence that
              allows nurses to receive timely notification updates about policy
              changes,workplace updates, and find helpful resources to improve
              the quality of care their patients receive. The need for this app
              arose during the COVID-19 pandemic when patient care policies were
              changing every day.
            </p>
            <ul class="tech">
              <li>React</li>
              <li>React Native</li>
              <li>Firebase</li>
              <li>Authentication</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/WFM.png")}
              alt="wfm"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>Scale Management Console</h2>
            <div class="tags">
              <p class="software-tag">Software</p>
            </div>
            <p>
              Designed and developed a management console API for the Whole
              Foods Market scale fleet that allowed CRUD operations on scale,
              store, department, and region entities. The API also included
              endpoints to track scale uptime at varying levels.
            </p>
            <ul class="tech">
              <li>Java</li>
              <li>DynamoDB</li>
              <li>TimestreamDB</li>
              <li>S3</li>
              <li>Lambda</li>
              <li>Cloudformation</li>
              <li>Dagger</li>
              <li>Smithy</li>
              <li>Unit Testing</li>
            </ul>
            {/* <a href="https://www.pearlhacks.com">Link</a> */}
          </div>
        </div>
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/clipnzip.jpg")}
              alt="clipnzip"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>ClipNZip</h2>
            <div class="tags">
              <p class="hardware-tag">Hardware</p>
            </div>
            <p>
              ClipNZip is a tool to allow indivduals with dexterity issues and
              limb differences to easily zip up a jacket. All you have to do it
              clip one side to your jacket, step on the foot pedal, tighten the
              cord, and zip!
            </p>
            <ul class="tech">
              <li>Quick Release Clip</li>
              <li>Retractable Cord</li>
              <li>Foot Pedal</li>
            </ul>
          </div>
        </div>
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/legend.png")}
              alt="legend"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>Interactive Continuous Legend</h2>
            <div class="tags">
              <p class="software-tag">Software</p>
            </div>
            <p>
              Interactive Continuous Legend is an interactive version of the
              existing Continuous Legend component for the C++ Portable Graph
              Library. The new component allowed users to create and
              interactively adjust color ramps to suit their data set along with
              optional features such as histograms to visualize the data
              distribution.
            </p>
            <ul class="tech">
              <li>C++</li>
              <li>Data Visualization</li>
              <li>Interactive</li>
              <li>Unit Testing</li>
            </ul>
          </div>
        </div>
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/beatSaber.jpg")}
              alt="rhythm game"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>BeatSaber-like Rhythm Game</h2>
            <div class="tags">
              <p class="software-tag">Software</p>
              <p class="hardware-tag">Hardware</p>
            </div>
            <p>
              This game is a version of the popular BeatSaber VR game recreated
              without the VR using a Labview Program and circuitry.
            </p>
            <ul class="tech">
              <li>Labview</li>
              <li>Labjack</li>
              <li>3 Axis Accelerometer</li>
              <li>Custom Circuitry</li>
              <li>Force Sensitive Resistor</li>
              <li>3D Printed Handles</li>
              <li>Laser Cut Box</li>
            </ul>
          </div>
        </div>
        <div class="project">
          <div class="project-img">
            <img
              src={require("./assets/images/cryptograms.png")}
              alt="cryptograms"
              class="image"
            ></img>
          </div>
          <div class="project-content">
            <h2>Cryptography Puzzle Game Website</h2>
            <div class="tags">
              <p class="software-tag">Software</p>
            </div>
            <p>
              I recreated one of my favorite puzzles called cryptograms. A
              random quote is encrypted using a monoalphabetic subsitution
              cipher and the player has the decrypt the quote.
            </p>
            <ul class="tech">
              <li>React</li>
              <li>API</li>
              <li>CSS</li>
              <li>Light and Dark Mode</li>
            </ul>
            <a href="https://robgan.github.io/cryptograms">Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
