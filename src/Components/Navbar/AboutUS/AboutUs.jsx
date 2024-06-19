import React from "react";
import "./AboutUs.css";
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";
import { Link } from "react-router-dom";

const AboutUs = (props) => {
  const { width } = useWindowDimensions();
  if (width >= 1090) {
    return (
      <div className="dropdown">
        <div className="dropdown-lvl-1 right-space">
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
            <ul className="services-links-items">
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Company
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Partners & Awards
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Clients Testimonials
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Development Approach
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Communication Strategy
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Social Responsibility
                </Link>
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
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Company
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Partners & Awards
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Clients Testimonials
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Development Approach
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Communication Strategy
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Social Responsibility
                </Link>
              </li>
        </ul>
      </div>
    )
  }
};

export default AboutUs;
