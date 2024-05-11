import React from "react";

const Navbar = () => {
  return (
    <div className="fixed-nav">
      <nav className="navbar">
        <div className="com-logo" style={{ marginLeft: "10px" }}>
          <img src={Logo} alt="ISRI Logo" className="isri-logo" height={60} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
