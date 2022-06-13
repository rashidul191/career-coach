import React from "react";

const Service = (props) => {
  const { handleCheckOut, course } = props;
  const { name, img, price, videos, duration, description, id } = course;

  return (
    <div className="col">
      <div className="card">
        {/* <img src={require(`../../../../Images/services/${img}`)} alt="" /> */}
        <img className="img-fluid" src={img} alt="" />
        <div className="card-body">
          <h5>{name}</h5>
          <p className="m-0">
            Price: $ <span className="text-warning">{price}</span>
          </p>
          <p className="m-0">
            Videos: <span className="text-info">{videos} Hours</span>
          </p>
          <p>
            Duration: <span className="text-success">{duration}</span>{" "}
          </p>
          <p>{description.slice(0, 50)}.....</p>
          <button
            onClick={() => handleCheckOut(id)}
            className="btn btn-success"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
