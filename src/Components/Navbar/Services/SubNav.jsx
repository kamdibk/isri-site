import React, { useState }from 'react'
import './SubNav.css'
import {
    AiFillSetting,
    AiFillCloud,
    AiOutlineMobile,
    AiOutlineDesktop,
    AiOutlinePlus,
    AiOutlineMinus,
  } from "react-icons/ai";
  import { FaHandshake } from "react-icons/fa";
  import { BsCart4, BsLaptop, BsFillPeopleFill } from "react-icons/bs";
  import { IoEarthOutline } from "react-icons/io5";
  import { RiMotorbikeFill } from "react-icons/ri";
  import { GrGamepad } from "react-icons/gr";
  import { TbRobot } from "react-icons/tb";
  import { GiArtificialIntelligence } from "react-icons/gi";
import AboutUs from '../AboutUS/AboutUs';

const SubNav = () => {
    const [toggleService, setToggleService] = useState(false);
    const [toggleAboutUs, setToggleAboutUs] = useState(false);
  return (
    <div className="nav-links-dropdown">
    <div className="dropdown-nav-links">
      <ul className="dropdown-nav-links-items">
        <li onClick={() => setToggleService(!toggleService)}>
          <a href="#">
            SERVICES
            {toggleService ? (
              <AiOutlineMinus />
            ) : (
              <AiOutlinePlus size={22} />
            )}
          </a>
          {toggleService ? (
            <div className="services-dropdown">
              <ul className="services-dropdown-links-items">
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
          ) : null}
        </li>
        <li>
          <a href="#">TECHNOLOGIES</a>
        </li>
        <li>
          <a href="#">INDUSTRIES</a>
        </li>
        <li onClick={() => setToggleAboutUs(!toggleAboutUs)}>
          <a href="#">
            ABOUT US
            {toggleAboutUs ? (
              <AiOutlineMinus />
            ) : (
              <AiOutlinePlus size={22} />
            )}
            </a>
            {toggleAboutUs ? (
            <AboutUs classname1="services-dropdown" classname2="services-dropdown-links-items"/>
            ) : null}
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
  </div>
  )
}

export default SubNav