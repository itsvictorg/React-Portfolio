import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/about-me';
import Homepage from './components/homepage';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Nav from './components/nav';



function App() {
  return (
  
      <Router>
      <Nav />
        <div className="flex-column justify-flex-start min-100-vh">

          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Homepage />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/projects" 
                element={<Projects />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
            </Routes>
          </div>
        </div>
      </Router>

  );
}

export default App;
