import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import isEmpty from "validator/lib/isEmpty";
import { loggingIn } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";
import AppsIcon from "@material-ui/icons/Apps";

import { showSuccessMessage, showErrorMessage } from "../helpers/messages";

const Signup = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    successMsg: false,
    errorMsg: "",
    loading: false,
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [error, setError] = useState({});

  const { email, password, successMsg, errorMsg, loading } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMsg: "",
      successMsg: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validate inputs
    if (isEmpty(email) || isEmpty(password)) {
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
      let { email, password } = formData;
      let body = { email, password };
      console.log(body);
      await dispatch(loggingIn(body));
      if (user) {
        history.push("/home");
      }
      console.log(user);

      // const response = await Signup(body);
      // if (response.errors) {
      //   setFormData({
      //     ...formData,
      //     errorMsg: response.errors,
      //     successMsg: "",
      //   });
      // } else {
      //   setFormData({
      //     email: "",
      //     password: "",
      //     errorMsg: "",
      //     successMsg: response.data,
      //   });
      // }
    }
  };

  const showSignupFrom = () => {
    return (
      <Form
        onSubmit={handleSubmit}
        className="login__form     p-4 mt-5 rounded rounded-5"
        noValidate
      >
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={email}
            type="text"
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
          Login
        </Button>
        <p className="sub-info">
          crete an account,
          <span>
            <Link to="/auth/login"> Sign up</Link>
          </span>
        </p>
      </Form>
    );
  };

  return (
    <div className="signup-form d-block my-3">
      <Container>
        <h3 className="text-center">
          Login
          <br /> <AppsIcon />
        </h3>

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
