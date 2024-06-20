import React from "react";
import SliderMainComponent from "../../Components/SliderMainComponent/SliderMainComponent";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import OurClients from "../../Components/OurClients/OurClients";
import Footer from "../../Components/Footer/Footer";
import StickyContactForMobile from "../../Components/StickyContactForMobile/StickyContactForMobile";
import OurServices from "../../Components/OurServices/OurServices";
import { motion } from "framer-motion";
// import TestComponent from "../../Components/TestComponent/TestComponent";
const Homepage = () => {
  return (
    <motion.div
    initial={{ width : 0}}
    animate={{ width: "100%" }}
    exit={{ x : window.innerWidth }}
    >
      <SliderMainComponent />
      <OurServices />
      <WhoWeAre />
      <WhyChooseUs />
      <OurClients />
      <Footer />
      <StickyContactForMobile />
    </motion.div>
  );
};

export default Homepage;
