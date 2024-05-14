import React from "react";
import "./Technologies.css";
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";
// Icons
import { FaMagento, FaShopify, FaOpencart, FaWix } from "react-icons/fa";
import { SiWoo, SiBigcommerce } from "react-icons/si";

// End
const Technologies = () => {
  const { width } = useWindowDimensions();
  const iconSize = 23;
  if (width > 1390) {
    return (
      <div className="dropdown" style={{ display: "block" }}>
        <div className="dropdown-lvl-1">
          <div className="services-links">
            <div style={{ padding: "10px" }}>
              <br />
              <span className="dropdown-heading">TECHNOLOGIES</span>
              <br />
              <br />
              <hr />
            </div>
            {/* list items */}
            <div className="technologies-container">
              <div className="technologies-inner-container">
                <div>
                  <span className="technologies-heading">
                    eCommerce Services
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaMagento color="red" size={iconSize} /> Mangento
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaShopify color="green" size={iconSize} /> Shopify
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaShopify size={iconSize} /> Shopify Plus
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaOpencart color="blue" size={iconSize} /> OpenCart
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiWoo color="voilet" size={iconSize} /> WooCommerce
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiBigcommerce size={iconSize} /> BigCommerce
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaWix size={iconSize} /> Wix
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container"></div>
              <div className="technologies-inner-container"></div>
              <div className="technologies-inner-container"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="services-dropdown"></div>;
  }
};

export default Technologies;
