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
import Services from "./Services/Services";

const Navbar = () => {
  const [dropdownNav, setDropdownNav] = useState(false);
  const { width } = useWindowDimensions();

  const toggleDropdown = () => {
    setDropdownNav(!dropdownNav);
  };

  useEffect(() => {
    function handleToggleService() {
      if (width > 1090) {
        setDropdownNav(false);
      }
    }
    window.addEventListener("resize", handleToggleService);
  }, [width]);

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
              <Services />
            </li>
            <li>
              <a href="#">TECHNOLOGIES</a>
              <Technologies />
            </li>
            <li>
              <a href="#">INDUSTRIES</a>
              <Industries />
            </li>
            <li>
              <a href="#">ABOUT US</a>
              <AboutUs />
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
          <div
            className="contact"
            style={{ borderBottom: "1px solid gray", cursor: "pointer" }}
          >
            <MdPhone size={27} style={{ marginRight: "10px" }} color={"red"} />
            <span className="contact-number">IN : +91-90825 82243</span>
          </div>
          <div className="contact">
            <AiOutlineMail
              size={27}
              style={{ marginRight: "10px", cursor: "pointer" }}
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
