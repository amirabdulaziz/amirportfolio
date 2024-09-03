import React from "react";
import { IoLogoIonic } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";

const TechStack = () => {
  return (
    <section className="bg-[#232325]" id="stack">
      <div className="container mx-auto max-w-full py-[200px] text-white h-auto">
        <div className=" max-w-6xl mx-auto px-10">
          <div className="text-center">
            {" "}
            <h3 className="text-4xl font-semibold mb-5">
              Tech <span>Stack</span>
            </h3>
          </div>

          <div className="flex justify-center itesms-center space-x-2">
            <div className="cols cols-6">
              {" "}
              <p className="primary-color py-6">Front end Stack</p>
            </div>
            <div className="cols cols-6">
              {" "}
              <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                  <IoLogoIonic className="text-4xl mb-2" />
                  <p>Ionic</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact className="text-4xl mb-2" />
                  <p>ReactJs</p>
                </div>
                <div className="flex flex-col items-center">
                  <RiVuejsFill className="text-4xl mb-2" />
                  <p>VueJs</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="text-4xl mb-2" />
                  <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiMysql className="text-4xl mb-2" />
                  <p>MySQL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center itesms-center space-x-2">
            <div className="cols cols-6">
              {" "}
              <p className="primary-color py-6">Styling Stack</p>
            </div>
            <div className="cols cols-6">
              {" "}
              <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                  <RiTailwindCssFill className="text-4xl mb-2" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaBootstrap className="text-4xl mb-2" />
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center itesms-center space-x-2">
            <div className="cols cols-6">
              {" "}
              <p className="primary-color py-6">Backend end Stack</p>
            </div>
            <div className="cols cols-6">
              {" "}
              <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                  <FaLaravel className="text-4xl mb-2" />
                  <p>Laravel</p>
                </div>
                <div className="flex flex-col items-center">
                  <DiCodeigniter className="text-4xl mb-2" />
                  <p>Codeigniter</p>
                </div>
                <div className="flex flex-col items-center">
                  <BiLogoFlask className="text-4xl mb-2" />
                  <p>Flask Python</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center itesms-center space-x-2">
            <div className="cols cols-6">
              {" "}
              <p className="primary-color py-6">Other Stack</p>
            </div>
            <div className="cols cols-6">
              {" "}
              <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                  <IoLogoFirebase className="text-4xl mb-2" />
                  <p>Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaGithub className="text-4xl mb-2" />
                  <p>Github</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaFigma className="text-4xl mb-2" />
                  <p>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
