import React from "react";
import { Element } from "react-scroll";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Tech from "../components/techStack";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Element name="home" className="block">
        <Hero />
      </Element>

      <Element name="about" className="block">
        <About />
      </Element>

      <Element name="experience" className="block">
        <Experience />
      </Element>

      <Element name="project" className="block">
        <Work />
      </Element>

      <Element name="stack" className="block">
        <Tech />
      </Element>

      <Element name="contact" className="block">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;