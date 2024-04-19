import React from "react";
import "./WhoWeAre.css";
import sign from '../../images/sign.png'
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
            margin: "2rem 2rem 1.2rem 2rem",
            lineHeight:"30px",
            color:"rgb(76, 77, 86)",
            fontFamily:"Jost"
             }}>
          Accelerate innovation with world-class tech teams We’ll match you to
          an entire remote team of incredible freelance talent for all your
          software development needs.
        </div>
        <div className="inner-div">
            <div className="inner-div-child-left">
              <div className="who-we-are-left-sign">
                <img src={sign} alt="sig" />
              </div>
              <div className="who-we-are-left-name">
                Lorem Bhau
              </div>
              <div className="who-we-are-left-desig">
                CEO, Somewhere
              </div>
            </div>
            <div className="inner-div-child-right">
                <div className="who-we-are-text">
                  Call to ask any question
                </div>
                <div className="who-we-are-num">
                    +91 90825 82243
                </div>
            </div>
        </div>
      </div>
      <div className="whoweare-container-right"></div>
    </div>
  );
};

export default WhoWeAre;
