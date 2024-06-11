import React from "react";
import "./ServicesContent.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";

const ServicesContent = () => {
  const { id } = useParams();
  const path = `services/${id}`;
  let content = routesConfig.services.find((route) => route.path === path);
  content = content.content;
  const headingPoints = content.headPoints;
  const quote = content.quote.quote;
  const quoter = content.quote.quoter;
  const whyus = content.whyUs;

  return (
    <>
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
                <ul>
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
                <h4 className="heading-text">WHY US ?</h4>
                <div className="whychooseus-rsn-blocks">
                  {whyus.map((key) => {
                    return (
                      <div className="whychooseus-rsn-block" key={key}>
                        <div className="rsn-block-icon">{key.icon}</div>
                        <div className="rsn-block-heading">{key.heading}</div>
                        <div className="rsn-block-text">{key.reason}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // End
        <h1>Content not found</h1>
      )}
    </>
  );
};

export default ServicesContent;
