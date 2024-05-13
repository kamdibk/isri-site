import React from 'react'
import './Industries.css'
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";

const Industries = (props) => {
    const { width } = useWindowDimensions();
    if (width > 1390) {
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
              <ul className={props.classname2}>     
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Medical & Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Banking & Finance
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Media & Entertainment
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Retail & Wholesale
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Consumer Products
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Travel
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Automotive
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
                    Medical & Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Banking & Finance
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Media & Entertainment
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Retail & Wholesale
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Consumer Products
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Travel
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" style={{ alignItems: "center", display: "flex" }}>
                    Automotive
                  </a>
                </li>
          </ul>
        </div>
      )
    }
}

export default Industries