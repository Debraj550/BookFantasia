import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./books.png";
import img2 from "./book3.jpg";
import img3 from "./book2.jpg";
import "./slider.css";

function Slider() {
  return (
    <div>
      <Carousel className="container mt-3 mb-3 ">
        <Carousel.Item className="slide-item">
          <img className="d-flex w-100" src={img2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="slide-item">
          <img className="d-flex w-100" src={img3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="slide-item">
          <img className="d-flex w-100" src={img1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
