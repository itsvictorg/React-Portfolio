import React  from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import About from '../components/about-me';
import Projects from './projects.js';
import Contact from './contact.js';
import Nav from '../components/nav';

function Header() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="https://drive.google.com/file/d/1AQJcVMBIQHadhfAKY6nrOQ4KzxSAMF0S/view?usp=sharing">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;