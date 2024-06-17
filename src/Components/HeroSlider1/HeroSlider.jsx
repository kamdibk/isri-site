import React, { useState, useEffect } from "react";
import "./HeroSlider.css";
import { heroSliderData } from "../../Data/HeroSliderData";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions.js";
// Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const {width} = useWindowDimensions()
  const [isSmall, setIsSmall] = useState(false)
  useEffect(()=>{
    // if(width>=456){
    //   setIsSmall(true)
    //   const headingDiv = document.getElementsByClassName("sd-text");
    //   headingDiv.classList.add('small-text');
    // }
    // else{
    //     setIsSmall(false)
    // }
    const headingDivs = document.getElementsByClassName("sd-text");

    if (width <= 456) {
      setIsSmall(true);
      for (let i = 0; i < headingDivs.length; i++) {
        headingDivs[i].classList.add('small-text');
      }
    } else {
      setIsSmall(false);
      for (let i = 0; i < headingDivs.length; i++) {
        headingDivs[i].classList.remove('small-text');
      }
    }
  },[width])
  
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    swipeToSlide: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {heroSliderData.map((key) => {
          return (
            <div key={key}>
              <div className="hero-carousel-div">
                {key.logo}
                {key.heading}
              </div>
              <div className="hero-carousel-text">
                {key.text ? key.text : ""}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
