import React from "react";
import img from "../../../../Images/thumbs.gif";
const Thanks = () => {
  return (
    <div className="container text-center">
      <div className="mb-3 text-center">
        <h3 className="my-3 text-info">Thanks</h3>
        <div
          style={{ height: "2px" }}
          className="w-25 bg-success mx-auto"
        ></div>
      </div>
      <img className=" w-50" src={img} alt="" />
    </div>
  );
};

export default Thanks;
