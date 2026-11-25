import React, { useState } from "react";

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
      "Figma",
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
    date: "(July 2021 - July 2022)",
    title: "Junior Programmer @ Akla Services Sdn Bhd",
    description: [
      "Designing, developing, maintaining, and analyzing web applications and mobile apps, both front end and back end.",
      "Design UI/UX prototype.",
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
      "TailwindCss",
      "Next.Js",
      "Figma",
      "Git",
      "Report Analysis",
    ],
  },
  {
    date: "(May 2021 - July 2021)",
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
      "TailwindCss",
      "Figma",
      "Git",
      "Report Analysis",
    ],
  },
];

const VISIBLE_COUNT = 3;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="experience">
      <div className="container mx-auto px-4 py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              My experience. <span>Where I've worked.</span>
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <ol className="ms-3 border-s border-white/10 ps-6 md:ps-8">
              {experienceItems.map((item, index) => {
                const isHidden = !showAll && index >= VISIBLE_COUNT;
                const [role, company] = item.title.split(" @ ");
                const date = item.date.replace(/[()]/g, "");

                return (
                  <li
                    key={index}
                    aria-hidden={isHidden}
                    className={`relative transition-all duration-500 ease-out ${
                      isHidden
                        ? "mb-0 max-h-0 -translate-y-4 overflow-hidden opacity-0"
                        : "mb-4 max-h-[2000px] translate-y-0 opacity-100"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-9 -start-[31px] h-3 w-3 rounded-full bg-[#2997ff] ring-4 ring-black md:-start-[39px]"
                    />

                    <article className="rounded-[28px] bg-[#1d1d1f] p-7 md:p-9">
                      <time className="text-sm text-[#86868b]">{date}</time>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                        {role}
                      </h3>
                      {company && (
                        <p className="mt-1 text-base text-[#86868b]">{company}</p>
                      )}

                      {item.description.length > 0 && (
                        <ul className="mt-6 list-disc space-y-2 ps-5 text-[15px] font-light leading-relaxed text-neutral-300 marker:text-neutral-600">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      )}

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-neutral-300"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                );
              })}
            </ol>

            {experienceItems.length > VISIBLE_COUNT && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  aria-expanded={showAll}
                  className="primary-color text-base hover:underline md:text-lg"
                >
                  {showAll ? "Show less experience ↑" : "View more experience ↓"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;