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
  FaDatabase,
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
import { DiDotnet, DiPhotoshop } from "react-icons/di";
import { LiaPagerSolid } from "react-icons/lia";
import { BsAlexa, BsBank, BsPersonFillGear } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
// End
const Technologies = ({ toggleNavbar }) => {
  const { width } = useWindowDimensions();
  const iconSize = 22;
  if (width >= 1090) {
    return (
      <div className="dropdown">
        <div className="dropdown-lvl-1 right-space">
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
                      <Link to="technologies/magento">
                        <FaMagento color="red" size={iconSize} /> Mangento
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/shopify">
                        <FaShopify color="green" size={iconSize} /> Shopify
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/shopify-plus">
                        <FaShopify size={iconSize} /> Shopify Plus
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/opencart">
                        <FaOpencart color="blue" size={iconSize} /> OpenCart
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/woocommerce">
                        <SiWoo color="voilet" size={iconSize} /> WooCommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/bigcommerce">
                        <SiBigcommerce size={iconSize} /> BigCommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/wix">
                        <FaWix size={iconSize - 4} /> Wix
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="technologies-heading">CMS Development</span>
                  <ul>
                    <li>
                      <Link to="technologies/wordpress">
                        <FaWordpress size={iconSize} /> Wordpress
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/drupal">
                        <FaDrupal size={iconSize} color="blue" /> Drupal
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/joompla">
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
                      <Link to="technologies/php-framework">
                        <FaPhp size={iconSize} color="blue" /> PHP Frameworks
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/laravel">
                        <FaLaravel size={iconSize} color="orange" />
                        Laravel
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/mean-mern">
                        <TbBrandMongodb size={iconSize} color="green" />
                        MEAN MERN
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/nodejs">
                        <FaNodeJs size={iconSize} color="green" />
                        NodeJs
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/python">
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
                      <Link to="technologies/iphone">
                        <FaApple size={iconSize} />
                        iPhone
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/android">
                        <GrAndroid size={iconSize} color="green" />
                        Android
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/xamarin">
                        {" "}
                        <TbBrandXamarin size={iconSize} color="blue" />
                        Xamarin
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/react-native">
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
                      <Link to="technologies/dotnet-development">
                        <DiDotnet size={iconSize} color="blue" />
                        .Net Development
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/ms-dynamic-crm">
                        <SiDynamics365 size={iconSize} />
                        MS Dynamic CRM
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/sharepoint">
                        <SiMicrosoftsharepoint size={iconSize} color="blue" />{" "}
                        Sharepoint
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/microsoft-bot">
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
                    <li>
                      <Link to="technologies/angularjs">
                        <FaAngular size={iconSize} color="red" />
                        AngularJS
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/ui-ux">
                        <LiaPagerSolid size={iconSize} />
                        UI/UX
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/graphics">
                        <DiPhotoshop size={iconSize} />
                        Graphics
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/reactjs">
                        <FaReact />
                        ReactJs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="technologies-inner-container">
                <div>
                  <ul>
                    <li>
                      <Link to="technologies/alexa-skills-development">
                        <BsAlexa size={iconSize} color="skyblue" /> Alexa Skills
                        Development
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/membership-management-solutions">
                        <BsPersonFillGear size={iconSize} color="blue" />
                        Membership Management Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/big-data">
                        <FaDatabase size={iconSize} color="yellow" /> Big Data
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/devops">
                        <SiAzuredevops size={iconSize} color="orange" />
                        DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/banking-as-a-service">
                        <GrServices size={iconSize} />
                        Banking As A Service
                      </Link>
                    </li>
                    <li>
                      <Link to="technologies/open-network-for-digital-commerce">
                        <BsBank size={iconSize} />
                        Open Network For Digital Commerce
                      </Link>
                    </li>
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
              <span className="technologies-heading">eCommerce Services</span>
              <ul>
                <li>
                  <Link to="technologies/magento" onClick={toggleNavbar}>
                    <FaMagento color="red" size={iconSize} /> Mangento
                  </Link>
                </li>
                <li>
                  <Link to="technologies/shopify" onClick={toggleNavbar}>
                    <FaShopify color="green" size={iconSize} /> Shopify
                  </Link>
                </li>
                <li>
                  <Link to="technologies/shopify-plus" onClick={toggleNavbar}>
                    <FaShopify size={iconSize} /> Shopify Plus
                  </Link>
                </li>
                <li>
                  <Link to="technologies/opencart" onClick={toggleNavbar}>
                    <FaOpencart color="blue" size={iconSize} /> OpenCart
                  </Link>
                </li>
                <li>
                  <Link to="technologies/woocommerce" onClick={toggleNavbar}>
                    <SiWoo color="voilet" size={iconSize} /> WooCommerce
                  </Link>
                </li>
                <li>
                  <Link to="technologies/bigcommerce" onClick={toggleNavbar}>
                    <SiBigcommerce size={iconSize} /> BigCommerce
                  </Link>
                </li>
                <li>
                  <Link to="technologies/wix" onClick={toggleNavbar}>
                    <FaWix size={iconSize - 4} /> Wix
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="technologies-heading">CMS Development</span>
              <ul>
                <li>
                  <Link to="technologies/wordpress" onClick={toggleNavbar}>
                    <FaWordpress size={iconSize} /> Wordpress
                  </Link>
                </li>
                <li>
                  <Link to="technologies/drupal" onClick={toggleNavbar}>
                    <FaDrupal size={iconSize} color="blue" /> Drupal
                  </Link>
                </li>
                <li>
                  <Link to="technologies/joompla" onClick={toggleNavbar}>
                    <FaJoomla size={iconSize} color="orange" /> Joomla
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="technologies-inner-container">
            <div>
              <span className="technologies-heading">Website Development</span>
              <ul>
                <li>
                  <Link to="technologies/php-framework" onClick={toggleNavbar}>
                    <FaPhp size={iconSize} color="blue" /> PHP Frameworks
                  </Link>
                </li>
                <li>
                  <Link to="technologies/laravel" onClick={toggleNavbar}>
                    <FaLaravel size={iconSize} color="orange" />
                    Laravel
                  </Link>
                </li>
                <li>
                  <Link to="technologies/mean-mern" onClick={toggleNavbar}>
                    <TbBrandMongodb size={iconSize} color="green" />
                    MEAN MERN
                  </Link>
                </li>
                <li>
                  <Link to="technologies/nodejs" onClick={toggleNavbar}>
                    <FaNodeJs size={iconSize} color="green" />
                    NodeJs
                  </Link>
                </li>
                <li>
                  <Link to="technologies/python" onClick={toggleNavbar}>
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
                  <Link to="technologies/iphone" onClick={toggleNavbar}>
                    <FaApple size={iconSize} />
                    iPhone
                  </Link>
                </li>
                <li>
                  <Link to="technologies/android" onClick={toggleNavbar}>
                    <GrAndroid size={iconSize} color="green" />
                    Android
                  </Link>
                </li>
                <li>
                  <Link to="technologies/xamarin" onClick={toggleNavbar}>
                    {" "}
                    <TbBrandXamarin size={iconSize} color="blue" />
                    Xamarin
                  </Link>
                </li>
                <li>
                  <Link to="technologies/react-native" onClick={toggleNavbar}>
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
              <span className="technologies-heading">Microsoft Solutions</span>
              <ul>
                <li>
                  <Link to="technologies/dotnet-development" onClick={toggleNavbar}>
                    <DiDotnet size={iconSize} color="blue" />
                    .Net Development
                  </Link>
                </li>
                <li>
                  <Link to="technologies/ms-dynamic-crm" onClick={toggleNavbar}>
                    <SiDynamics365 size={iconSize} />
                    MS Dynamic CRM
                  </Link>
                </li>
                <li>
                  <Link to="technologies/sharepoint" onClick={toggleNavbar}>
                    <SiMicrosoftsharepoint size={iconSize} color="blue" />{" "}
                    Sharepoint
                  </Link>
                </li>
                <li>
                  <Link to="technologies/microsoft-bot" onClick={toggleNavbar}>
                    <FaMicrosoft size={iconSize} /> Microsoft Bot
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="technologies-heading">Microsoft Solutions</span>
              <ul>
                <li>
                  <Link to="technologies/angularjs" onClick={toggleNavbar}>
                    <FaAngular size={iconSize} color="red" />
                    AngularJS
                  </Link>
                </li>
                <li>
                  <Link to="technologies/ui-ux" onClick={toggleNavbar}>
                    <LiaPagerSolid size={iconSize} />
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link to="technologies/graphics" onClick={toggleNavbar}>
                    <DiPhotoshop size={iconSize} />
                    Graphics
                  </Link>
                </li>
                <li>
                  <Link to="technologies/reactjs" onClick={toggleNavbar}>
                    <FaReact />
                    ReactJs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="technologies-inner-container">
            <div>
              <ul>
                <li>
                  <Link to="technologies/alexa-skills-development" onClick={toggleNavbar}>
                    <BsAlexa size={iconSize} color="skyblue" /> Alexa Skills
                    Development
                  </Link>
                </li>
                <li>
                  <Link to="technologies/membership-management-solutions" onClick={toggleNavbar}>
                    <BsPersonFillGear size={iconSize} color="blue" />
                    Membership Management Solutions
                  </Link>
                </li>
                <li>
                  <Link to="technologies/big-data" onClick={toggleNavbar}>
                    <FaDatabase size={iconSize} color="yellow" /> Big Data
                  </Link>
                </li>
                <li>
                  <Link to="technologies/devops" onClick={toggleNavbar}>
                    <SiAzuredevops size={iconSize} color="orange" />
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link to="technologies/banking-as-a-service" onClick={toggleNavbar}>
                    <GrServices size={iconSize} />
                    Banking As A Service
                  </Link>
                </li>
                <li>
                  <Link to="technologies/open-network-for-digital-commerce" onClick={toggleNavbar}>
                    <BsBank size={iconSize} />
                    Open Network For Digital Commerce
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Technologies;
