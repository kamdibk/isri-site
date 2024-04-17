import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Navbar/Technologies/Technologies";
import StickyContactForMobile from "./Components/StickyContactForMobile/StickyContactForMobile";
import SliderMainComponent from "./Components/SliderMainComponent/SliderMainComponent";
import OurServices from "./Components/OurServices/OurServices";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Navbar />
        {/* <Test/> */}
        <Technologies />
      </div>
      <div className="main-body">
        <SliderMainComponent/>
        <OurServices />
      </div>
      <StickyContactForMobile/>
    </div>

  );
}

export default App;
