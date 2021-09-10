import React from "react";
import flower from "../img/pexels-danielle-rangel-946126-removebg-preview.png";
import tshirt from '../img/lamp.png'
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <div className="slider"></div>
        <Carousel.Caption>
          <div className="slider-heading">
            <h2 className='slide-cap'>New</h2> <span className='slide-cap2'>Arrivals</span>
          </div>
          <div className="slider-heading2">
            <h1>SKY PLANTER</h1> <span>$18.00</span>
          </div>
          <img className='img1' src={flower} alt="flower" />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="slider"></div>
        <Carousel.Caption>
          <div className="slider-heading">
            <h2 className='slide-cap'>New</h2> <span className='slide-cap2'>Arrivals</span>
          </div>
          <div className="slider-heading2">
            <h1>TABLE LAMP</h1> <span>$50.00</span>
          </div>
          <img className='img1' src={tshirt} alt="flower" />
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default Slider;
