import React from "react";
import "./ServicesContent.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";

const ServicesContent = () => {
  const { id } = useParams();
  const path = `services/${id}`;
  let content = routesConfig.services.find((route) => route.path === path);
  content = content.content;
  let headingPoints = content.headPoints;
  return (
    <>
      {content ? (
        <div className="services-content-main-container">
          <div className="services-content-container">
            <div
              className="services-pages-hero-image"
              style={{
                backgroundImage: `url(${content.heroImageLink})`,
                backgroundSize: "cover",
                backgroundRepeat:"no-repeat"
              }}
            >
              <div className="services-page-hero-heading">
                <h1>{content.heading}</h1>
                <ul>
                {headingPoints.map((element, key) => {
                  return (
                      <li key={key}>{element}</li>
                  );
                })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Content not found</h1>
      )}
    </>
  );
};

export default ServicesContent;
