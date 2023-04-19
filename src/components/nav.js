import React from "react";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown'

import { useState } from "react";

import "../index.css";

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

  return (
    <Navbar sticky="top" bg="light" expand="lg" expanded={expanded}>
        
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
          
            <Nav.Link href="#/" onClick={() => setExpanded(false)} className="nav-link">HOME</Nav.Link>

            <Nav.Link href="#/about" onClick={() => setExpanded(false)} className="nav-link">ABOUT</Nav.Link>

            <Nav.Link href="#/projects" onClick={() => setExpanded(false)} className="nav-link">PROJECTS</Nav.Link>

            <Nav.Link href="#/contact" onClick={() => setExpanded(false)} className="nav-link">CONTACT</Nav.Link>

            <Nav.Link href="https://drive.google.com/file/d/1IEeKGaZJlcc0Hvq03ZpclHQvgCQihBVz/view?usp=sharing">
              RESUME
            </Nav.Link>

          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
