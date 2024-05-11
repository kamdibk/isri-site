import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
import { NavbarData } from "../../Data/NavbarData";

const Navbar = () => {

  function loadNav() {
    console.log("useEffect called");
    const navbar = document.querySelector(".nav-links-items");
      NavbarData.forEach((key) => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        // link.href = "#"
        link.textContent = key.title;
        li.appendChild(link);
        navbar.appendChild(li);
      });
  }

  return (
    <div className="fixed-nav">
      <nav className="navbar">
        <div className="com-logo" style={{ marginLeft: "10px" }}>
          <img src={Logo} alt="ISRI Logo" className="isri-logo" height={60} />
        </div>
        <div className="nav-links">
          <ul className="nav-links-items">
            {
                console.log("hi")
            }
          </ul>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
