import React, { useEffect, useState } from "react";
import "./HeroSlider.css";
import www from "../../images/www.png";
import appIcon from "../../images/mobileAppIcon.png";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";
const HeroSlider = () => {
  const [iconSize, setIconSize] = useState(100);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 550 && width <= 1390) {
      setIconSize(80);
    } else if (width < 550) {
      setIconSize(60);
    }
  }, [width]);
  useEffect(() => {
    let slider = document.querySelector(".slider .list");
    let items = document.querySelectorAll(".slider .list .item");
    let lengthItems = items.length - 1;
    let active = 0;

    const next = () => {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };

    let refreshInterval = setInterval(() => {
      next();
    }, 3000);

    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + "px";
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next();
      }, 3000);
    }
  }, []);
  return (
    <div className="slider" id="slider">
      <div className="list" id="list">
        <div className="item" id="item">
          <div className="logo-and-text">
            <img src={www} height={iconSize} />
            <div className="sd-text">
              Responsive Website
              <br />
              to Scale Responsible
              <br />
              Bussiness
            </div>
          </div>
          {/* <p className="share-dev-text">
            Web applications which makes sharing, organizing and managing
            business information easy
          </p> */}
        </div>
        <div className="item" id="item">
          <div className="logo-and-text">
            <img src={www} height={iconSize} />
            <div className="sd-text">
              Artificial Intelligence <br />
              & Machine Learning
            </div>
          </div>
          {/* <p className="share-dev-text">
            Reliable Web-Site where you can handle most of the Bussiness Work
          </p> */}
        </div>
        <div className="item" id="item">
          <div className="logo-and-text">
            <img src={appIcon} height={iconSize} />
            <div className="sd-text">
              Digital Transformation <br />
              With a Human Touch
            </div>
          </div>
          {/* <p className="share-dev-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            dolores?
          </p> */}
        </div>
        <div className="item" id="item">
          <div className="logo-and-text">
            <img src={appIcon} height={iconSize} />
            <div className="sd-text">
              Enterprise
              <br />
              Mobile Solutions
            </div>
          </div>
          <p className="share-dev-text">
          Think Big, Think Different with our Mobile Solutions
          </p>
        </div>
        <div className="item" id="item">
          <div className="logo-and-text">
            <img src={appIcon} height={iconSize} />
            <div className="sd-text">
                E-Commerce Is Way More <br />
                Than Online Shopping
            </div>
          </div>
          <p className="share-dev-text">
               Transformation Solutions to grow your E-Commerce Business
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
