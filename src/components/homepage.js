import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import MediaQuery from "react-responsive";

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

const buttonStyle = {
    fontSize: "1.2rem",
    color: "black",
}


const rowStyle = {
  justifyContent: "flex-start",
  textAlign: "center",
  width: "100%",
};



// const cardStyle = {  
//     width: "80%",
//     height: "75%",
//     display: "flex",
//     zIndex: "-1",
//     position: "absolute",
//     backgroundColor: "black",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     textAlign: "center",
//     margin: "auto",
//     opacity: "0.8",
  
// }



const mobileFontStyle = {
    fontSize: "1.8rem",
    color: "white",
}

const mobileContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    width: "100vw",
    height: "100vh",
    margin: "auto",
    paddingLeft: "3rem",
}



export default function Homepage() {
  return (
    <>
   <MediaQuery query="(min-width: 769px)">
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
        <Container>
        <Button href="#/about" variant="light" style={buttonStyle}>
        About Me
        </Button>
        </Container>
        
              
      </Container>
      </MediaQuery>

        <MediaQuery query="(max-width: 1224px)">

        <Container fluid className="container" style={mobileContainerStyle}>
       
        <Row style={rowStyle}>
          <Row>
            
            <Col>
            <Row>
              <p style={mobileFontStyle}>Hi! I'm a software developer.</p>
            </Row>
              <Row>
                <p style={mobileFontStyle}>
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


        </MediaQuery>


    </>
  );
}
