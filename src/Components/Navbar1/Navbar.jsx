import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
import { MdPhone } from "react-icons/md";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [dropdownNav, setDropdownNav] = useState(false);
  const toggleDropdown = () => {
    setDropdownNav(!dropdownNav);
  };
  return (
    <div className="fixed-nav">
      <nav className="navbar">
        <div className="com-logo">
          <img src={Logo} alt="ISRI Logo" className="isri-logo" height={45} />
        </div>
        <div className="nav-links">
          <ul className="nav-links-items">
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">TECHNOLOGIES</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
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
          </ul>{" "}
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
      </nav>
    </div>
  );
};

export default Navbar;
