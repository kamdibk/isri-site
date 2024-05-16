import React from "react";
import "./Technologies.css";
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";
// Icons
import {
  FaMagento,
  FaShopify,
  FaOpencart,
  FaWix,
  FaWordpress,
  FaDrupal,
  FaJoomla,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaApple,
  FaReact,
  FaMicrosoft,
  FaAngular,
  FaDatabase ,
} from "react-icons/fa";
import {
  SiWoo,
  SiBigcommerce,
  SiDynamics365,
  SiMicrosoftsharepoint,
  SiAzuredevops,
} from "react-icons/si";
import { TbBrandMongodb, TbBrandXamarin } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";
import { DiDotnet,DiPhotoshop } from "react-icons/di";
import { LiaPagerSolid } from "react-icons/lia";
import { BsAlexa, BsBank, BsPersonFillGear } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
// End
const Technologies = () => {
  const { width } = useWindowDimensions();
  const iconSize = 22;
  if (width > 1390) {
    return (
      <div className="dropdown">
        <div className="dropdown-lvl-1">
          <div className="Technologies-links">
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
                        <FaWix size={iconSize - 4} /> Wix
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">CMS Development</span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaWordpress size={iconSize} /> Wordpress
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDrupal size={iconSize} color="blue" /> Drupal
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaJoomla size={iconSize} color="orange" /> Joomla
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container">
                <div>
                  <span className="technologies-heading">
                    Website Development
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaPhp size={iconSize} color="blue" /> PHP Frameworks
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLaravel size={iconSize} color="orange" />
                        Laravel
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <TbBrandMongodb size={iconSize} color="green" />
                        MEAN MERN
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaNodeJs size={iconSize} color="green" />
                        NodeJs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPython />
                        Python
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">
                    Mobile App Development
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaApple size={iconSize} />
                        iPhone
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <GrAndroid size={iconSize} color="green" />
                        Android
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <TbBrandXamarin size={iconSize} color="blue" />
                        Xamarin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <FaReact size={iconSize} color="blue" />
                        React Native
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container">
                <div>
                  <span className="technologies-heading">
                    Microsoft Solutions
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <DiDotnet size={iconSize} color="blue" />
                        .Net Development
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiDynamics365 size={iconSize} />
                        MS Dynamic CRM
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiMicrosoftsharepoint size={iconSize} color="blue" />{" "}
                        Sharepoint
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaMicrosoft size={iconSize} /> Microsoft Bot
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                <span className="technologies-heading">
                    Microsoft Solutions
                  </span>
                  <ul>
                    <li><a href="#"><FaAngular size={iconSize} color="red"/>AngularJS</a></li>
                    <li><a href="#"><LiaPagerSolid size={iconSize}/>UI/UX</a></li>
                    <li><a href="#"><DiPhotoshop size={iconSize}/>Graphics</a></li>
                    <li><a href="#"><FaReact/>ReactJs</a></li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container">
                <div>
                <ul>
                  <li><a href="#"><BsAlexa size={iconSize} color="skyblue"/> Alexa Skills Development</a></li>
                  <li><a href="#"><BsPersonFillGear size={iconSize} color="blue"/>Membership Management Solutions</a></li>
                  <li><a href="#"><FaDatabase size={iconSize} color="yellow"/> Big Data</a></li>
                  <li><a href="#"><SiAzuredevops size={iconSize} color="orange"/>DevOps</a></li>
                  <li><a href="#"><GrServices size={iconSize}/>Banking As A Service</a></li>
                  <li><a href="#"><BsBank  size={iconSize}/>Open Network For Digital Commerce</a></li>
                </ul>
                </div>
              </div>
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
