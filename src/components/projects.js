import React from "react";
import  Card  from './Card';

const projects = [
    {
        name: "Social Media Blog App",
        description: "This is a project I built from the ground up. It is a full stack application I built using node.js, express.js, mySQL, handlebars.js, and sequelize. This project was really fun and frustrating to build at the same time. It helped me really understand how to communicate between the back-end and front-end effectively and efficiently. I think the biggest take away for me from this project was to make sure to write efficient and reusable code because even small projects like this can turn into monsters if not written efficiently. ",
        image: "https://via.placeholder.com/150",
        github_link: "https://github.com/itsvictorg/Blog-App",
        deployed_link: "https://www.notenoughstacks.com/"
    },
    {
        name: "Employee Tracker",
        description: "A command line application used to manage a company's employee database using node.js, inquirer, and mySQL. This application can be used to view employees, employee roles, and departments as well as make changes to those database tables by deleting, adding, or changing employees and their job roles.",
        image: "https://via.placeholder.com/150",
        github_link: "https://github.com/itsvictorg/Employee-Tracker",
        deployed_link: "/"
    },
    {
        name: "Resident Portal",
        description: "This This is a project I collaborated on with a team of four. I contributed mostly to the JS portion of the code using third-party APIs to get information about events and weather from given a date and location to help users create plans for their days off. a project I collaborated on with a team of 5. It is a full stack application utilizing node.js, express.js, handlebars.js, mySQL, sequelize, npm, bcrypt, and more. I contributed mostly to the back-end portion of this project by setting up the database models, server routes. I also created an api to handle user registration and authentication as well as rendering data from the mySQL database to the user interface. ",
        image: "https://via.placeholder.com/150",
        github_link: "https://github.com./itsvictorg/Resident-Portal",
        deployed_link: "https://resident-portal.herokuapp.com/"
    },
    {
        name: "Day Planner",
        description: "This is a project I collaborated on with a team of 5. It is a full stack application utilizing node.js, express.js, handlebars.js, mySQL, sequelize, npm, bcrypt, and more. I contributed mostly to the back-end portion of this project by setting up the database models, server routes. I also created an api to handle user registration and authentication as well as rendering data from the mySQL database to the user interface. ",
        image: "https://via.placeholder.com/150",
        github_link: "https://github.com/Adam42288/team-4-project",
        deployed_link: "/"
    }
]



export default function Projects() {
    return(
<div>
<h1>PROJECTS</h1>
   {projects.map((project, i) => {
return <Card name={projects[i].name} description={projects[i].description} image={projects[i].image} github_link={projects[i].github_link}/>
   })}
</div>
    )};
