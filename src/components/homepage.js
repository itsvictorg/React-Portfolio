import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../index.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  height: "100vh",
  width: "100vw",
};

const fontStyle = {
  fontSize: "2.5rem",
  color: "white",
};


const rowStyle = {
  justifyContent: "flex-start",
  textAlign: "center",
};




export default function Homepage() {
  return (
    <>
      <Container fluid className="container" style={containerStyle}>
        
        <Row style={rowStyle}>
          <Row>
            
            <Col>
            <Row>
              <p style={fontStyle}>Hi! I'm a software developer.</p>
            </Row>
              <Row>
                <p style={fontStyle}>
                  {" "}
                  I love solving problems and learning new things.
                </p>
              </Row>
            </Col>
          </Row>
        </Row>
        <Button href="#/about" variant="light">
          About Me
        </Button>
        
      </Container>
    </>
  );
}
