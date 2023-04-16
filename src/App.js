import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about-me";
import Homepage from "./components/homepage";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import MyNavbar from "./components/nav";

const App = () => {
  return (
    <>
    
      
      <ul class="background">
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
    
      </Router>
      
      </ul>
    </>
  );
};

export default App;
