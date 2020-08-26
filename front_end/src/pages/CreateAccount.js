import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      interests: [],
    };
  }

  // handle adding interests to array in state
  handleInterests = () => {};

  // form submission, link to main page of user
  handleSubmit = () => {};

  render() {
    return (
      <Container fluid>
        <br />
        <h1 className="text-center display-6">Create Account</h1>
        <br />
        <Row className="d-flex align-items-center flex-column justify-content-center bg-light">
          <Col md={6}>
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" id="firstName" />
              </FormGroup>
              <FormGroup>
                <Label for="lasName">Last Name</Label>
                <Input type="text" name="lasName" id="lasName" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password"
                />
              </FormGroup>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateAccount;
