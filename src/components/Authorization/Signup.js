import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import isEmpty from "validator/lib/isEmpty";

import { showSuccessMessage, showErrorMessage } from "../helpers/messages";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    successMsg: false,
    errorMsg: "",
    loading: false,
  });

  const [error, setError] = useState({});

  const {
    name,
    lastname,
    email,
    password,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMsg: "",
      successMsg: "",
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    //Validate inputs

    if (
      isEmpty(name) ||
      isEmpty(lastname) ||
      isEmpty(email) ||
      isEmpty(password)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
        successMsg: "",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email!",
        successMsg: "",
      });
    } else if (isStrongPassword(password)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords are not same",
        successMsg: "",
      });
    } else {
      let { name, lastname, email, password } = formData;
      let body = { name, lastname, email, password };

      const response = await Signup(body);
      if (response.errors) {
        setFormData({
          ...formData,
          errorMsg: response.errors,
          successMsg: "",
        });
      } else {
        setFormData({
          name: "",
          lastname: "",
          email: "",
          password: "",
          errorMsg: "",
          successMsg: response.data,
        });
      }
    }
  };

  const showSignupFrom = () => {
    return (
      <Form
        onSubmit={handleSubmit}
        className="signup__form     p-4 rounded rounded-5"
        noValidate
      >
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="John"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="lastname"
            value={lastname}
            type="text"
            placeholder="Doe"
          />
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="example@xyz.com"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="mb-2 auth-btn"
          type="submit"
          variant="outline-primary"
        >
          SignUp
        </Button>
        <p className="sub-info">
          Already have an account?
          <span>
            <Link to="/auth/login">Login</Link>
          </span>
        </p>
      </Form>
    );
  };

  return (
    // <Container>
    //   <Form className="signup__form  border border-2 border-dark p-4 rounded rounded-5">
    //     <Row className="row-cols-2">
    //       <Col>
    //         <Form.Group controlId="formBasicEmail">
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control type="text" placeholder="Name" />
    //         </Form.Group>
    //       </Col>
    //       <Col>
    //         <Form.Group controlId="formBasicEmail">
    //           <Form.Label>Last name</Form.Label>
    //           <Form.Control type="text" placeholder="Last name" />
    //         </Form.Group>
    //       </Col>
    //     </Row>

    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicCheckbox">
    //       <Form.Check type="checkbox" label="Check me out" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    // </Container>

    <div className="signup-form d-block my-3">
      <Container>
        <h3 className="text-center">Signup</h3>
        <Row>
          <Col md={12}>{showSignupFrom()}</Col>
          {errorMsg && (
            <Col md={12} className="mt-3">
              {showErrorMessage(errorMsg)}
            </Col>
          )}
          {successMsg && (
            <Col md={12} className="mt-3">
              {showSuccessMessage(successMsg)}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
