import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner/banner-1.png";
import banner2 from "../../../Images/banner/banner-2.png";
import banner3 from "../../../Images/banner/banner-3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Learning that gets you</h3>
          <p>Skills for your present (and your future). Get started with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Change your life</h3>
          <p>
            Build yourself up efficiently through all the affordable courses in
            Dragon Learning.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Got stuck? We will always be there for you.</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
