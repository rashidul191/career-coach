import React from "react";

const Service = (props) => {
  const { name, img, price, videos, duration, description } = props.course;

  let shortDescription;
  if(description.length > 50){
    shortDescription = description.slice(0, 50)
  }
  return (
    <div className="col">
      <div className="card">
        <img src={require(`../../../../Images/services/${img}`)} alt="" />
        <div className="card-body">
          <h4>{name}</h4>
          <p>Price: $ {price}</p>
          <p>Videos: {videos}</p>
          <p>Duration: {duration}</p>
          <p>{shortDescription}</p>
          <button>Check Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
