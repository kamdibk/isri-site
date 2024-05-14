import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
import { MdPhone } from "react-icons/md";
import {
  AiOutlineMail,
  AiFillSetting,
  AiFillCloud,
  AiOutlineMobile,
  AiOutlineDesktop,
  AiOutlineClose,
} from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsCart4, BsLaptop, BsFillPeopleFill } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";
import { RiMotorbikeFill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { TbRobot } from "react-icons/tb";
import { GiArtificialIntelligence, GiHamburgerMenu } from "react-icons/gi";
import useWindowDimensions from "./../Hooks/WindowDimensions/useWindowDimensions";
import SubNav from "./Services/SubNav";
import AboutUs from "./AboutUS/AboutUs";
import Industries from "./Industries/Industries";
import Technologies from "./Technologies/Technologies";

const Navbar = () => {
  const [dropdownNav, setDropdownNav] = useState(false);
  const {width } = useWindowDimensions();
  const toggleDropdown = () => {
    setDropdownNav(!dropdownNav);
  };

  useEffect(() => {
    function handleToggleService() {
      if (width > 1390) {
        setDropdownNav(false);
      }
    }
    window.addEventListener("resize", handleToggleService);
  },[width]);

  return (
    <div className="fixed-nav">
      <nav className="navbar">
        <div className="com-logo" style={{ marginLeft: "10px" }}>
          <img src={Logo} alt="ISRI Logo" className="isri-logo" height={45} />
        </div>
        <div className="nav-links">
          <ul className="nav-links-items">
            <li>
              <a href="#">SERVICES</a>
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
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <AiFillSetting
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Software Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <BsCart4 size={20} style={{ marginRight: "10px" }} />
                          eCommerce Solutions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <AiOutlineMobile
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Mobile Apps Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <AiFillCloud
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Cloud Solution
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <AiOutlineDesktop
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Website Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <BsLaptop size={20} style={{ marginRight: "10px" }} />
                          CMS Solutions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <FaHandshake
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          CRM Solutions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <IoEarthOutline
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Web Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <BsFillPeopleFill
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Hire Developer
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <RiMotorbikeFill
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Ride Booking
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <GrGamepad
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          Gaming Solution
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <GiArtificialIntelligence
                            size={20}
                            style={{ marginRight: "10px" }}
                          />
                          AI/ML
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{ alignItems: "center", display: "flex" }}
                        >
                          <TbRobot size={20} style={{ marginRight: "10px" }} />
                          Robotic Process Automation
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="services-image"></div> */}
                </div>
              </div>
            </li>
            <li>
              <a href="#">TECHNOLOGIES</a>
              <Technologies />
            </li>
            <li>
              <a href="#">INDUSTRIES</a>
              <Industries/>
            </li>
            <li>
              <a href="#">ABOUT US</a>
              <AboutUs/>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">CASE STUDY</a>
            </li>
            <li>
              <a href="#">BLOCK</a>
            </li>
          </ul>
        </div>
        <div className="com-contacts">
          <div className="contact" style={{ borderBottom: "1px solid gray" }}>
            <MdPhone size={27} style={{ marginRight: "10px" }} color={"red"} />
            <span className="contact-number">IN : +91-90825 82243</span>
          </div>
          <div className="contact">
            <AiOutlineMail
              size={27}
              style={{ marginRight: "10px" }}
              color={"red"}
            />
            <span className="contact-email">info@isritechnologies.com</span>
            <div className="contact hamIcon" onClick={toggleDropdown}>
              {dropdownNav ? (
                <AiOutlineClose size={25} />
              ) : (
                <GiHamburgerMenu size={25} />
              )}
            </div>
          </div>
        </div>
        <div className="mobile-ham-icon" onClick={toggleDropdown}>
          {dropdownNav ? (
            <AiOutlineClose size={25} className="rotetateclose" />
          ) : (
            <GiHamburgerMenu size={25} />
          )}
        </div>
      </nav>
      {dropdownNav ? <SubNav /> : null}
    </div>
  );
};

export default Navbar;