import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage/NoPage";
import ServicesContent from "./Pages/ServicesContent/ServicesContent";
import TechnologiesContent from "./Pages/TechnologiesContent/TechnologiesContent";
import IndustriesContent from "./Pages/IndustriesContent/IndustriesContent"
import AboutUs from "./Pages/AboutUs/AboutUs";
import Portfolio from './Pages/Portfolio/Portfolio'
import CaseStudy from './Pages/CaseStudy/CaseStudy'
import Blog from './Pages/Blog/Blog'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="services/:id" element={<ServicesContent />} />
            <Route path="technologies/:id" element={<TechnologiesContent />} />
            <Route path="industries/:id" element={<IndustriesContent />} />
            <Route path="about-us/:id" element={<AboutUs />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="case-study" element={<CaseStudy />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
