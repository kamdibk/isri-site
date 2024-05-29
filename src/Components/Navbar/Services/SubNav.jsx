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
import Industries from '../Industries/Industries';
import Technologies from '../Technologies/Technologies';

const SubNav = () => {
    const [toggleService, setToggleService] = useState(false);
    const [toggleAboutUs, setToggleAboutUs] = useState(false);
    const [toggleIndustries, setToggleIndustries] = useState(false);
    const [toggleTechnologies, setToggleTechnologies] = useState(false)
  return (
    <div className="nav-links-dropdown">
    <div className="dropdown-nav-links">
      <ul className="dropdown-nav-links-items">
        <li >
          <a href="#">
            SERVICES
            {toggleService ? (
              <AiOutlineMinus onClick={() => setToggleService(!toggleService)}/>
            ) : (
              <AiOutlinePlus size={22} onClick={() => setToggleService(!toggleService)}/>
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
                      color="orange"
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
                    <BsCart4 size={20} style={{ marginRight: "10px" }} color="green" />
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
                      color="skyblue"
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
                      color="blue"
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
                      color="#1a6ad9"
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
                      color="red"
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
                      color="skyblue"
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
                      color="gray"
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
                    <TbRobot size={20} style={{ marginRight: "10px" }} color="#1a6403"/>
                    Robotic Process Automation
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </li>
        <li >
          <a href="#">TECHNOLOGIES
          {toggleTechnologies ? (
              <AiOutlineMinus onClick={() => setToggleTechnologies(!toggleTechnologies)}/>
            ) : (
              <AiOutlinePlus size={22} onClick={() => setToggleTechnologies(!toggleTechnologies)}/>
            )}
            </a>
            {toggleTechnologies ? (
              <Technologies/>
            ) : null}
        </li>
        <li >
        <a href="#">
            INDUSTRIES
            {toggleIndustries ? (
              <AiOutlineMinus onClick={()=> setToggleIndustries(!toggleIndustries)}/>
            ) : (
              <AiOutlinePlus size={22} onClick={()=> setToggleIndustries(!toggleIndustries)}/>
            )}
            </a>
            {toggleIndustries ? (
              <Industries/>
            ) : null}
        </li>
        <li >
          <a href="#">
            ABOUT US
            {toggleAboutUs ? (
              <AiOutlineMinus onClick={() => setToggleAboutUs(!toggleAboutUs)}/>
            ) : (
              <AiOutlinePlus size={22} onClick={() => setToggleAboutUs(!toggleAboutUs)}/>
            )}
            </a>
            {toggleAboutUs ? (
            <AboutUs/>
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