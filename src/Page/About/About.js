import React from "react";
import img from "../../Images/rashidul.png";
const About = () => {
  return (
    <div className="container">
      <div className="my-4">
        <h2 className="text-center text-info">About Me</h2>
        <div
          style={{ height: "2px" }}
          className="w-25 bg-success mx-auto"
        ></div>
      </div>
      <div>
        <div className="text-center">
          <img className="img-fluid rounded-pill" src={img} alt="" />
        </div>
        <h3>Md Rashidul Islam</h3>
        <p>
          Hi, I am Rashidul Islam. I am a web developer. I am studying at the
          Green University of Bangladesh, Department of CSE. My main goal is to
          get a web developer job. That why I retake again to learn the complete
          web development course in programming here. Insha Allah, This time I
          reach my main goal.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
