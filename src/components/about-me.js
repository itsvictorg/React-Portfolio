import React from "react";

// import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import MediaQuery from "react-responsive";
// import { Card } from "react-bootstrap";

import "../index.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "90vw",
  height: "100vh",
  margin: "auto",
  padding: "6rem",
  lineHeight: "3rem",
};

const mobileContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "90vw",
  height: "fit-content",
  margin: "1.5rem",
  padding: "1rem",
};

const fontStyle = {
  fontSize: "1.5rem",
  color: "white",
};

const buttonStyle = {
  margin: "1rem",
};

const mobileFontStyle = {
  fontSize: "1.1rem",
  color: "white",
};

export default function AboutMe() {
  return (
    <>
      <MediaQuery query="(min-width: 769px)">
        <Container fluid style={containerStyle} className="headline-faster">
          <p style={fontStyle}>
          I'm Victor Gonzalez, an experienced web developer venturing into Python for machine learning and AI. With a strong foundation in web development, I thrive on creative problem-solving through coding. Beyond coding, I engage in diverse interests, seek continuous learning, and aspire to contribute to innovative projects in the dynamic fields of Python, machine learning, and AI. My passion for these domains, combined with my expertise in web development, drives me to make a meaningful impact in this exciting technological landscape.
          </p>
          <div>
            <Button
              href="#/projects"
              variant="outline-light"
              style={buttonStyle}
            >
              See My Projects
            </Button>
          </div>
        </Container>
      </MediaQuery>

      <MediaQuery query="(max-width: 880px)">
        <Container
          fluid
          style={mobileContainerStyle}
          className="headline-faster"
        >
          <p style={mobileFontStyle}>
          I'm Victor Gonzalez, an experienced web developer venturing into Python for machine learning and AI. With a strong foundation in web development, I thrive on creative problem-solving through coding. Beyond coding, I engage in diverse interests, seek continuous learning, and aspire to contribute to innovative projects in the dynamic fields of Python, machine learning, and AI. My passion for these domains, combined with my expertise in web development, drives me to make a meaningful impact in this exciting technological landscape.
          </p>
          <div>
            <Button
              href="#/projects"
              variant="outline-light"
              style={buttonStyle}
            >
              See My Projects
            </Button>
          </div>
        </Container>
      </MediaQuery>
    </>
  );
}
