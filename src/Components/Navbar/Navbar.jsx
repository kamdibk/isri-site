import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
import { MdPhone } from "react-icons/md";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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
      if (width >= 1090) {
        setDropdownNav(false);
      }
    }
    window.addEventListener("resize", handleToggleService);
  }, [width]);

  return (
    <div className="fixed-nav" style={{zIndex:"100"}}>
      <nav className="navbar">
        <Link to="/">
          <div className="com-logo" style={{ marginLeft: "10px",cursor:"pointer" }}>
            <img src={Logo} alt="ISRI Logo" className="isri-logo" height={45} />
          </div></Link>
        <div className="nav-links">
          <ul className="nav-links-items">
            <li>
              SERVICES
              <Services />
            </li>
            <li>
              TECHNOLOGIES
              <Technologies />
            </li>
            <li>
              INDUSTRIES
              <Industries />
            </li>
            <li>
              ABOUT US
              <AboutUs />
            </li>
            <li>
              <Link to="portfolio">PORTFOLIO</Link>              
            </li>
            <li>
              <Link to="case-study">CASE STUDY</Link>
            </li>
            <li>
              <Link to="blog">BLOG</Link>
            </li>
          </ul>
        </div>
        {/* <div className="com-contacts">
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
        </div> */}
        <div className="mobile-ham-icon" onClick={toggleDropdown}>
          {dropdownNav ? (
            <AiOutlineClose size={25} className="rotetateclose" />
          ) : (
            <GiHamburgerMenu size={25} />
          )}
        </div>
      </nav>
      {dropdownNav ? <SubNav toggleNavbar={toggleDropdown} /> : null}
    </div>
  );
};

export default Navbar;
