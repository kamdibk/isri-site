import React from "react";
import "./StickyContactForMobile.css";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const StickyContactForMobile = () => {
  return (
    <div className="sticky-contact-details">
      <div className="phone">
        <BsTelephone />
      </div>
      <div className="email">
        <AiOutlineMail />
      </div>
    </div>
  );
};

export default StickyContactForMobile;
