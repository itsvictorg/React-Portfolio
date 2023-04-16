import React from "react";
// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown'

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
        
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
          
            <Nav.Link href="#/">HOME</Nav.Link>

            <Nav.Link href="#/about">ABOUT</Nav.Link>

            <Nav.Link href="#/projects">PROJECTS</Nav.Link>

            <Nav.Link href="#/contact">CONTACT</Nav.Link>

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
