import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import RevealBlock from "../components/RevealBlock";
import BudakGemok from "../assets/1.svg";
import IChatMate from "../assets/IchatMateImg.png";
import Upsifh from "../assets/upsifh.png";
import CNardus from "../assets/CNardus.svg";

const webProjects = [
  {
    img: BudakGemok,
    alt: "4BudakGemokz Burgers ordering system preview",
    title: "4BudakGemokz Burgers",
    subtitle: "Food Ordering System · Vue.js",
    github: "https://github.com/amirabdulaziz/",
    description:
      "Food ordering system offering menu customization, streamlined ordering flow, and pickup tracking built for fast, straightforward browsing.",
    tags: ["Vue.js", "Tailwind CSS", "Firebase"],
    isSvg: true,
  },
  {
    img: CNardus,
    alt: "CNardus natural insect repellent landing page",
    title: "CNardus",
    subtitle: "Product & Client Landing Page",
    github: "https://github.com/amirabdulaziz/cnardus",
    description:
      "Responsive web showcase highlighting natural spray repellents and eco-friendly insect protection with clear product presentation.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    isSvg: true,
  },
];

const mobileProjects = [
  {
    img: IChatMate,
    alt: "IChatMate counseling assistant chatbot interface",
    title: "IChatMate",
    subtitle: "Counseling Assistant Chatbot · Islamic Principles & CBT",
    github: "https://github.com/amirabdulaziz/",
    description:
      "Personal counseling assistant chatbot integrating Islamic principles and Cognitive Behavioral Theory (CBT) to provide personalized student guidance.",
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
      "Fitness helper providing barbell and dumbbell exercise guides across five key muscle groups, complete with step-by-step instructions and visuals.",
    tags: ["Ionic", "React", "Tailwind CSS", "Firebase"],
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
  isSvg = false,
}) => (
  <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
    <div className="aspect-[16/10] overflow-hidden bg-neutral-950 flex items-center justify-center">
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className={`h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
          isSvg ? "object-contain p-6" : "object-cover"
        }`}
      />
    </div>

    <div className="flex flex-1 flex-col gap-5 p-7 sm:p-8">
      <div className="space-y-1.5">
        <h4 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h4>
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
);

const CategorySection = ({ eyebrow, title, highlight, projects, immediate = false }) => (
  <div className="mt-20 first:mt-0 md:mt-28">
    {immediate ? (
      <div className="reveal-hero reveal-delay-3 mb-8 md:mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          {eyebrow}
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          {title} <span className="text-neutral-500">{highlight}</span>
        </h3>
      </div>
    ) : (
      <RevealBlock className="mb-8 md:mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          {eyebrow}
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          {title} <span className="text-neutral-500">{highlight}</span>
        </h3>
      </RevealBlock>
    )}

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project, index) =>
        immediate ? (
          <div key={project.title} className="reveal-hero reveal-delay-3 h-full">
            <ProjectCard {...project} />
          </div>
        ) : (
          <RevealBlock key={project.title} delay={index * 110} className="h-full">
            <ProjectCard {...project} />
          </RevealBlock>
        )
      )}
    </div>
  </div>
);

function Project() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="reveal-hero reveal-delay-1 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <FaArrowLeft aria-hidden="true" className="text-xs" />
            <span>Back to portfolio</span>
          </Link>
        </div>

        <div className="reveal-hero reveal-delay-2 max-w-3xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Project Archive
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-white">
            All projects.{" "}
            <span className="text-neutral-500">Web and mobile.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-2xl">
            Personal and client builds, from early prototypes to deployed
            applications.
          </p>
        </div>

        <div>
          <CategorySection
            eyebrow="Browser"
            title="Web apps."
            highlight="Built for the browser."
            projects={webProjects}
            immediate
          />
          <CategorySection
            eyebrow="Cross-Platform"
            title="Mobile apps."
            highlight="Built with Ionic."
            projects={mobileProjects}
          />
        </div>
      </div>
    </main>
  );
}

export default Project;