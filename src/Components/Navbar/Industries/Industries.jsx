import React from "react";
import "./Industries.css";
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";
import { Link } from "react-router-dom";

const Industries = ({ toggleNavbar }) => {
  const { width } = useWindowDimensions();
  if (width >= 1090) {
    return (
      <div className="dropdown">
        <div className="dropdown-lvl-1">
          <div className="industries-image">{/* Image */}</div>
          <div className="services-links">
            <div style={{ padding: "10px" }}>
              <br />
              <span className="dropdown-heading">INDUSTRIES</span>
              <br />
              <br />
              <hr />
            </div>
            {/* list items */}
            <ul className="services-links-items">
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Medical & Healthcare
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Banking & Finance
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Media & Entertainment
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Retail & Wholesale
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Consumer Products
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Travel
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="#" style={{ alignItems: "center", display: "flex" }}>
                  Automotive
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="services-dropdown">
        <ul className="services-dropdown-links-items">
          <li>
            <Link
              to="#"
              style={{ alignItems: "center", display: "flex" }}
              onClink={toggleNavbar}
            >
              Medical & Healthcare
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Education
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Banking & Finance
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Media & Entertainment
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Retail & Wholesale
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Consumer Products
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Travel
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Real Estate
            </Link>
          </li>
          <li>
            <Link to="#" style={{ alignItems: "center", display: "flex" }}>
              Automotive
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default Industries;
