import React from "react";
import "./Footer.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-inner-container">
        <div className="footer-left-container">
          <div className="logo-container">
          <img src={Logo} alt="ISRI Logo" className="f-isri-logo" height={50}/>
          </div>
        </div>
        <div className="footer-right-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3228610132496!2d72.91104407490532!3d19.093487051423924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cdcd660133%3A0xf20f8267df82d7c1!2sISRI%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1715076969541!5m2!1sen!2sin"
            width="100%"
            height="300px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
