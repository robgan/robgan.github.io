import * as React from "react";
import "./Nav.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/">Robert Gan</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#/projects">Projects</Nav.Link>
            {/* <NavDropdown title="Projects" renderMenuOnMount={true}>
              <NavDropdown.Item href="/pangram">
                Pangram Solver
              </NavDropdown.Item>
              <NavDropdown.Item href="/pearlhacks">Pearlhacks</NavDropdown.Item>
              <NavDropdown.Item href="/justintime">
                Just In Time
              </NavDropdown.Item>
              <NavDropdown.Item href="/scalemanagementconsole">
                Scale Management Console
              </NavDropdown.Item>
              <NavDropdown.Item href="/interactivecontinuouslegend">
                Interactive Continuous Legend
              </NavDropdown.Item>
              <NavDropdown.Item href="/crytography">
                Cryptography Puzzle Game
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#/aboutme">About Me</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
