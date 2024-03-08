import React from "react";
import ab1 from "../assets/ab1.svg";
import ab2 from "../assets/ab2.svg";
import ab3 from "../assets/ab3.svg";
import { Element } from "react-scroll";

const About = () => {
  return (
    <section className="bg-[#232325]" id="about">
      <div className="container mx-auto m-w-full py-[200px] text-white h-auto justify-center items-center">
        <div className="sm:flex-row md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5 text-center">
                  About <span>Me</span>
                </h3>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-center w-auto"
                >
                  <p>
                    Currently enrolled in Bachelor in Software Engineering at
                    University Education of Sultan Idris UPSI. <br />I am
                    looking for internship placement to further develop and
                    apply my skills in the field of Computer Science and
                    Software Engineering. I am particularly drawn to
                    opportunities that provide a friendly and collaborative work
                    environment, where I can not only apply my academic
                    knowledge but also actively engage in real-world projects. I
                    am excited about the prospect of facing new challenges and
                    contributing to the success of your esteemed organization.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <p className="text-center w-auto py-6 mt-8 primary-color">
                    Services I Offered{" "}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-0.5 lg:gap-4 sm:gap-2 h-auto">
                    <div className="mt-4 bg-gray-500/20 rounded-md border border-white/[0.1] bg-card text-card-foreground shadow py-10 ">
                      <div className="flex flex-col justify-center items-center  w-auto mx-auto">
                        <img src={ab1} className="w-40 h-40" />
                        <h4 className="text white font-light text-sm text-center">
                          Web/Mobile development
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-500/20 rounded-md border border-white/[0.1] bg-card text-card-foreground shadow py-10 ">
                      <div className="flex flex-col justify-center items-center  w-auto mx-auto">
                        <img src={ab3} className="w-40 h-40" />
                        <h4 className="text white font-light text-sm text-center">
                          Software Tester
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-500/20 rounded-md border border-white/[0.1] bg-card text-card-foreground shadow py-10">
                      <div className="flex flex-col justify-center items-center  w-auto mx-auto">
                        <img src={ab2} className="w-40 h-40" />
                        <h4 className="text white font-light text-sm text-center">
                          UI/UX Design
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-10 justify-center items-center gap-7"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
