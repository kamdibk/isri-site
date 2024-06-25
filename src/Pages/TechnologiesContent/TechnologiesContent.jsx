import React, { useState, useEffect } from "react";
import "./TechnologiesContent.css";
import { motion } from "framer-motion";
import routesConfig from "../../Routes/routes";
import { useParams } from "react-router-dom";

const TechnologiesContent = () => {
  const { id } = useParams();
  const path = `technologies/${id}`;
  let content = routesConfig.Technologies.find((route) => route.path === path);
  content = content.content;

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {/* Hero component */}
      <div className="hero-main-component">
        <div
          className="inner-container"
          style={{
            backgroundImage: `url(${content.heroImageLink})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="head-container">
            <div className="head-comp-heading">
              <h1>{content.heading}</h1>
            </div>
            <div className="head-comp-text">
              {content.text} 
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologiesContent;
