import React, { Component } from 'react';
import './slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class OurSlider extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
      	 <div className="slider-name picture-darkmount item">
        	 <p>Unique and Modern Design</p>
          	<h1>Portfolio PSD Template</h1>
          	<p className="description">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
          	<button>GET STARTED</button>
          </div>
          <div className="slider-name picture-mount item">
            <p>Unique and Modern Design</p>
            <h1>Portfolio PSD Template</h1>
            <p className="description">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            <button>GET STARTED</button>
          </div>
        </Slider>
      </div>
    );
  }
}

export default OurSlider;