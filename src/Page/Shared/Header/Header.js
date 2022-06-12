import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CustomLink from "./CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <CustomLink to="/">
          {" "}
          <Navbar.Brand>Career-Coach</Navbar.Brand>
        </CustomLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-3">
              {" "}
              <CustomLink to="/home">Home</CustomLink>{" "}
            </Nav.Link>
            <Nav.Link className="mx-3">
              <CustomLink to="/about">About</CustomLink>
            </Nav.Link>

            <Nav.Link className="mx-3">
              <CustomLink to="/block">Block</CustomLink>
            </Nav.Link>

            <Nav.Link className="mx-3">
              <CustomLink to="/login">Login</CustomLink>
            </Nav.Link>

            <Nav.Link className="mx-3">
              <CustomLink to="/registration">Sign Up</CustomLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
