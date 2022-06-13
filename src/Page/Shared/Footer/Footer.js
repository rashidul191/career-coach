import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center py-5 mt-5 bg-dark">
      <p className="text-info">
        copyright &copy; {currentYear} Rashidul
      </p>
    </div>
  );
};

export default Footer;
