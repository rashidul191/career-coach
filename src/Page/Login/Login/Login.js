import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const handleForgetPassword = async () => {
    // const email = event.target.email.value;

    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter email address");
    }
  };

  if (user) {
    navigate("/");
  }

  if (loading || sending) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
      <h3 className="text-center text-success mt-3">Please Login !!!</h3>
      <Form
        onSubmit={handleLoginFormSubmit}
        className="w-50 mx-auto border border-3 border-info my-4 p-5"
      >
        <p className="text-danger text-center">{error?.message}</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <p onClick={handleForgetPassword}>
          <span className="btn btn-link">Forget Password</span>
        </p>
        <ToastContainer />

        <Button className="w-50" variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="text-center">
        New User ? <Link to="/register">Please Register</Link>{" "}
      </p>

      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default Login;
