import * as React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Contact() {
  return (
    <div id="contact">
      <div class="left-contact">
        <img src={require("./assets/images/favicon.svg")} alt="logo"></img>
      </div>
      <div class="right-contact">
        <h1>Contact Me</h1>
        <p>robgan503@gmail.com</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/rdgan">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/rdgan">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gobertran">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
