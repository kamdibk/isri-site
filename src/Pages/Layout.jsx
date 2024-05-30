import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div className="App-Header">
        <Navbar />
      </div>
      <div className="main-body">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;

/*


    <>
      <div className="App-Header">
        <Navbar />
      </div>
      <div className="main-body">
        <SliderMainComponent />
        <OurServices />
        <WhoWeAre />
        <WhyChooseUs />
        <OurClients />
        <Footer />
      </div>
      <StickyContactForMobile />
    </>












*/
