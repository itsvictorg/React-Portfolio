import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className='topnav'>
            <div>
            <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/"
                >
                    HOME
                </NavLink>
            </div>
            <div className='topnav-left'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/about"
                >
                    ABOUT
                </NavLink>
            </div>
            <div className='topnav-right'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/projects"
                >
                    PROJECTS
                </NavLink>
                <div>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                >
                    CONTACT
                </NavLink>
                </div>
                <div>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="https://drive.google.com/file/d/1IEeKGaZJlcc0Hvq03ZpclHQvgCQihBVz/view?usp=sharing"
                >
                    RESUME
                </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Nav;