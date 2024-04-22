import React, { useEffect, useState } from "react";
import "./WhoWeAre.css";
import sign from "../../images/sign.png";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";

const WhoWeAre = () => {
  const [showDiv, setShowDiv] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 990) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  }, [width]);
  return (
    <div className="whoweare-container">
      <div className="whoweare-subcontainer">
        <div className="whoweare-contant">
          <div className="whoweare-container-left">
            <h4 className="whoweare-heading-txt">WHO WE ARE</h4>
            <div className="whoweare-sub-txt">
              Highly Tailored IT Design,
              <br />
              Management & Support <br />
              Services.
            </div>
            <div className="whoweare-text">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent for all
              your software development needs.
            </div>
            <div className="inner-div">
              <div className="inner-div-child-left">
                <div className="who-we-are-left-sign">
                  <img src={sign} alt="sig" className="sign-img" />
                </div>
                <div className="who-we-are-left-name">Lorem Bhau</div>
                <div className="who-we-are-left-desig">CEO, Somewhere</div>
              </div>
              <div className="inner-div-child-right">
                <div className="who-we-are-text">Call to ask any question</div>
                <div className="who-we-are-num">+91 90825 82243</div>
              </div>
            </div>
          </div>
          <div className="whoweare-container-right">
            {showDiv ? (
              <div className="show-div">
                <div className="whoweare-container-right-img1"></div>
                <div className="whoweare-container-right-img2"></div>
              </div>
            ) : (
              <>
                <div className="whoweare-container-right-img1"></div>
                <div className="whoweare-container-right-img2"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
