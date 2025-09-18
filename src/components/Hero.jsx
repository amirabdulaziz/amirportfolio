import React from "react";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "./DownloadButton";
import me2 from "../assets/me4.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-bg mt-[-95px] min-h-screen  px-auto" id="home">
      <div className="overflow-hidden pt-20">
        <div className="  container min-h-[90vh] max-w-[115vh] flex flex-col-reverse md:grid md:grid-cols-2 md:flex-cols-2 md:justify-center gap-2 antialiased max-w-[120vh] md:items-center mx-auto pb-20">
          <div className="flex flex-col px-2 justify-center max-w-full">
            <div className="">
              <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold inline-flex m-2 text-left">
                <TypeAnimation
                  sequence={[
                    "Software engineer",
                    1000,
                    "Web & mobile developer",
                    1000,
                    "Software tester",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
            </div>
            <div data-aos="fade-right">
              <div>
                <p className=" text-white sm:mt-5 sm:max-w-xl md:mt-5 text-md font-light ml-2 ">
                  Hi, I'm <span className="primary-color">Amir</span> , i am a
                  passionate software Engineer based in Jerantut, Pahang. I code
                  in Front-end React, and much more. I'm also passionate about
                  technology, diversity and inclusion.
                </p>
              </div>
              <div className="rounded-md shadow mt-10 ml-2 ">
                <DownloadButton />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-2 max-w-full">
            <div className=" flex justify-right items-center">
              <img
                alt="Amir"
                src={me2}
                className="object-contain w-[400px] ml-[40px] mt-[40px] md:mt-0"
              />
            </div>
            <div data-aos="fade-left" className="mt-4">
              <h3 className="primary-color text-lg md:block">
                #WelcomeToMyPortfolio
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
