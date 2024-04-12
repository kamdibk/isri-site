import React from "react";
import "./StickyContactForMobile.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import callIcon from "../../assets/ic_ft2.png";
import contactusIcon from "../../assets/ic_ft4.png";
const StickyContactForMobile = () => {
  return (
    <div className="sticky-contact-details">
      <hr />
      <div className="PE-icon-container">
        <div className="PE-icon" style={{ width: "102px" }}>
          <FiPhoneCall size={33} style={{marginBottom:"5px"}}/>
          CALL
        </div>
        <div className="PE-icon" style={{ width: "102px" }}>
          <AiOutlineMail size={33} style={{marginBottom:"5px"}}/>
          MAIL
        </div>
        <div className="PE-icon">
          <TfiHeadphoneAlt size={33} style={{marginBottom:"5px"}}/>
          CONTACT US
        </div>
      </div>
    </div>
  );
};

export default StickyContactForMobile;
