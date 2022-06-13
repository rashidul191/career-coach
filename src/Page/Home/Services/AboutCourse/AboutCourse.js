import React from "react";
import { Link, useParams } from "react-router-dom";
import useCoach from "../../../../hook/useCoach";

const AboutCourse = () => {
  const { serviceId } = useParams();
  const [courses] = useCoach();

  const serviceDetails = courses.find((course) => course.id === serviceId);
  return (
    <div className="container mb-5">
      <div className="my-4">
        <h2 className="text-center text-info">About Course</h2>
        <div
          style={{ height: "2px" }}
          className="w-25 bg-success mx-auto"
        ></div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 bg-light">
            <div className="col">
              {/* <img
              src={require(`../../../../Images/services/${serviceDetails?.img}`)}
              alt=""
            /> */}
              <img className="img-fluid" src={serviceDetails?.img} alt="" />
            </div>
            <div className="col p-4 rounded">
              <h5>{serviceDetails?.name}</h5>
              <hr />
              <p className="m-0">
                Price: ${" "}
                <span className="text-warning">{serviceDetails?.price}</span>{" "}
              </p>
              <p className="m-0">
                Videos:{" "}
                <span className="text-success">
                  {serviceDetails?.videos} Hours
                </span>
              </p>
              <hr />
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <p>{serviceDetails?.description}</p>
          </div>
        </div>

        <div className="col-md-4 border p-5">
          <div className="text-center">
            <h2>$ {serviceDetails?.price}</h2>
            <Link to="/check-out-page">
        <button className="btn btn-primary mt-3">Buy Now Course</button></Link>
          </div>
          <hr />
          <h5>Videos: {serviceDetails?.videos}</h5>
          <hr />
          <h5>Duration: {serviceDetails?.duration} Hour</h5>
          <hr />
          <h5>Certificate: Yes</h5>
          <hr />
          <h4 className="text-center text-success">Emergency</h4>
          <p className="lead">Call: 0123456789</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
