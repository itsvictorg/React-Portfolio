import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import MediaQuery from "react-responsive";
import { TypeAnimation } from "react-type-animation";

import "../index.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  height: "100vh",
  width: "65vw",
};

const fontStyle = {
  fontSize: "1.5rem",
  color: "white",
};
const h1FontStyle = {
  fontSize: "3.5rem",
  color: "white",
};
const mobileH1FontStyle = {
  fontSize: "2rem",
  color: "white",
};

const buttonStyle = {
  margin: "2rem",
};

const mobileButtonStyle = {
  margin: "1rem",
};

const rowStyle = {
  justifyContent: "flex-start",
  textAlign: "center",
  width: "100%",
};

const mobileFontStyle = {
  fontSize: "1.0rem",
  color: "white",
};

const mobileContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "fit-content",
  height: "100vh",
  margin: "auto",
};

export default function Homepage() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid className="container" style={containerStyle}>
          <Row style={rowStyle}>
            <Row>
              <Col>
                <Row>
                  <TypeAnimation
                    sequence={[
                      "Hello there! I'm Victor,",
                      () => {
                        console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={false}
                    style={h1FontStyle}
                  />
                </Row>
                <p className="headline" style={fontStyle}>
                A versatile software engineer with a specialization in full-stack web development.
                </p>
                <Button
                  href="#/about"
                  variant="outline-light"
                  className="button"
                  style={buttonStyle}
                >
                  About Me
                </Button>
              </Col>
            </Row>
          </Row>
          <Container></Container>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">
        <Container fluid className="container" style={mobileContainerStyle}>
            <Row>
              <Col>
                <Row>
                  <TypeAnimation
                    sequence={[
                      "Hello there! My name is Victor.",
                      () => {
                        console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={false}
                    style={mobileH1FontStyle}
                  />
                </Row>
                <p className="headline" style={mobileFontStyle}>
                a versatile software engineer with a specialization in full-stack web development.
                </p>
                <Button
                  href="#/about"
                  variant="outline-light"
                  className="button"
                  style={mobileButtonStyle}
                >
                  About Me
                </Button>
              </Col>
            </Row>
        </Container>
      </MediaQuery>
    </>
  );
}
