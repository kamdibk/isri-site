import React, { useEffect, useState } from "react";
import "./ServicesContent.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
import useWindowDimensions from "../../Components/Hooks/WindowDimensions/useWindowDimensions";
import { motion } from "framer-motion";
const ServicesContent = () => {
  const { width } = useWindowDimensions();
  const [isActive, setIsActive] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [isWhiteColor, setWhiteColor] = useState(false);
  const [gridItems, setGridItems] = useState(6);

  const { id } = useParams();
  const path = `services/${id}`;
  let content = routesConfig.services.find((route) => route.path === path);
  content = content.content;
  const headingPoints = content.headPoints;
  const quote = content.quote.quote;
  const quoter = content.quote.quoter;
  const whyus = content.whyUs;
  const Technologies = content.Technologies;

  const returnBoxes = () => {
    if (id === "mobile-apps-development") {
      return null;
    }
    if (id === "ecommerce-solutions") {
      return Technologies.map((key, index) => {
        if (index < 4) {
          return <div className="box gray-box">{key}</div>;
        }
        return <div className="box">{key}</div>;
      });
    } else {
      return Technologies.map((key) => {
        return <div className="box">{key}</div>;
      });
    }
  };

  const changeGrid = isWide
    ? {
        gridTemplateColumns: `repeat(${gridItems},minmax(0,1fr))`,
      }
    : {};

  const changeToWhite = isWhiteColor
    ? {
        color: "white",
      }
    : {};

  useEffect(() => {
    if (id === "mobile-apps-development") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }

    if (
      id === "website-development" ||
      id === "crm-solutions" ||
      id === "web-design" ||
      id === "hire-developer" ||
      id === "ai-ml"
    ) {
      setWhiteColor(true);
    } else {
      setWhiteColor(false);
    }

    if (
      width > 766 &&
      (id === "website-development" ||
        id === "cms-solutions" ||
        id === "crm-solutions")
    ) {
      if (id === "crm-solutions") setGridItems(4);
      else setGridItems(5);
      setIsWide(true);
    } else {
      setGridItems(6);
      setIsWide(false);
    }
    returnBoxes();
  }, [id, width]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {content ? (
        <div className="services-content-main-container">
          <div className="services-content-container">
            <div
              className="services-pages-hero-image"
              style={{
                backgroundImage: `url(${content.heroImageLink})`,
              }}
            >
              <div className="services-page-hero-heading">
                <h1>{content.heading}</h1>
                <ul style={changeToWhite}>
                  {headingPoints.map((element, key) => {
                    return <li key={key}>{element}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="service-page-quote-container">
              <center className="service-page-container-quote">{quote}</center>
              <center className="service-page-quoter"> - {quoter}</center>
            </div>
            <div className="whychooseus-container">
              <div className="whychooseus-subcontainer">
                <h4 className="heading-text pt">WHY US ?</h4>
                <div className="whychooseus-rsn-blocks">
                  {whyus.map((key, index) => {
                    return (
                      <div
                        className="service-whychooseus-rsn-block"
                        key={index}
                      >
                        <div className="service-rsn-block-icon">{key.icon}</div>
                        <div className="service-rsn-block-heading">
                          {key.heading}
                        </div>
                        <div className="service-rsn-block-text">
                          {key.reason}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className={
                isActive
                  ? "service-page-technologies-main-container"
                  : "display-none"
              }
            >
              <div className="service-page-technologies-inner-container">
                <h4 className="service-page-heading">Technologies</h4>
                <div
                  className={"service-page-technologies-grid-container"}
                  style={changeGrid}
                >
                  {returnBoxes()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // End
        <h1>Content not found</h1>
      )}
    </motion.div>
  );
};

export default ServicesContent;
