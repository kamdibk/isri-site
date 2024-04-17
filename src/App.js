import "./App.css";
import React, { useState, useEffect } from "react";
import useWindowDimensions from "./Components/Hooks/WindowDimensions/useWindowDimensions";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Navbar/Technologies/Technologies";
import StickyContactForMobile from "./Components/StickyContactForMobile/StickyContactForMobile";
function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Navbar />
        {/* <Test/> */}
        <Technologies />
      </div>
      <div className="main-body">{/* <Hero /> */}</div>
      <StickyContactForMobile/>
    </div>
  );
}

export default App;
