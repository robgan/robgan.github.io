import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./Projects.css";

function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <p>Various projects I've made over the years</p>
      <Container>
        <Row>
          <Col lg={6}>
            <Container>
              <h3>RedRealty</h3>
              <p className="weight-light">2023-Present</p>
              <p>A website for a local realty company</p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.marcomtowns.com/"
              >
                Source <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </Container>
          </Col>
          <Col lg={6}>
            <Container>
              <h3>Pearlhacks</h3>
              <p className="weight-light">2023</p>
              <p>A women and non-binary hackathon website!</p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://pearlhacks.github.io/2023Website/"
              >
                Source <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Container>
              <h3>Pangram Solver</h3>
              <p className="weight-light">2024</p>
              <p>A solver for the NYT pangram puzzle game</p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robgan/Panagram"
              >
                Source <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </Container>
          </Col>
          <Col lg={6}>
            <Container>
              <h3>Just In Time</h3>
              <p className="weight-light">2022</p>
              <p>
                A nursing notification system developed with UNC Nursing Staff
                and UNC Center for Nursing Excellence
              </p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/gda975/JustInTime"
              >
                Source <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Container>
              <h3>Scale Management Console</h3>
              <p className="weight-light">2022 Amazon Internship</p>
              <p>A management system for Whole Foods Market scale devices</p>
            </Container>
          </Col>
          <Col lg={6}>
            <Container>
              <h3>Interactive Continouous Legend</h3>
              <p className="weight-light">2021-2022 SAS Internship</p>
              <p>
                A new graph compnent for the SAS Business Graphics C++ library
              </p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Container>
              <h3>Cryptograms</h3>
              <p className="weight-light">2021</p>
              <p>A website to play cryptogram puzzles</p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robgan/cryptograms"
              >
                Source <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </Container>
          </Col>
          <Col lg={6}>
            <Container>
              <h3>Ant Path Finding</h3>
              <p className="weight-light">2020</p>
              <p>
                A simulation of how ant hormones enable shortest path finding
              </p>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robgan/AntPathFinding"
              >
                Source <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
