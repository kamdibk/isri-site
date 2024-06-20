import React, { useState, useEffect, useRef } from "react";
import "./HeroSlider.css";
import { heroSliderData } from "../../Data/HeroSliderData";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions.js";
// Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Framer Motion
import { motion, useInView } from "framer-motion";

const HeroSlider = () => {
  // Framer
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {

  }, [isInView]);

  const { width } = useWindowDimensions();
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const headingDivs = document.getElementsByClassName("sd-text");

    if (width <= 456) {
      setIsSmall(true);
      for (let i = 0; i < headingDivs.length; i++) {
        headingDivs[i].classList.add("small-text");
      }
    } else {
      setIsSmall(false);
      for (let i = 0; i < headingDivs.length; i++) {
        headingDivs[i].classList.remove("small-text");
      }
    }
  }, [width]);

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
            <motion.div
              ref={ref}
              key={key}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="hero-carousel-div">
                {key.logo}
                {key.heading}
              </div>
              <div className="hero-carousel-text">
                {key.text ? key.text : ""}
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
