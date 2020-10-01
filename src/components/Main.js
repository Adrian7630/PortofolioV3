import React from 'react'

import Menu from './Navbar/Menu';
import Intro from './Article/Intro';
import Portofolio from './Article/Portofolio';
import About from './Article/About';
import Resume from './Article/Resume';
import Contact from './Article/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {

    return (
        <Router>

            <div className = " home ">

                <Menu />


                <Switch>
                    <Route base path = "/" exact component = { Intro } />
                    <Route path = "/Portofolio" component = { Portofolio } />
                    <Route path = "/Resume" component = { Resume } />
                    <Route path = "/About" component = { About } />
                    <Route path = "/Contact" component = { Contact } />
                </Switch>

            </div>

        </Router>
    )
}

export default Main;
