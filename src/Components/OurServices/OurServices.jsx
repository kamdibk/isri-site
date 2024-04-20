import React, { useEffect, useState } from "react";
import "./OurServices.css";
import { BsShieldLock } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineCloud } from "react-icons/ai";
import { SiBlockchaindotcom } from "react-icons/si";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// End

const OurServices = () => {
  const clr = "#07597F";
  return (
    <div className="ourservices-main-container">
      <center className="ourservices-main-center">
          <div className="ourservices-item">
            <div className="ourservices-icon">
              <GrTechnology size={60} color={clr} />
            </div>
            <div className="ourservices-heading">
              <h2>
                Infrastructure
                <br />
                Technology
              </h2>
            </div>
            <div className="ourservices-text">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </div>
            <div className="ourservices-button">
              <BiPlus size={30} color="blue" style={{ marginRight: "20px" }} />{" "}
              {"   "} Read More
            </div>
          </div>
          <div className="ourservices-item">
            {" "}
            <div className="ourservices-icon">
              <BsShieldLock size={60} color={clr} />
            </div>
            <div className="ourservices-heading">
              <h2>
                Infrastructure
                <br />
                Technology
              </h2>
            </div>
            <div className="ourservices-text">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </div>
            <div className="ourservices-button">
              <BiPlus size={30} color="blue" style={{ marginRight: "20px" }} />{" "}
              {"   "} Read More
            </div>
          </div>
          <div className="ourservices-item">
            {" "}
            <div className="ourservices-icon">
              <AiOutlineCloud size={60} color={clr} />
            </div>
            <div className="ourservices-heading">
              <h2>
                Cloud managed
                <br />
                services
              </h2>
            </div>
            <div className="ourservices-text">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </div>
            <div className="ourservices-button">
              <BiPlus size={30} color="blue" style={{ marginRight: "20px" }} />{" "}
              {"   "} Read More
            </div>
          </div>
          <div className="ourservices-item">
            {" "}
            <div className="ourservices-icon">
              <SiBlockchaindotcom size={60} color={clr} />
            </div>
            <div className="ourservices-heading">
              <h2>
                Blockchain
                <br />
                Technology
              </h2>
            </div>
            <div className="ourservices-text">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </div>
            <div className="ourservices-button">
              <BiPlus size={30} color="blue" style={{ marginRight: "20px" }} />{" "}
              {"   "} Read More
            </div>
          </div>
      </center>
    </div>
  );
};

export default OurServices;
