import React, { Fragment } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = () => {
  return (
    <Fragment>
      <Form className="align-items-center flex-column">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
        <br />
        <br />
        <a href="/create">Create Account</a>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
