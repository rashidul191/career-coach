import React from "react";
import { useNavigate } from "react-router-dom";
import useCoach from "../../../hook/useCoach";
import Service from "./Service/Service";

const Services = () => {
  const navigate = useNavigate();
  const [courses] = useCoach();
  

  const handleCheckOut = (serviceId) => {
    navigate(`/service/${serviceId}`);
  
  };
  return (
    <div className="container my-5">
      <div className="mb-3 text-center">
        <h2 className=" text-info">Our Services</h2>
        <div
          style={{ height: "2px" }}
          className="w-25 bg-success mx-auto"
        ></div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {courses.map((course) => (
          <Service
            key={course.id}
            course={course}
            handleCheckOut={handleCheckOut}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
