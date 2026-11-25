import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import RevealBlock from "./RevealBlock";
import IChatMate from "../assets/IchatMateImg.png";
import Upsifh from "../assets/upsifh.png";
import BudakGemok from "../assets/1.svg";

const projects = [
  {
    img: IChatMate,
    alt: "IChatMate counseling assistant chatbot interface",
    title: "IChatMate",
    subtitle: "Counseling Assistant Chatbot · Islamic Principles & CBT",
    github: "https://github.com/amirabdulaziz/",
    description:
      "Personal counseling assistant chatbot that integrates Islamic principles and Cognitive Behavioral Theory (CBT) to provide structured guidance and support for students.",
    tags: [
      "Ionic",
      "React",
      "Tailwind CSS",
      "Python",
      "Flask",
      "LlamaIndex",
      "OpenAI",
      "Firebase",
      "Render",
    ],
  },
  {
    img: Upsifh,
    alt: "UPSIFH fitness helper app preview",
    title: "UPSIFH",
    subtitle: "Workout & Exercise Reference App",
    github: "https://github.com/amirabdulaziz/",
    description:
      "Fitness helper providing barbell and dumbbell exercise guides across five key muscle groups, complete with step-by-step instructions and workout routines.",
    tags: ["Ionic", "React", "Tailwind CSS", "Firebase"],
  },
  {
    img: BudakGemok,
    alt: "4BudakGemokz Burgers ordering system preview",
    title: "4BudakGemokz Burgers",
    subtitle: "Digital Food Ordering & Pickup Platform",
    github: "https://github.com/amirabdulaziz/",
    description:
      "Food ordering web app with menu customization, order flow, and pickup tracking built for fast, straightforward ordering.",
    tags: ["Vue.js", "Tailwind CSS", "Firebase"],
  },
];

const ProjectCard = ({
  img,
  alt,
  title,
  subtitle,
  github,
  description,
  tags,
  featured,
  delay = 0,
}) => (
  <RevealBlock
    delay={delay}
    className={`h-full ${featured ? "lg:col-span-2" : ""}`}
  >
    <article
      className={`group h-full flex flex-col overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 ${
        featured ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`aspect-[16/10] overflow-hidden bg-neutral-950 ${
          featured ? "lg:aspect-auto lg:min-h-[340px] lg:w-3/5" : ""
        }`}
      >
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`flex flex-1 flex-col gap-5 p-7 sm:p-8 md:p-9 ${
          featured ? "lg:w-2/5" : ""
        }`}
      >
        <div className="space-y-1.5">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-sm leading-snug text-neutral-400">{subtitle}</p>
        </div>

        <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-300">
          {description}
        </p>

        <ul className="mt-auto pt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 text-xs text-neutral-300 transition-colors group-hover:border-white/15"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="pt-1">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#2997ff] hover:text-[#66b5ff] transition-colors"
          >
            <FaGithub aria-hidden="true" className="text-base" />
            <span>View on GitHub</span>
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </div>
      </div>
    </article>
  </RevealBlock>
);

const Work = () => {
  const history = useHistory();
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToTopAndRedirect = () => {
    scroll.scrollToTop({
      duration: 450,
      smooth: "easeInOutCubic",
    });
    timeoutRef.current = setTimeout(() => {
      history.push("/more-project");
    }, 450);
  };

  return (
    <section
      id="project"
      className="relative bg-black text-white py-24 md:py-36 border-t border-white/[0.06]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <RevealBlock className="max-w-3xl mb-14 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
            Selected work.{" "}
            <span className="text-neutral-500">From concept to release.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-2xl">
            Applications built across web and mobile using React, Vue, Ionic,
            and Python backends.
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              featured={index === 0}
              delay={index * 110}
              {...project}
            />
          ))}
        </div>

        <RevealBlock className="mt-14 text-center">
          <button
            type="button"
            onClick={scrollToTopAndRedirect}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-6 py-2.5 text-sm font-medium text-neutral-200 transition-all hover:bg-white/[0.1] hover:border-white/20 hover:text-white active:scale-95 cursor-pointer"
          >
            <span>View more projects</span>
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </RevealBlock>
      </div>
    </section>
  );
};

export default Work;