import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import AnimatedRoutes from "./Routes/AnimatedRoutes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <AnimatedRoutes/>
      </Router>
    </div>
  );
}

export default App;
