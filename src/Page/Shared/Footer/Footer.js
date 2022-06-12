import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center py-5 mt-5 bg-dark">
      <p className="text-info">
        copyright &copy; {currentYear}{" "}
        <a
          className="text-warning"
          target="_blank"
          href="https://github.com/rashidul191"
        >
          Rashidul
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
