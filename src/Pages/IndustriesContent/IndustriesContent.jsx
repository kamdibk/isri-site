import React, { useRef } from "react";
import "./IndustriesContent.css";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
// import axios from "axios";

const IndustriesContent = () => {
  const { id } = useParams();
  const path = `industries/${id}`;
  const content = routesConfig.industries.find(
    (route) => route.path === path
  ).content;

  // Initial state for alternating rendering
  let isEven = false;

  return (
    <motion.div
      className="hero-main-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {content.divs.map((key, index) => {
        isEven = !isEven;
        const dynamicFlexDirection = isEven
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" };

        return (
          <div
            key={index}
            className="hero-inner-container"
            style={dynamicFlexDirection}
          >
            <div className="inner-left">
              <h2>{key.heading}</h2>
              <span className="text-span">{key.text}</span>
            </div>
            <div className="inner-right"><img src={`${key.image}`} alt="" /></div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default IndustriesContent;
