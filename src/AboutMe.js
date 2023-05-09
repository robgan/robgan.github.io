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
              I’m a recent graduate of the University of North Carolina at
              Chapel Hill and I am a software engineer with a passion for
              creating intuitive and efficient systems.
            </p>
            <p class="text">
              I have previous experience as a software developemtn engineer
              intern at both SAS and Amazon Whole Foods Market, where I worked
              on exciting projects related to data visualization and scale
              device management.
            </p>
            <p class="text">
              At SAS, I helped develop and improve their data visualization
              tool, which gave me an understanding of how to create clear and
              compelling visualizations that can help people better understand
              complex data.
            </p>
            <p class="text">
              At Amazon WFM, I worked on a project to develop a device
              management system that could scale efficiently with the growing
              needs of the company. These experiences have taught me the
              importance of collaboration, attention to detail, and creating
              solutions that are scalable and intuitive.
            </p>
            <p class="text">
              Outside of the office I’m designing new things to 3D print,
              playing volleyball, travelling the world, or watching a movie or
              TV show.
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
              In 2022, I graduated from the University of North Carolina at
              Chapel Hill with a Bachelor of Science degree in Computer Science.
              During my time at UNC-CH, I also pursued minors in Data Science
              and Applied Sciences and Engineering, which allowed me to gain a
              deeper understanding of the intersection between technology and
              other fields. I was fortunate to have access to some of the most
              innovative professors and state-of-the-art facilities, which
              helped me hone my technical skills and develop a passion for
              creating solutions that can positively impact people's lives. My
              education has provided me with a strong foundation in programming
              languages, data analysis, and software engineering principles,
              which I look forward to applying in my future career.
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
              <li>Unit Testing</li>
              <li>Databases</li>
              <li>Git</li>
              <li>Github</li>
              <li>Smithy</li>
              <li>Dagger</li>
              <li>MATLAB</li>
              <li>3D Printing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
