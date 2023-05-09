import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Work from "./Work";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <AboutMe />
    <Work />
    <Projects />
    <Contact />
  </React.StrictMode>
);
