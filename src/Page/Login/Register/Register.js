import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (user) {
    navigate("/");
  }

  let errorElement;
  const handleRegisterSubmitForm = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword && password.length > 6) {
      console.log(name, email, password, confirmPassword);
      createUserWithEmailAndPassword(email, password);
    } else {
      errorElement = (
        <p className="text-center text-danger">Password more then 6 letter</p>
      );
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container">
      <h3 className="text-center text-success mt-3">Please Register !!!</h3>
      <Form
        onSubmit={handleRegisterSubmitForm}
        className="w-50 mx-auto border border-3 border-info my-4 p-5"
      >
        {errorElement}
        <Form.Group className="mb-3" controlId="formBasicName">
          <p className="text-danger text-center mb-2">{error?.message}</p>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree With Trams & Condition" />
        </Form.Group>

        <Button className="w-50" variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <p className="text-center">
        Already Have a Account ? <Link to="/login">Please Login</Link>{" "}
      </p>

      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default Register;
