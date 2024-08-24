import * as React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="jumbotron">
      <h1 className="name">Robert Gan</h1>
      <h1 className="title">Software Engineer</h1>
    </Container>
  );
}
export default Home;
