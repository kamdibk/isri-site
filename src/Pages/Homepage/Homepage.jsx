import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SliderMainComponent from "../../Components/SliderMainComponent/SliderMainComponent";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import OurClients from "../../Components/OurClients/OurClients";
import Footer from "../../Components/Footer/Footer";
import StickyContactForMobile from "../../Components/StickyContactForMobile/StickyContactForMobile";
import OurServices from "../../Components/OurServices/OurServices"
const Homepage = () => {
  return (
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
  );
};

export default Homepage;
