import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import Skill from '../Skill';
import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';
import Footer from '../footer';
// import ProjectCard from '../Project/ProjectCard';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;