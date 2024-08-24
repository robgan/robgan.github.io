import * as React from "react";
import "./Contact.css";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <ul>
        <li>Email: robgan503@gmail.com</li>
        <li>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/robgan"
          >
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </li>
        <li>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rdgan/"
          >
            LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </li>
      </ul>
    </Container>
  );
}
export default Contact;
