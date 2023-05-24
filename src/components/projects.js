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
const recipeSearchImage = require("../assets/images/Recipe-Search.png");



const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "85vw",
  
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
  flexWrap: "wrap",
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
    name: "Recipe Search App",
    description:
      "This site was designed so that a user may search for random recipes and save those recipes. The user then can navigate to their very own personal 'Dashboard' where they may make changes to that recipe with their own personal preferences, provided they have signed up and logged in. Even user's not signed up with our site have the option to use the random 'Recipe Searcher' to find recipes they may suit their needs.",
    image: recipeSearchImage,
    github_link: "https://github.com/itsvictorg/Recipe-Search",
    deployed_link: "https://recipe-p3-mern.herokuapp.com/",
  },
  {
    name: "Social Media Blog App",
    description:
      "I successfully developed a comprehensive full-stack application from scratch, utilizing an array of technologies. Leveraging the power of Node.js, Express.js, MySQL, Handlebars.js, and JavaScript, I meticulously crafted a robust and dynamic solution. While the project posed both enjoyable and challenging moments, it proved instrumental in honing my skills in seamless communication between the back-end and front-end. A vital lesson I learned from this experience was the importance of writing efficient and reusable code, as even seemingly small projects like this can quickly grow into formidable beasts if not approached with efficiency in mind. By emphasizing code optimization and reusability, I not only delivered a successful project but also deepened my understanding of sustainable development practices.",
    image: blogImage,
    github_link: "https://github.com/itsvictorg/Blog-App",
    deployed_link: "https://www.notenoughstacks.com/",
  },
  {
    name: "Text Editor PWA",
    description:
      "I created a progressive web application that allows users to effortlessly create and store notes or code snippets, even without an internet connection, ensuring easy access whenever needed. This project was built using HTML, CSS, JavaScript, and Webpack, serving as a platform for me to explore the world of progressive web applications and their functionalities. Additionally, it provided an opportunity for me to delve into the local storage API and learn how to effectively store data directly in the user's browser. Through this project, I gained valuable insights into the potential of progressive web applications and expanded my skills in utilizing the local storage API for seamless data management. ",
    image: textEditorImage,
    github_link: "https://github.com/itsvictorg/Text-Editor-PWA",
    deployed_link: "https://j-a-t-e-pwa.herokuapp.com/",
  },
  {
    name: "Resident Portal",
    description:
      "I had the opportunity to collaborate with a talented team of five individuals on an exciting project. Our collective effort resulted in a robust full-stack application, where we leveraged a range of technologies such as JavaScript, Node.js, Express.js, Handlebars.js, and MySQL. My primary focus during the collaboration was on the back-end development, where I played a significant role in setting up the database models and server routes. Additionally, I took charge of implementing user registration and authentication through a custom API. Furthermore, I seamlessly integrated the MySQL database with the user interface, ensuring smooth rendering of data. It was a rewarding experience to contribute to this project, utilizing my expertise to create a functional and secure application that empowers users to plan their days off by accessing event and weather information through third-party APIs. ",
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
      <Container fluid style={containerStyle} className="headline-faster">
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

<Container fluid style={mobileContainerStyle} className="headline-faster">
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
