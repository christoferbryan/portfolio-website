import React from "react";
import SideMenu from "../../components/SideMenu";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import StateProvider from "../../components/StateContext";
import Hamburger from "../../components/Hamburger";
import About from "../../components/About";
import Works from "../../components/Works";
import Footer from "../../components/Footer";
import './style.css';
import Testimonial from "../../components/Testimonials";
import Website from "../../components/Websites";

const Home : React.FC = () => {
    return (
        <>
            <StateProvider>
                <SideMenu />
                <Hamburger />
                <NavBar />
                <Hero />
                <About />
                <Works />
                <Website />
                <Testimonial />
                <Footer />
            </StateProvider>

            
        </>
    );
};

export default Home;