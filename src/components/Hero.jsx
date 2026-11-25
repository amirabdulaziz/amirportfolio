import React from "react";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "./DownloadButton";
import me2 from "../assets/me4.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen mt-[-95px]" id="home">
      <div className="container mx-auto max-w-6xl px-6 pt-32 pb-20 min-h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <TypeAnimation
              sequence={[
                "UI/UX designer",
                1200,
                "Frontend developer",
                1200,
                "Backend with Flask & Laravel",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p
            data-aos="fade-right"
            className="mt-6 text-lg text-neutral-400 max-w-xl font-light"
          >
            Hi, I'm <span className="text-white">Amir</span>, a passionate
            software engineer based in Jerantut, Pahang. I code in front-end
            React, and much more. I'm also passionate about technology,
            diversity and inclusion.
          </p>
          <div className="mt-10">
            <DownloadButton />
          </div>
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center">
          <img
            alt="Amir"
            src={me2}
            className="w-64 md:w-[380px] object-contain"
          />
          <h3 className="primary-color mt-4 text-sm font-mono">
            #WelcomeToMyPortfolio
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;