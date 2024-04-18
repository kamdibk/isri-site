import React from "react";
import "./WhoWeAre.css";
const WhoWeAre = () => {
  return (
    <div className="whoweare-container">
      <div className="whoweare-container-left">
        <h4 style={{ 
            color: "blue", 
            fontWeight: "600", 
            margin: "2rem" 
            }}>
          WHO WE ARE
        </h4>
        <div
          style={{
            margin: "2rem",
            fontSize: "2.5rem",
            fontWeight: "600",
            fontFamily: "arial",
          }}
        >
          Highly Tailored IT Design,
          <br />
          Management & Support <br />
          Services.
        </div>
        <div style={{ 
            width: "90%", 
            margin: "2rem",

             }}>
          Accelerate innovation with world-class tech teams We’ll match you to
          an entire remote team of incredible freelance talent for all your
          software development needs.
        </div>
      </div>
      <div className="whoweare-container-right"></div>
    </div>
  );
};

export default WhoWeAre;
