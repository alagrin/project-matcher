import React from "react";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import { Container, Jumbotron, Row, Col } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div>
    <NavBar/>
      <Jumbotron fluid>
        <Container fluid className="text-center">
          <h1 className="display-3">Project Matcher</h1>
          <p className="lead">
            Welcome to a new way to find new friends, collaborate on projects
            based on mutual interests!
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Login</h2>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
