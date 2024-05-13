import React from "react";
import "./AboutUs.css";
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";

const AboutUs = (props) => {
  const { width } = useWindowDimensions();
  if (width > 1390) {
    return (
      <div className="dropdown">
        <div className="dropdown-lvl-1">
          <div className="aboutus-image">{/* Image */}</div>
          <div className="services-links">
            <div style={{ padding: "10px" }}>
              <br />
              <span className="dropdown-heading">ABOUT US</span>
              <br />
              <br />
              <hr />
            </div>
            {/* list items */}
            <ul className={props.classname2}>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Company
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Partners & Awards
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Clients Testimonials
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Development Approach
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Communication Strategy
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Social Responsibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return(
        <div className="services-dropdown">
        <ul className="services-dropdown-links-items">
        <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Company
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Partners & Awards
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Clients Testimonials
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Development Approach
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Communication Strategy
                </a>
              </li>
              <li>
                <a href="#" style={{ alignItems: "center", display: "flex" }}>
                  Social Responsibility
                </a>
              </li>
        </ul>
      </div>
    )
  }
};

export default AboutUs;
