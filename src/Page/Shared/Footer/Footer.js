import React from "react";
// import { Nav } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center py-5 mt-5 bg-dark">
      <p className="text-info">
        copyright &copy; {currentYear}{" "}
        {/* <Nav.Link
          className="text-warning"
          target="_blank"
          href="https://github.com/rashidul191"
        >
          Rashidul
        </Nav.Link>{" "} */}
      </p>
    </div>
  );
};

export default Footer;
