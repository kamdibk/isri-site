import React from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <
    >

      <div className="main-body">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;

// <div className="App-Header">
//   <Navbar />
// </div>