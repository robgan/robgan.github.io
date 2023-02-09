import * as React from "react";
import "./Work.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Work() {
  return (
    <div id="work">
      <h1 class="prof">Professional Experience</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div class="title">
              <span class="position">
                Software Development Engineer Intern @ Amazon
              </span>
              <span class="time">2022</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div class="expanded">
              <div>
                <div class="info">
                  <FontAwesomeIcon icon="fa-location-dot" />
                  <span class="location">Austin, TX</span>
                  <FontAwesomeIcon icon="fa-link" />
                  <span class="website">
                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.amazon.com
                    </a>
                  </span>
                </div>
                <div class="desc">
                  <p>
                    Designed and developed scale management service to track WFM
                    scale inventory. Constructed 16+API endpoints to perform
                    CRUD operations on scale, store, region, and department
                    entities as well as provide statistics on scale uptime.
                  </p>
                </div>
                <ul class="technologies">
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
              </div>
              <img
                class="logo"
                alt="amazon logo"
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
              ></img>
            </div>
            <div></div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div class="title">
              <span class="position">
                Technical Intern: Visualization Development @ SAS
              </span>
              <span class="time">2021 - 2022</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div class="expanded">
              <div>
                <div class="info">
                  <FontAwesomeIcon icon="fa-location-dot" />
                  <span class="location">Cary, NC</span>
                  <FontAwesomeIcon icon="fa-link" />
                  <span class="website">
                    <a
                      href="https://www.sas.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.sas.com
                    </a>
                  </span>
                </div>
                <div class="desc">
                  <p>
                    Developed an interactive version of continuous legend for
                    the C++ Portable Graph Library that allows SAS product users
                    to interactively change color ramps to fit their dataset.
                    Color ramps are adjustable and data spread can be visualized
                    through a histogram.
                  </p>
                </div>
                <ul class="technologies">
                  <li>C++</li>
                  <li>Data Vizualization</li>
                  <li>Visual Analytics</li>
                  <li>SAS Viya</li>
                </ul>
              </div>
              <img
                class="logo"
                alt="sas logo"
                src="https://uploads-ssl.webflow.com/625447c67b621ab49bb7e3e5/630c680b57c56ab4982f01e6_sas-logo.png"
              ></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div class="title">
              <span class="position">
                Undergraduate Learning Assistant @ UNC-CH
              </span>
              <span class="time">2020 - 2021</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div class="expanded">
              <div>
                <div class="info">
                  <FontAwesomeIcon icon="fa-location-dot" />
                  <span class="location">Chapel Hill, NC</span>
                  <FontAwesomeIcon icon="fa-link" />
                  <span class="website">
                    <a
                      href="https://cs.unc.edu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      cs.unc.edu
                    </a>
                  </span>
                </div>
                <div class="desc">
                  <p>
                    Held over 160+ office hours with 200+ student interactions
                    for COMP 210: Data Structures. Assisted students with
                    conceptual data structures questions and debugging
                    programming assignments about a variety of data structures
                    including linked lists, stacks, heaps, binary trees,
                    self-balancing trees, and more.
                  </p>
                </div>
                <ul class="technologies">
                  <li>Java</li>
                  <li>Data Structures</li>
                </ul>
              </div>
              <img
                class="logo"
                alt=" logo"
                src="https://identity2.sites.unc.edu/wp-content/uploads/sites/885/2019/01/centered_logo.png"
              ></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default Work;
