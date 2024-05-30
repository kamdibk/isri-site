import React from "react";
import SliderMainComponent from "../../Components/SliderMainComponent/SliderMainComponent";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import OurClients from "../../Components/OurClients/OurClients";
import Footer from "../../Components/Footer/Footer";
import StickyContactForMobile from "../../Components/StickyContactForMobile/StickyContactForMobile";
import OurServices from "../../Components/OurServices/OurServices";
const Homepage = () => {
  return (
    <>
      <SliderMainComponent />
      <OurServices />
      <WhoWeAre />
      <WhyChooseUs />
      <OurClients />
      <Footer />
      <StickyContactForMobile />
    </>
  );
};

export default Homepage;
