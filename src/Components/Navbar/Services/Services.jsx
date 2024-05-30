import React from "react";
import {
  AiFillSetting,
  AiFillCloud,
  AiOutlineMobile,
  AiOutlineDesktop,
} from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsCart4, BsLaptop, BsFillPeopleFill } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";
import { RiMotorbikeFill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { TbRobot } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

const Services = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-lvl-1">
        <div className="services-image">{/* Image */}</div>
        <div className="services-links">
          <div style={{ padding: "10px" }}>
            <br />
            <span className="dropdown-heading">SERVICES</span>
            <br />
            <br />
            <hr />
          </div>
          {/* list items */}
          <ul className="services-links-items">
            <li>
              <a href="services/softwaredevelopment" style={{ alignItems: "center", display: "flex" }}>
                <AiFillSetting
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="orange"
                />
                Software Development
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <BsCart4
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="green"
                />
                eCommerce Solutions
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <AiOutlineMobile size={20} style={{ marginRight: "10px" }} />
                Mobile Apps Development
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <AiFillCloud
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="skyblue"
                />
                Cloud Solution
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <AiOutlineDesktop
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="blue"
                />
                Website Development
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <BsLaptop size={20} style={{ marginRight: "10px" }} />
                CMS Solutions
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <FaHandshake
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="#1a6ad9"
                />
                CRM Solutions
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <IoEarthOutline
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="red"
                />
                Web Design
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <BsFillPeopleFill
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="skyblue"
                />
                Hire Developer
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <RiMotorbikeFill size={20} style={{ marginRight: "10px" }} />
                Ride Booking
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <GrGamepad
                  size={20}
                  color="gray"
                  style={{ marginRight: "10px" }}
                />
                Gaming Solution
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <GiArtificialIntelligence
                  size={20}
                  style={{ marginRight: "10px" }}
                />
                AI/ML
              </a>
            </li>
            <li>
              <a href="#" style={{ alignItems: "center", display: "flex" }}>
                <TbRobot
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="#1a6403"
                />
                Robotic Process Automation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
