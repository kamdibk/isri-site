import React, { useState } from "react";
import "./SubNav.css";
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
import { GiArtificialIntelligence } from "react-icons/gi";
import AboutUs from "../AboutUS/AboutUs";
import Industries from "../Industries/Industries";
import Technologies from "../Technologies/Technologies";
import { Link } from "react-router-dom";

const SubNav = ({toggleNavbar}) => {
  const [toggleService, setToggleService] = useState(false);
  const [toggleAboutUs, setToggleAboutUs] = useState(false);
  const [toggleIndustries, setToggleIndustries] = useState(false);
  const [toggleTechnologies, setToggleTechnologies] = useState(false);
  return (
    <div className="nav-links-dropdown">
      <div className="dropdown-nav-links">
        <ul className="dropdown-nav-links-items">
          <li>
            <span>
              SERVICES
              {toggleService ? (
                <AiOutlineMinus
                  onClick={() => setToggleService(!toggleService)}
                />
              ) : (
                <AiOutlinePlus
                  size={22}
                  onClick={() => setToggleService(!toggleService)}
                />
              )}
            </span>
            {toggleService ? (
              <div className="services-dropdown">
                <ul className="services-dropdown-links-items">
                  <li>
                    <Link
                      to="services/software-development"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <AiFillSetting
                        size={20}
                        color="orange"
                        style={{ marginRight: "10px" }}
                        onClick={toggleNavbar}
                      />
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/ecommerce-solutions"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <BsCart4
                        size={20}
                        style={{ marginRight: "10px" }}
                        color="green"
                      />
                      eCommerce Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/mobile-apps-development"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <AiOutlineMobile
                        size={20}
                        style={{ marginRight: "10px" }}
                      />
                      Mobile Apps Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/cloud-solution"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <AiFillCloud
                        size={20}
                        style={{ marginRight: "10px" }}
                        color="skyblue"
                      />
                      Cloud Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/website-development"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <AiOutlineDesktop
                        size={20}
                        style={{ marginRight: "10px" }}
                        color="blue"
                      />
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/cms-solutions"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <BsLaptop size={20} style={{ marginRight: "10px" }} />
                      CMS Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/crm-solutions"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <FaHandshake
                        size={20}
                        style={{ marginRight: "10px" }}
                        color="#1a6ad9"
                      />
                      CRM Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/web-design"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <IoEarthOutline
                        size={20}
                        style={{ marginRight: "10px" }}
                        color="red"
                      />
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/hire-developer"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <BsFillPeopleFill
                        size={20}
                        style={{ marginRight: "10px" }}
                        color="skyblue"
                      />
                      Hire Developer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/ai-ml"
                      style={{ alignItems: "center", display: "flex" }}
                      onClick={toggleNavbar}
                    >
                      <GiArtificialIntelligence
                        size={20}
                        style={{ marginRight: "10px" }}
                      />
                      AI/ML
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </li>
          <li>
            <span>
            TECHNOLOGIES
            {toggleTechnologies ? (
              <AiOutlineMinus
                onClick={() => setToggleTechnologies(!toggleTechnologies)}
              />
            ) : (
              <AiOutlinePlus
                size={22}
                onClick={() => setToggleTechnologies(!toggleTechnologies)}
              />
            )}
            </span>
            {toggleTechnologies ? <Technologies toggleNavbar={toggleNavbar}/> : null}
          </li>
          <li>
            <span>
              INDUSTRIES
              {toggleIndustries ? (
                <AiOutlineMinus
                  onClick={() => setToggleIndustries(!toggleIndustries)}
                />
              ) : (
                <AiOutlinePlus
                  size={22}
                  onClick={() => setToggleIndustries(!toggleIndustries)}
                />
              )}
            </span>
              {toggleIndustries ? <Industries toggleNavbar={toggleNavbar}/> : null}
          </li>
          <li>
            <span>
              ABOUT US
              {toggleAboutUs ? (
                <AiOutlineMinus
                  onClick={() => setToggleAboutUs(!toggleAboutUs)}
                />
              ) : (
                <AiOutlinePlus
                  size={22}
                  onClick={() => setToggleAboutUs(!toggleAboutUs)}
                />
              )}
            </span>
              {toggleAboutUs ? <AboutUs toggleNavbar={toggleNavbar}/> : null}
          </li>
          <li>
            <Link to="portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link href="case-study">CASE STUDY</Link>
          </li>
          <li>
            <Link href="blog">BLOCK</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNav;
