import React from "react";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "./DownloadButton";
import me2 from "../assets/me2.png";

const Hero = () => {
  // const sectionStyle = {
  //   backgroundImage: `url(${require("../assets/bg.jpg")})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  return (
    <section className="min-h-screen px-auto" id="home">
      <div className="overflow-hidden">
        {/* <ParticleBackground /> */}
        <div className="  container min-h-[90vh] flex flex-col-reverse md:grid md:grid-cols-2 md:flex-cols-2 md:justify-center gap-2 antialiased max-w-[120vh] md:items-center mx-auto pb-20">
          <div className="flex flex-col px-2 justify-center items-right">
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

            <div>
              <p
                data-aos="fade-right"
                className=" text-white sm:mt-5 sm:max-w-xl md:mt-5 text-md font-light ml-2 "
              >
                Hi, I'm <span className="primary-color">Amir</span> , i am a
                passionate software developer from Jerantut, Pahang. I code in
                Front-end React, and much more. I'm also passionate about
                technology, diversity and inclusion.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="rounded-md shadow mt-10 ml-2 "
            >
              <DownloadButton />
            </div>
          </div>
          <div className="flex px-2">
            <div className="position-center ">
              <div data-aos="fade-left" className="sm:w-[500px] sm:h-[500px]">
                <img alt="Amir" src={me2} className="" />
                {/* <Lottie loop={true} animationData={coder} /> */}
              </div>
              {/* <div
                data-aos="fade-left"
                className="flex text-center mx-auto justify-center items-center"
              >
                <h3 className="primary-color text-lg hidden md:block">
                  #CurrentlyWorkingOnMyPortfolioProjects
                </h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
