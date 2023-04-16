import React from "react";

// import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "100vh",
    width: "80vw",
    margin: "auto",
    padding: "2rem",
}

const fontStyle = {
    fontSize: "1.6rem",
    color: "white",
    
}


export default function AboutMe() {
  return (
    <>
    <Container fluid style={containerStyle}>
        <p style={fontStyle}>
        Hello, I'm Victor Gonzalez! I am a software developer specializing in
        web development. I have experience in front-end and back-end
        development. Most of my front-end experience is in JavaScript, React.js,
        HTML, and CSS. My back-end experience is with Node.js, Express.js,
        mySQL, and MongoDB. I am currently enrolled in a full stack coding
        bootcamp through the University of Texas, Austin. I will be graduating
        from this program in April of 2023. I also previously completed a 12
        month coding program focusing on video game development where I learned
        C++ and a visual scripting tool called Unreal Engine Blueprints. I
        really enjoy solving problems. I think coding is really exciting because
        of that. I see it as a puzzle with endless amounts of solutions and
        finding the most efficient and effective solution is the challenge. I am
        currently seeking a junior developer position to get my career started
        and learn as much as possible from my team and senior developers.
        </p>
        <div>
      <Button href = "#/projects" variant="light" >See My Projects</Button>
      </div>
      </Container>
    </>
  );
}
