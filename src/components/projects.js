import React from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardComponent from "./Card";
import MediaQuery from "react-responsive";

import "../index.css";

const blogImage = require("../assets/images/blog-app.png");
const textEditorImage = require("../assets/images/JATE.png");
const residentPortalImage = require("../assets/images/resident-portal.png");
const dayPlannerImage = require("../assets/images/day-planner.png");

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",

 
}

const mobileContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "100vw",
  height: "80%",
}

const rowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
  width: "100%",
  height: "100%",
  margin: "1rem",
}

const mobileRowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  textAlign: "center",
  width: "95%",
  margin: "1rem",
}

const fontStyle = {
  fontSize: "2.5rem",
  color: "white",
}

const mobileFontStyle = {
  fontSize: "1.5rem",
  color: "white",
}







const projects = [
  {
    name: "Social Media Blog App",
    description:
      "This is a project I built from the ground up. It is a full stack application I built using node.js, express.js, mySQL, handlebars.js, and sequelize. This project was really fun and frustrating to build at the same time. It helped me really understand how to communicate between the back-end and front-end effectively and efficiently. I think the biggest take away for me from this project was to make sure to write efficient and reusable code because even small projects like this can turn into monsters if not written efficiently. ",
    image: blogImage,
    github_link: "https://github.com/itsvictorg/Blog-App",
    deployed_link: "https://www.notenoughstacks.com/",
  },
  {
    name: "Text Editor PWA",
    description:
      "A progressive web application used to create notes or code snippets with or without an internet connection so they can be retrieved later. This project was built using HTML, CSS, JavaScript, and Webpack. I built this project to learn more about progressive web applications and how they work. I also wanted to learn more about how to use the local storage API to store data on the user's browser. ",
    image: textEditorImage,
    github_link: "https://github.com/itsvictorg/Text-Editor-PWA",
    deployed_link: "https://j-a-t-e-pwa.herokuapp.com/",
  },
  {
    name: "Resident Portal",
    description:
      "This This is a project I collaborated on with a team of four. I contributed mostly to the JS portion of the code using third-party APIs to get information about events and weather from given a date and location to help users create plans for their days off. a project I collaborated on with a team of 5. It is a full stack application utilizing node.js, express.js, handlebars.js, mySQL, sequelize, npm, bcrypt, and more. I contributed mostly to the back-end portion of this project by setting up the database models, server routes. I also created an api to handle user registration and authentication as well as rendering data from the mySQL database to the user interface. ",
    image: residentPortalImage,
    github_link: "https://github.com./itsvictorg/Resident-Portal",
    deployed_link: "https://resident-portal.herokuapp.com/",
  },
  {
    name: "Day Planner",
    description:
      "This is a project I collaborated on with a team of 5. It is a full stack application utilizing node.js, express.js, handlebars.js, mySQL, sequelize, npm, bcrypt, and more. I contributed mostly to the back-end portion of this project by setting up the database models, server routes. I also created an api to handle user registration and authentication as well as rendering data from the mySQL database to the user interface. ",
    image: dayPlannerImage,
    github_link: "https://github.com/Adam42288/team-4-project",
    deployed_link: "https://adam42288.github.io/team-4-project/",
  },
];

export default function Projects() {
  return (
    <>
    <MediaQuery query="(min-width: 769px)">
      <Container fluid style={containerStyle}>
      <Row style={rowStyle}>
      <h1 style={fontStyle}>PROJECTS</h1>
      </Row>

      <Row style={rowStyle} className="projects">
          
      {projects.map((project, i) => {
        return (
         <CardComponent key={i} name={project.name} description={project.description} image={project.image} github_link={project.github_link} deployed_link={project.deployed_link} />
        );
      })}
      
      </Row>
      </Container>

      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">

<Container fluid style={mobileContainerStyle}>
      <Row style={mobileRowStyle}>
      <h1 style={mobileFontStyle}>PROJECTS</h1>
      </Row>

      <Row style={mobileRowStyle}>
          
      {projects.map((project, i) => {
        return (
         <CardComponent key={i} name={project.name} description={project.description} image={project.image} github_link={project.github_link} deployed_link={project.deployed_link} />
        );
      })}
      
      </Row>
      </Container>
      </MediaQuery>
    </>
  );
}
