import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import auth from "../../../firebase.init";
import CustomLink from "./CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth)
  }
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
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
              <CustomLink to="/blogs">Blogs</CustomLink>
            </Nav.Link>

            {user ? (
              <button onClick={handleSignOut} className="btn btn-danger">Sign Out</button>
            ) : (
              <Nav>
                <Nav.Link className="mx-3">
                  <CustomLink to="/login">Login</CustomLink>
                </Nav.Link>

                <Nav.Link className="mx-3">
                  <CustomLink to="/register">Sign Up</CustomLink>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
