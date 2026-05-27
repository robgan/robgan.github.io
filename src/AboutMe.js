import * as React from "react";
import "./AboutMe.css";
import { Col, Container, Row } from "react-bootstrap";

function AboutMe() {
  return (
    <div>
      <Container>
        <h1>About Me</h1>
        <p>
          Hi I'm Robert Gan a Software Developer based in Austin, TX. A graduate
          of UNC-Chapel Hill, I studied Computer Science and minored in Applied
          Sciences and Engineering and Data Science. I'm an avid traveller,
          collector of knicknacks, and enjoyer of the xkcd webcomic. I like
          working out on occasion, playing video games, and trying to cook
          something tasty.
        </p>
        <p>
          Right now I'm at Amazon working to protect child and teen privacy. I
          develop scalable services providing helping Amazon comply with
          regulations across the globe.
        </p>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
            <h1>Work</h1>

            <ul>
              <h3>Amazon</h3>
              <li>
                <div className="section">
                  <p className="weight-normal">
                    Software Development Engineer II
                  </p>
                  <p>SDO Privacy: Child and Teen</p>
                  <p className="weight-light">2025-Present</p>
                </div>
              </li>
              <li>
                <div className="section">
                  <p className="weight-normal">Software Development Engineer</p>
                  <p>SDO Privacy: Child and Teen</p>
                  <p className="weight-light">2023-2025</p>
                </div>
              </li>
              <li>
                <div className="section">
                  <p className="weight-bold">Software Development Intern</p>
                  <p>WFM: Signs and Scales</p>
                  <p className="weight-light">2022</p>
                </div>
              </li>
            </ul>

            <ul>
              <h3>SAS</h3>
              <li>
                <div className="section">
                  <p className="weight-bold">Software Development Intern</p>
                  <p>Business Graphics</p>
                  <p className="weight-light">2021-2022</p>
                </div>
              </li>
            </ul>

            <ul>
              <h3>Pearlhacks</h3>
              <li>
                <div className="section">
                  <p className="weight-bold">Director of Technology</p>
                  <p className="weight-light">2021-2022</p>
                </div>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <h1>Education</h1>
            <ul>
              <h3>Bachelor of Science in Computer Science</h3>
              <li>
                <div className="section">
                  <p className="weight-bold">
                    University of North Carolina - Chapel Hill, Chapel Hill, USA
                  </p>
                  <p>Major: Computer Science</p>
                  <p>Minors: Applied Sciences and Engineering & Data Science</p>
                  <p className="weight-light">2019-2022</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AboutMe;
