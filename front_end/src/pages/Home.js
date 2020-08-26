import React from "react";
import LoginForm from "../components/LoginForm";
import { Container, Jumbotron, Row, Col } from "reactstrap";

function Home() {
  return (
    <div>
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
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h2 className="text-center">Login</h2>
            <LoginForm />
          </Col>
        </Row>
        <div></div>
      </Container>
    </div>
  );
}

export default Home;
