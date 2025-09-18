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
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const TechStack = () => {
  return (
    <section className="" id="stack">
      <div className="container mx-auto max-w-full py-[200px] text-white h-auto px-4">
        <div
          data-aos="zoom-in-up"
          className="max-w-[70vh] mx-auto px-4 md:px-10 space-y-2"
        >
          <div className="text-center">
            <h3 className="text-4xl font-semibold mb-5">
              Tech <span>Stack</span>
            </h3>
            <p className="text-gray-500 py-6">
              Curious about my <span className="primary-color">stack?</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p className="primary-color py-6">Front end Stack</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <IoLogoIonic className="text-4xl mb-2" />
                <p className="text-sm">Ionic</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl mb-2" />
                <p className="text-sm">ReactJs</p>
              </div>
              <div className="flex flex-col items-center">
                <RiVuejsFill className="text-4xl mb-2" />
                <p className="text-sm">VueJs</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl mb-2" />
                <p className="text-sm">TypeScript</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p className="primary-color py-6">Styling Stack</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <RiTailwindCssFill className="text-4xl mb-2" />
                <p className="text-sm">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaBootstrap className="text-4xl mb-2" />
                <p className="text-sm">Bootstrap</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p className="primary-color py-6">Backend end Stack</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <FaLaravel className="text-4xl mb-2" />
                <p className="text-sm">Laravel</p>
              </div>
              <div className="flex flex-col items-center">
                <DiCodeigniter className="text-4xl mb-2" />
                <p className="text-sm">Codeigniter</p>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoFlask className="text-4xl mb-2" />
                <p className="text-sm">Flask Python</p>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl mb-2" />
                <p className="text-sm">NodeJs</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p className="primary-color py-6">Database Stack</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <SiMysql className="text-4xl mb-2" />
                <p className="text-sm">MySQL</p>
              </div>
                <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl mb-2" />
                <p className="text-sm">Mongodb</p>
              </div>
                              <div className="flex flex-col items-center">
                <SiPostgresql className="text-4xl mb-2" />
                <p className="text-sm">Postgresql</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <p className="primary-color py-6">Other Stack</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <IoLogoFirebase className="text-4xl mb-2" />
                <p className="text-sm">Firebase</p>
              </div>
               <div className="flex flex-col items-center">
                <FaGitAlt className="text-4xl mb-2" />
                <p className="text-sm">Git</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub className="text-4xl mb-2" />
                <p className="text-sm">GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <FaFigma className="text-4xl mb-2" />
                <p className="text-sm">Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
