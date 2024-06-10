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
  console.log(content.heroImageLink)
  return (
    <>
      {content ? (
        <div className="services-content-main-container">
          <div className="services-content-container">
            <div className="services-pages-hero-image"
              style={{ backgroundImage: `url(${content.heroImageLink})`,backgroundSize:"cover"}}>
                <div className="services-page-hero-heading">
                  <h2>{content.heading}</h2>
                </div>
              {/* {
              headingPoints.map((element, key) => {
                return (<h3 key={key}>{element}</h3>)
              })
              } */}
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
