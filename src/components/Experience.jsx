import React, { useState, useEffect, useRef } from "react";
import RevealBlock from "./RevealBlock";

const experienceItems = [
  {
    date: "Sept 2025 - Present",
    title: "Software Engineer @ Management and Science University",
    description: [],
    skills: ["PHP", "Git"],
    current: true,
  },
  {
    date: "May 2025 - Aug 2025",
    title: "Software Developer @ MN Solutions Sdn Bhd",
    description: [
      "Developed backend application for VoxHero using Flask (Python) and MongoDB, including reporting and dashboard webhooks and APIs.",
      "Collaborated on bug fixes for MDTax system using OutSystems in partnership with MDEC, ensuring system stability and performance.",
      "Engaged in daily Agile ceremonies including sprint planning, reviews, and retrospectives, contributing to iterative development, continuous feedback integration, and timely feature delivery.",
      "Developed reusable components and implemented clean code practices to improve maintainability and facilitate faster development cycles.",
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
    date: "Sept 2024 - Feb 2025",
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
    date: "July 2021 - July 2022",
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
    date: "July 2021 - October 2021",
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
    date: "May 2021 - July 2021",
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
  const [lineProgress, setLineProgress] = useState(0);
  const timelineRef = useRef(null);

  // Scroll-driven timeline progress bar
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportTrigger = window.innerHeight * 0.65;
      const scrolled = viewportTrigger - rect.top;
      const ratio = Math.min(Math.max(scrolled / rect.height, 0), 1);
      setLineProgress(ratio);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, [showAll]);

  const primaryItems = experienceItems.slice(0, VISIBLE_COUNT);
  const extraItems = experienceItems.slice(VISIBLE_COUNT);

  const renderCard = (item, index, isExtra = false) => {
    const [role, company] = item.title.split(" @ ");
    const date = item.date.replace(/[()]/g, "");

    const cardBody = (
      <div className="relative pb-6 last:pb-0">
        {/* Timeline node */}
        <span
          aria-hidden="true"
          className={`absolute top-9 -start-[31px] md:-start-[39px] flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-black transition-colors duration-500 ${
            item.current
              ? "bg-[#2997ff] shadow-[0_0_12px_rgba(41,151,255,0.8)]"
              : "bg-neutral-500 group-hover:bg-[#2997ff]"
          }`}
        />

        <article className="group rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <time className="text-xs sm:text-sm font-medium text-neutral-400">
              {date}
            </time>

            {item.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2997ff]/15 border border-[#2997ff]/30 px-2.5 py-0.5 text-xs font-medium text-[#66b5ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2997ff] animate-pulse" />
                Current
              </span>
            )}
          </div>

          <h3 className="mt-2.5 text-xl sm:text-2xl font-semibold tracking-tight text-white">
            {role}
          </h3>
          {company && (
            <p className="mt-1 text-sm sm:text-base text-neutral-400">
              {company}
            </p>
          )}

          {item.description.length > 0 && (
            <ul className="mt-5 list-disc space-y-2 ps-5 text-sm sm:text-[15px] leading-relaxed text-neutral-300 marker:text-neutral-600">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 text-xs text-neutral-300 transition-colors group-hover:border-white/15"
              >
                {skill}
              </li>
            ))}
          </ul>
        </article>
      </div>
    );

    if (isExtra) {
      return <li key={item.title}>{cardBody}</li>;
    }

    return (
      <li key={item.title}>
        <RevealBlock delay={index * 90}>{cardBody}</RevealBlock>
      </li>
    );
  };

  return (
    <section
      id="experience"
      className="relative bg-black text-white py-24 md:py-36 border-t border-white/[0.06]"
    >
      <div className="container mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <RevealBlock className="max-w-3xl mb-14 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
            Where I’ve worked.{" "}
            <span className="text-neutral-500">And what I’ve shipped.</span>
          </h2>
        </RevealBlock>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative ms-3 ps-6 md:ps-8">
          {/* Base dim vertical track */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 start-0 w-[1px] bg-white/10"
          />

          {/* Scroll-driven active blue progress line */}
          <div
            aria-hidden="true"
            style={{ transform: `scaleY(${lineProgress})` }}
            className="origin-top absolute top-2 bottom-2 start-0 w-[1.5px] bg-gradient-to-b from-[#2997ff] via-[#2997ff] to-[#66b5ff] transition-transform duration-150 ease-out"
          />

          <ol className="list-none">
            {primaryItems.map((item, index) => renderCard(item, index, false))}
          </ol>

          {/* Smooth CSS Grid Accordion for older roles */}
          {extraItems.length > 0 && (
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showAll
                  ? "grid-rows-[1fr] opacity-100 mt-0"
                  : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <ol className="list-none">
                  {extraItems.map((item, index) =>
                    renderCard(item, index, true)
                  )}
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        {experienceItems.length > VISIBLE_COUNT && (
          <RevealBlock className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-6 py-2.5 text-sm font-medium text-neutral-200 transition-all hover:bg-white/[0.1] hover:border-white/20 hover:text-white active:scale-95 cursor-pointer"
            >
              <span>
                {showAll
                  ? "Show fewer roles"
                  : `View ${extraItems.length} earlier roles`}
              </span>
              <span
                aria-hidden="true"
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </RevealBlock>
        )}
      </div>
    </section>
  );
};

export default Experience;