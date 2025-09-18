import React, { useState } from "react";

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experienceItems = [
    {
      date: "(Sept 2025 - Present)",
      title: "Software Engineer @ Management and Science University",
      description: [],
      skills: ["PHP", "Git"],
      current: true,
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
    <section id="experience">
      <div className="container mx-auto items-center py-[200px] px-10">
        <h2 className="mb-8 text-3xl text-white text-center">
          My <span>Experience</span>
        </h2>
        <div data-aos="fade-up" data-aos-delay="300">
          <ol
            // data-aos="fade-up"
            className=" border-s border-[#b263ff] dark:border-[#b263ff]"
          >
            {experienceItems.map((item, index) => {
              const isHidden = !showAll && index >= 3;

              return (
                <li
                  key={index}
                  className={`ms-6 transition-all duration-500 ease-out mb-2 ${
                    isHidden
                      ? "max-h-0 opacity-0 overflow-hidden transform -translate-y-4"
                      : "max-h-[2000px] opacity-100 transform translate-y-0"
                  } ${index === experienceItems.length - 1 ? "mb-0" : "mb-2"}`}
                >
                  <span className="absolute flex items-center justify-center ml-[-25px] w-6 h-6 bg-[#b263ff] rounded-full -start-3 ring-8 ring-gray-800 dark:ring-gray-900">
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

                  <div className="bg-gray-500/20 rounded-xl border border-white/[0.1] p-6">
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                      {item.title}
                      {/* {item.current && (
                        <span className="bg-[#b263ff] text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">
                          Current
                        </span>
                      )} */}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>

                    {item.description.length > 0 && (
                      <div
                        // data-aos="fade-right"
                        className="mb-4 text-base font-normal text-gray-400"
                      >
                        <ul className="space-y-1">
                          {item.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-sm">
                              • {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div
                      // data-aos="fade-left"
                      className="flex gap-2 flex-wrap items-center text-white font-light"
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
                  </div>
                </li>
              );
            })}
          </ol>


        {experienceItems.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="primary-color"
            >
              <span className="px-6 py-3 primary-color rounded-lg hover:bg-[#9b4fdb] transition-all duration-300 font-medium transform hover:scale-105 active:scale-95">
                {showAll ? "Show Less Experience ↑" : "View More Experience ↓"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Experience;
