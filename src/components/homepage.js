import React from 'react';
import { Link } from "react-router-dom";





export default function Homepage() {
    return(
    <body>
        <h1>Victor Gonzalez</h1>
        <p>Hi! I'm a software developer. I love solving problems and learning new things.</p>
        <Link to="/about" class = "button">About Me</Link>
    </body>
    );
}