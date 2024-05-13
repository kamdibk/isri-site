import React, { useState, useEffect } from "react";
import "./OurClients.css";
import { OurClientsData } from "../../Data/OurClientsData.js";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions.js";
// Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const { width } = useWindowDimensions();
  const [itemSwitch, SetItemSwitch] = useState(false);
  const [noOfItems, setNoOfItems] = useState(6);
  useEffect(() => {
    if (width <= 820 && width >= 1200) {
      SetItemSwitch(true);
      setNoOfItems(6);
    } else if (width >= 820 && width <= 955) {
      setNoOfItems(7);
      SetItemSwitch(true);
    } else if (width >= 955 && width <= 1200) {
      SetItemSwitch(true);
      setNoOfItems(8);
    } else if (width <= 955 && width >= 760) {
      SetItemSwitch(true);
      setNoOfItems(6);
    } else if (width <= 760 && width >= 660) {
      SetItemSwitch(true);
      setNoOfItems(5);
    } else if (width <= 660) {
      setNoOfItems(4);
      SetItemSwitch(false);
    } else {
      SetItemSwitch(false);
      setNoOfItems(7);
    }
  }, [width]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: noOfItems,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <div className="ourclients-main-container">
      <div className="ourclients-inner-container">
        <div className="ourclients-left-container">
          <h4 className="heading-text-our-clients">OUR CLIENTS</h4>
          <div className="our-clients-text">
              <div className="text-first-div">
                We work each day with mutual respect to bring trust, value, and
                reliability to our clients.
              </div>
              <hr />
              <div>
                We work with a handful of restless leadership teams to help
                build businesses, brands, products and experiences for the
                customers of tomorrow.
              </div>
          </div>
        </div>
        <div className="ourclients-right-container">
          <Slider {...settings}>
            {itemSwitch
              ? OurClientsData.map((key) => {
                  return (
                    <div
                      className="our-clients-boxes inline-boxes"
                      key={key.key}
                    >
                      12
                    </div>
                  );
                })
              : OurClientsData.map((key) => {
                  return (
                    <div key={key.key}>
                      <div className="our-clients-boxes">12</div>
                      <div className="our-clients-boxes">12</div>
                    </div>
                  );
                })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
