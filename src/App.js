import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Navbar/Technologies/Technologies";
import StickyContactForMobile from "./Components/StickyContactForMobile/StickyContactForMobile";
import SliderMainComponent from "./Components/SliderMainComponent/SliderMainComponent";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import OurServices from "./Components/OurServices/OurServices";
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import OurClients from "./Components/OurClients/OurClients";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Navbar />
        <Technologies />
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
    </div>
  );
}

export default App;
