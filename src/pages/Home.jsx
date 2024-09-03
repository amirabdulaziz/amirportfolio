import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Tech from "../components/techStack";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Element name="home" className="element">
        <Hero />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="experience" className="element">
        <Experience />
      </Element>
      <Element name="project" className="element">
        <Work />
      </Element>
      <Element name="tech stack" className="element">
        <Tech />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
