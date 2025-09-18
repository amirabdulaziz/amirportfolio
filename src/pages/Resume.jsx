import React, { useEffect } from "react";
import Footer from "../components/Footer";
import userprofile from "../assets/me4.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DownloadButton from "../components/DownloadButton";

// to prevent the hash from being added
import { useHistory } from "react-router-dom";

const Resume = () => {
  const history = useHistory();

  useEffect(() => {
    history.replace("/resume");
  }, [history]);

  const experienceItems = [
    {
      date: "(Sept 2025 - Present)",
      title: "Software Engineer @ Management and Science University",
      description: [],
      skills: ["PHP", "Git"],
    },
    {
      date: "(May 2025 - Aug 2025)",
      title: "Software Developer @ MN Solutions Sdn Bhd",
      description: [
        "Developed backend application for VoxHero using Flask (Python) and MongoDB, including reporting and dashboard webhooks and APIs.",
        "Collaborated on bug fixes for MDTax system using OutSystems in partnership with MDEC, ensuring system stability and performance.",
        "Engaged in daily Agile ceremonies including sprint planning, reviews, and retrospectives, contributing to iterative development, continuous feedback integration, and timely feature delivery.",
        "Developed reusable components and implemented clean code practices to improve maintainability and facilitate faster development cycles",
        "Participated in peer code reviews and knowledge-sharing sessions to foster team growth and code quality.",
        "Collaborated with QA and DevOps teams to support automated testing and deployment pipelines, reducing manual errors and ensuring seamless CI/CD workflows.",
      ],
      skills: [
        "Flask Python",
        "NodeJs",
        "TailwindCss",
        "Postman",
        "Git",
        "Jira",
        "Code Review",
        "AXIOS API",
        "Outsystems",
        "Figma",
      ],
    },
    {
      date: "(Sept 2024 - Feb 2025)",
      title: "ICT Intern | Frontend developer @ PKT Logistics Sdn Bhd",
      description: [
        "Design and build user-friendly UI components for new modules in the Services Portal (E-Forms).",
        "Collaborated with backend developers for seamless API integration using Axios.",
        "Optimize front-end performance and guarantee cross-browser compatibility for a smooth user experience.",
      ],
      skills: [
        "VueJs",
        "TailwindCss",
        "Postman",
        "Git",
        "Web Design",
        "Code Review",
        "Unit Testing",
        "AXIOS API",
        "Tailwind Css",
        "Figma",
        "Git",
        "Docker",
      ],
    },
    {
      date: "(July 2021 - October 2021)",
      title: "Store Crew @ 7-Eleven",
      description: [
        "Executes assigned tasks to maintain store standards.",
        "Provides customer service aligned with 7-Eleven standards.",
        "Handles cashiering, ordering, and training as directed by the Store Manager/Assistant Manager.",
      ],
      skills: [
        "Customer Service/Assist",
        "Teamwork",
        "Communication",
        "Money Handling",
        "Stock Take",
      ],
    },
    {
      date: "(July 2021 - july 2022)",
      title: "Junior Programmer @ Akla Services Sdn Bhd",
      description: [
        "Designing, developing, maintaining, and analyzing web applications and mobile apps, both front end and back end.",
        "Design ul/UX prototype.",
        "Support for customer services from IT.",
        "Handling documentation such as user data and profiling.",
      ],
      skills: [
        "Web Design",
        "Code Review",
        "Unit Testing",
        "Database report",
        "SQL",
        "Ionic ReactJs",
        "Tailwind Css",
        "Next.Js",
        "Figma",
        "Git",
        "Report Analysis",
      ],
    },
    {
      date: "(May 2021 - july 2021)",
      title: "Internship @ Akla Services Sdn Bhd",
      description: [
        "Sustaining and updating mobile and web apps.",
        "Support for customer services from IT.",
        "Handling documentation such as user data and profiling.",
      ],
      skills: [
        "Web Design",
        "Code Review",
        "Unit Testing",
        "Database report",
        "SQL",
        "Ionic ReactJs",
        "Tailwind Css",
        "Figma",
        "Git",
        "Report Analysis",
      ],
    },
  ];

  return (
    <div>
      <section className="container mx-auto justify-center items-center h-auto px-2 py-[60px]">
        <h2 className="mb-8 text-3xl text-white text-center mt-10">
          <span>résumé</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 ">
          <div className=" bg-gray-500/20 group overflow-hidden rounded-lg shadow-lg md:h-auto sm:h-auto py-10 border border-white/[0.1]">
            <div
              // data-aos="fade-right"
              className="flex flex-col px-4 justify-center items-center"
            >
              <img
                alt="user profile"
                src={userprofile}
                className="relative shrink-0 overflow-hidden rounded-full h-32 w-32 border-4 border-white mt-8 object-cover object-center"
              />
              <h2 className="text-[#b263ff] font-bold text-2xl text-center mt-[24px]">
                MOHAMAD AINULAMIR BIN ABDUL AZIZ
              </h2>
              <p className="text-white text-center text-lg mt-2">
                Software Engineer
              </p>
              <div className="rounded-md shadow mt-10">
                <DownloadButton />
              </div>
            </div>
          </div>
          {/* Bio*/}
          <div className="bg-gray-500/20 group overflow-hidden rounded-lg shadow-lg md:h-auto sm:col-span-2  border border-white/[0.1]">
            <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl py-10">
              <div className="p-6 pt-6 space-y-6">
                <h3 className="primary-color text-lg">#Education</h3>
              </div>
              <div 
              // data-aos="fade-left"
              >
                <div className="px-6">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Barchelor of Software Engineering(Educational Software)
                  </p>
                </div>
                <div className="px-6">
                  <p className="text-gray-400 text-[12px]">
                    Sultan Idris Education University | (Sept 2021 - Sept 2025 |
                    Present)
                  </p>
                  <p className="text-sm text-gray-200">Current CGPA: 3.78</p>
                </div>

                <div className="px-6 pt-6">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Diploma in Computer Science(Internet Computing)
                  </p>
                </div>
                <div className="px-6">
                  <p className="text-gray-400 text-[12px]">
                    Sultan Idris Education University | (May 2019 - Sept 2021)
                  </p>
                  <p className="text-sm text-gray-200">CGPA: 3.70</p>
                </div>
                <div className="px-6 pt-6">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Sijil Pelajaran Malaysia (SPM)
                  </p>
                </div>
                <div className="px-6">
                  {" "}
                  <p className="text-gray-400 text-[12px]">
                    Sekolah Menengah Kebangsaan Temin | (Jan 2012 - Sept 2018)
                  </p>
                  <p className="text-sm text-gray-200">
                    Results: 1A+ 3A 2A- 1B+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="bg-gray-500/20 rounded-xl border border-white/[0.1] bg-card text-card-foreground shadow w-full lg:col-span-12 py-10 mt-10">
          <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl">
            <div className="p-6 space-y-6">
              <h3 className="primary-color text-lg">#Experience</h3>
            </div>
            <ol
              // data-aos="fade-up"
              className="relative border-s border-[#b263ff] dark:border-[#b263ff] ml-6 px-2"
            >
              {experienceItems.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 ms-4 bg-gray-500/20 rounded-xl border border-white/[0.1] p-6"
                >
                   <span className="absolute flex items-center justify-center  w-6 h-6 bg-[#b263ff]  rounded-full -start-3 ring-8 ring-gray-800 dark:ring-gray-900">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>

                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.date}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div
                    // data-aos="fade-right"
                    className="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    <ul>
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    // data-aos="fade-left"
                    className="flex gap-2 flex-wrap py-2 items-center text-white font-light"
                  >
                    {item.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="inline-flex rounded-sm items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-primary-foreground shadow hover:bg-primary/80"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Skills */}
        <div className="bg-gray-500/20 rounded-xl border border-white/[0.1] bg-card text-card-foreground shadow w-full lg:col-span-12 py-10 mt-10">
          <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl">
            <div
              // data-aos="fade-right"
              // data-aos-delay="300"
              className="p-6 space-y-6"
            >
              <h3 className="primary-color text-lg">#Skills</h3>
            </div>
            <div className="px-6">
              <div 
              // data-aos="fade-right" data-aos-delay="300"
              >
                <p className="text-white text-[12px]">Soft Skills</p>
              </div>

              <div
                // data-aos="fade-left"
                className="flex gap-2 flex-wrap py-2 items-center justify-start"
              >
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Presentation Skills
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Problem Solving
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Team Work
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Communication
                </div>
              </div>
            </div>
            <div className="pt-6 px-6">
              <div 
              // data-aos="fade-right" data-aos-delay="300"
              >
                <p className="text-white text-[12px]">Programming Skills</p>
              </div>

              <div
                // data-aos="fade-left"
                // data-aos-delay="300"
                className="flex gap-2 flex-wrap py-2 items-center justify-start"
              >
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  HTML
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  CSS
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  JavaScript
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  React
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Ionic
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Codeigniter
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  MySQL
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  PHP
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Tailwind CSS
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Bootstrap
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  OBS Studio
                </div>
              </div>
            </div>
            <div className="pt-6 px-6">
              <div
              // data-aos="fade-right" data-aos-delay="300"
              >
                <p className="text-white text-[12px]">Software Skills</p>
              </div>

              <div
                // data-aos="fade-left"
                // data-aos-delay="300"
                className="flex gap-2 flex-wrap py-2 items-center justify-start"
              >
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Microsoft words or docs
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Microsoft Excel or sheets
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Visual Studio
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Github Desktop
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Figma
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Draw.io
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Mockflow
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  WordPress
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Postman
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  OBS Studio
                </div>
              </div>
            </div>
            <div className="pt-6 px-6">
              <div 
              // data-aos="fade-right" data-aos-delay="300"
              >
                <p className="text-white text-[12px]">
                  Technical Writing or Documentation Skills
                </p>
              </div>

              <div
                // data-aos="fade-left"
                // data-aos-delay="300"
                className="flex gap-2 flex-wrap py-2 items-center justify-start"
              >
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Software Requlrements Specifications (SRS)
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Software Design Documents (SDD)
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Architecture Diagrams(ADV1-ADV3)
                </div>
                <div className="inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default border-transparent bg-primary-color text-white shadow hover:bg-primary/80">
                  Software Test Documents (STD)
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Language & ReachMeOut Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0.5 lg:gap-6 md:gap-6">
          {/* Language  Section */}
          <div className="bg-gray-500/20 rounded-xl border border-white/[0.1] bg-card text-card-foreground shadow py-10 mt-10">
            <div className="flex flex-col p-6 space-y-6">
              <h3 className="primary-color text-lg">#LanguageSpoken</h3>

              <div
                // data-aos="fade-right"
                // data-aos-delay="300"
                className="grid lg:grid-cols-2 grid-rows-2 mt-4"
              >
                <div>
                  <p className="text-white font-bold text-sm my-2">Malay</p>
                  <p className="text-gray-400 text-sm">Native Speaker</p>
                </div>
                <div>
                  <p className="text-white font-bold text-sm my-2">English</p>
                  <p className="text-gray-400 text-sm">Full Working</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contacts */}
          <div className="bg-gray-500/20 rounded-xl border border-white/[0.1] bg-card text-card-foreground shadow py-10 mt-10">
            <div className="flex flex-col p-6 space-y-6">
              <h3 className="primary-color text-lg">#ReachMeOutVia</h3>

              <div
                // data-aos="fade-left"
                // data-aos-delay="300"
                className="grid lg:grid-cols-2 grid-rows-2 mt-4"
              >
                <div className="flex flex-col ">
                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <a
                        href="https://github.com/amirabdulaziz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={24} color="#b263ff" />
                      </a>
                    </span>
                    <p className="text-white font-bold text-sm">
                      amirabdulaziz
                    </p>
                  </div>
                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <a
                        href="https://www.instagram.com/amrrxz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={24} color="#b263ff" />
                      </a>
                    </span>
                    <p className="text-white font-bold text-sm">amrrxz</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <a
                        href="https://www.linkedin.com/in/mohamad-ainulamir-45a16719a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaLinkedin size={24} color="#b263ff" />
                      </a>
                    </span>
                    <p className="text-white font-bold text-sm">
                      MOHAMAD AINULAMIR
                    </p>
                  </div>

                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <div>
                        <FaEnvelope size={24} color="#b263ff" />
                      </div>
                    </span>
                    <p className="text-white font-bold text-sm">
                      amirabdulaziz01@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
