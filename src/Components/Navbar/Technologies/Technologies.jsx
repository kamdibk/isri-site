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
import { Link } from "react-router-dom";
// End
const Technologies = () => {
  const { width } = useWindowDimensions();
  const iconSize = 22;
  if (width >= 1090) {
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
                      <Link to="#">
                        <FaMagento color="red" size={iconSize} /> Mangento
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaShopify color="green" size={iconSize} /> Shopify
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaShopify size={iconSize} /> Shopify Plus
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaOpencart color="blue" size={iconSize} /> OpenCart
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiWoo color="voilet" size={iconSize} /> WooCommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiBigcommerce size={iconSize} /> BigCommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaWix size={iconSize - 4} /> Wix
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">CMS Development</span>
                  <ul>
                    <li>
                      <Link to="#">
                        <FaWordpress size={iconSize} /> Wordpress
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaDrupal size={iconSize} color="blue" /> Drupal
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaJoomla size={iconSize} color="orange" /> Joomla
                      </Link>
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
                      <Link to="#">
                        <FaPhp size={iconSize} color="blue" /> PHP Frameworks
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLaravel size={iconSize} color="orange" />
                        Laravel
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <TbBrandMongodb size={iconSize} color="green" />
                        MEAN MERN
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaNodeJs size={iconSize} color="green" />
                        NodeJs
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaPython />
                        Python
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">
                    Mobile App Development
                  </span>
                  <ul>
                    <li>
                      <Link to="#">
                        <FaApple size={iconSize} />
                        iPhone
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <GrAndroid size={iconSize} color="green" />
                        Android
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <TbBrandXamarin size={iconSize} color="blue" />
                        Xamarin
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <FaReact size={iconSize} color="blue" />
                        React Native
                      </Link>
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
                      <Link to="#">
                        <DiDotnet size={iconSize} color="blue" />
                        .Net Development
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiDynamics365 size={iconSize} />
                        MS Dynamic CRM
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiMicrosoftsharepoint size={iconSize} color="blue" />{" "}
                        Sharepoint
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaMicrosoft size={iconSize} /> Microsoft Bot
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                <span className="technologies-heading">
                    Microsoft Solutions
                  </span>
                  <ul>
                    <li><Link to="#"><FaAngular size={iconSize} color="red"/>AngularJS</Link></li>
                    <li><Link to="#"><LiaPagerSolid size={iconSize}/>UI/UX</Link></li>
                    <li><Link to="#"><DiPhotoshop size={iconSize}/>Graphics</Link></li>
                    <li><Link to="#"><FaReact/>ReactJs</Link></li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container">
                <div>
                <ul>
                  <li><Link to="#"><BsAlexa size={iconSize} color="skyblue"/> Alexa Skills Development</Link></li>
                  <li><Link to="#"><BsPersonFillGear size={iconSize} color="blue"/>Membership Management Solutions</Link></li>
                  <li><Link to="#"><FaDatabase size={iconSize} color="yellow"/> Big Data</Link></li>
                  <li><Link to="#"><SiAzuredevops size={iconSize} color="orange"/>DevOps</Link></li>
                  <li><Link to="#"><GrServices size={iconSize}/>Banking As A Service</Link></li>
                  <li><Link to="#"><BsBank  size={iconSize}/>Open Network For Digital Commerce</Link></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
    <div className="services-dropdown">
            <div className="technologies-container">
              <div className="technologies-inner-container">
                <div>
                  <span className="technologies-heading">
                    eCommerce Services
                  </span>
                  <ul>
                    <li>
                      <Link to="#">
                        <FaMagento color="red" size={iconSize} /> Mangento
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaShopify color="green" size={iconSize} /> Shopify
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaShopify size={iconSize} /> Shopify Plus
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaOpencart color="blue" size={iconSize} /> OpenCart
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiWoo color="voilet" size={iconSize} /> WooCommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiBigcommerce size={iconSize} /> BigCommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaWix size={iconSize - 4} /> Wix
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">CMS Development</span>
                  <ul>
                    <li>
                      <Link to="#">
                        <FaWordpress size={iconSize} /> Wordpress
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaDrupal size={iconSize} color="blue" /> Drupal
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaJoomla size={iconSize} color="orange" /> Joomla
                      </Link>
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
                      <Link to="#">
                        <FaPhp size={iconSize} color="blue" /> PHP Frameworks
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLaravel size={iconSize} color="orange" />
                        Laravel
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <TbBrandMongodb size={iconSize} color="green" />
                        MEAN MERN
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaNodeJs size={iconSize} color="green" />
                        NodeJs
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaPython />
                        Python
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">
                    Mobile App Development
                  </span>
                  <ul>
                    <li>
                      <Link to="#">
                        <FaApple size={iconSize} />
                        iPhone
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <GrAndroid size={iconSize} color="green" />
                        Android
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <TbBrandXamarin size={iconSize} color="blue" />
                        Xamarin
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <FaReact size={iconSize} color="blue" />
                        React Native
                      </Link>
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
                      <Link to="#">
                        <DiDotnet size={iconSize} color="blue" />
                        .Net Development
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiDynamics365 size={iconSize} />
                        MS Dynamic CRM
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <SiMicrosoftsharepoint size={iconSize} color="blue" />{" "}
                        Sharepoint
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaMicrosoft size={iconSize} /> Microsoft Bot
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                <span className="technologies-heading">
                    Microsoft Solutions
                  </span>
                  <ul>
                    <li><Link to="#"><FaAngular size={iconSize} color="red"/>AngularJS</Link></li>
                    <li><Link to="#"><LiaPagerSolid size={iconSize}/>UI/UX</Link></li>
                    <li><Link to="#"><DiPhotoshop size={iconSize}/>Graphics</Link></li>
                    <li><Link to="#"><FaReact/>ReactJs</Link></li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container">
                <div>
                <ul>
                  <li><Link to="#"><BsAlexa size={iconSize} color="skyblue"/> Alexa Skills Development</Link></li>
                  <li><Link to="#"><BsPersonFillGear size={iconSize} color="blue"/>Membership Management Solutions</Link></li>
                  <li><Link to="#"><FaDatabase size={iconSize} color="yellow"/> Big Data</Link></li>
                  <li><Link to="#"><SiAzuredevops size={iconSize} color="orange"/>DevOps</Link></li>
                  <li><Link to="#"><GrServices size={iconSize}/>Banking As A Service</Link></li>
                  <li><Link to="#"><BsBank  size={iconSize}/>Open Network For Digital Commerce</Link></li>
                </ul>
                </div>
              </div>
            </div>
    </div>);
  }
};

export default Technologies;
