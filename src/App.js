import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/services/*" element={<Homepage/>} />
        <Route exact path="/technologies/*" element={<Homepage/>} />
        <Route exact path="/industries/*" element={<Homepage/>} />
        <Route exact path="/about-us/*" element={<Homepage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
