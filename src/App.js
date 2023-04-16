import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about-me";
import Homepage from "./components/homepage";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import MyNavbar from "./components/nav";
import MediaQuery from 'react-responsive'

const App = () => {

  return (
    <>
    
      <MediaQuery query="(min-width: 769px)">
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
      </MediaQuery>


      <MediaQuery query="(max-width: 1224px)">
      
      <Router>
        <MyNavbar />
        <div
      style={{
        backgroundColor: '#212121',
        width: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
      }}
    />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
    
      </Router>
     
      </MediaQuery>
      
      
    </>
  );
};

export default App;
