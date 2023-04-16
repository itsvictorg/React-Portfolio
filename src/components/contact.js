import React from "react";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Contact() {

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

    const rowStyle = {
       padding: "1rem",
    }

    const linkStyle = {
        padding: "1rem",
        color: "lightblue",
        fontSize: "1.5rem",
        textDecoration: "none",
        fontWeight: "bold",


    }

    const h1Style = {
        fontSize: "3rem",
        color: "white",
        padding: "1rem",
    }

    const h2Style = {
        fontSize: "2rem",
        color: "white",
        padding: "1rem",
    }


  




    return(
        <>
        <Container fluid style={containerStyle}>
            
        <Row style={rowStyle}>
            <h1 style={h1Style}>Contact</h1>
        </Row>
        <Row style={rowStyle}>
            <h2 style={h2Style}>itsvictorg@gmail.com</h2>
        </Row>
        <Row>
            <h1 style={h1Style}>Links</h1>
            </Row>
        <Row style={rowStyle}>
            <Link to="https://github.com/itsvictorg" style={linkStyle}>GitHub </Link>
            <Link to="https://www.linkedin.com/in/victor-gonzalez-2ab8671a8/" style={linkStyle}>LinkedIn</Link>
        </Row>
       
        </Container>
        </>
    );
}