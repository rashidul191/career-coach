import React from "react";

import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckOutPages = () => {
    const navigate = useNavigate()

    const handleCheckOut = (event)=>{
        event.preventDefault();
        navigate("/thanks")
    }
  return (
    <div className="container">
      <div className="mb-3 text-center">
        <h3 className="my-3 text-info">Check Out</h3>
        <div
          style={{ height: "2px" }}
          className="w-25 bg-success mx-auto"
        ></div>
      </div>

      <div>
        <Form onSubmit={handleCheckOut} className="w-75 mx-auto border border-3 border-warning p-5">
          <h3 className="text-center mb-4">Payment Info</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Control type="text" name="address" placeholder="Enter address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicZipCode">
            <Form.Control type="text" name="zipCode" placeholder="Zip Code" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control type="text" name="phone" placeholder="Phone Number" />
          </Form.Group>

          <Button className="w-100" variant="success" type="submit">
            Check Out
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckOutPages;
