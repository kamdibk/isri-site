import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Navbar/Technologies/Technologies";
import StickyContactForMobile from "./Components/StickyContactForMobile/StickyContactForMobile";
import SliderMainComponent from "./Components/SliderMainComponent/SliderMainComponent";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import OurServices1 from "./Components/OurServices1/OurServices1";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Navbar />
        <Technologies />
      </div>
      <div className="main-body">
        <SliderMainComponent />
        <OurServices1 />
        <WhoWeAre />
      </div>
      <StickyContactForMobile />
    </div>
  );
}

export default App;
