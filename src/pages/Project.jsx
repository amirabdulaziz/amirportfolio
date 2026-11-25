import React from "react";
import { FaGithub } from "react-icons/fa";
import BudakGemok from "../assets/1.svg";
import IChatMate from "../assets/IchatMateImg.png";
import Upsifh from "../assets/upsifh.png";
import CNardus from "../assets/CNardus.svg";

const webProjects = [
  {
    img: BudakGemok,
    alt: "4 Budak Gemok",
    title: "4BudakGemokz Burgers",
    subtitle: "Food Ordering System #LatestVueJsProject",
    github: "https://github.com/amirabdulaziz/",
    description:
      "4BudakGemokz Burgers: Food Ordering System offers a wide variety of appetising selections and simplifies the process of ordering burgers. With only a few taps or clicks, users can satisfy their food cravings due to the platform's easy-to-use customisation tools, safe payment options, and pickup tracking.",
    tags: ["VueJs", "TailwindCss", "Firebase"],
  },
  {
    img: CNardus,
    alt: "CNardus",
    title: "CNardus",
    subtitle: "Client-landing page",
    github: "https://github.com/amirabdulaziz/cnardus",
    description:
      "CNardus is a sophisticated web application designed to advocate and market top-tier spray repellents providing exceptional natural defense against insects. This platform offers users an effective and environmentally friendly solution to protect themselves from insect bites and related nuisances.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

const mobileProjects = [
  {
    img: IChatMate,
    alt: "IChatMate",
    title: "IchatMate",
    subtitle:
      "Your Personal Counseling Assistant Chatbot Using Islamic Intervention and Cognitive Behavioral Theory (CBT) #FinalYearProject",
    github: "https://github.com/amirabdulaziz/",
    description:
      "IChatMate is a personal counseling assistant chatbot that integrates Islamic principles and Cognitive Behavioral Theory (CBT) to provide personalized sessions for students. It aims to offer guidance and support through a combination of faith-based and evidence-based approaches to mental health and well-being.",
    tags: [
      "Ionic",
      "React",
      "TailwindCss",
      "Python",
      "Flask Python",
      "Illama Index",
      "OpenAi",
      "Knowledge base",
      "Firebase",
      "Render",
    ],
  },
  {
    img: Upsifh,
    alt: "UPSIFH",
    title: "UPSIFH",
    subtitle: "Fitness Helper App",
    github: "https://github.com/amirabdulaziz/",
    description:
      "UPSIFH: Fitness Helper provides detailed guides for barbell and dumbbell exercises, targeting five key muscle groups. It offers tailored workouts with step-by-step instructions and images for each exercise, helping users efficiently achieve their fitness goals.",
    tags: ["Ionic", "React", "TailwindCss", "Firebase"],
  },
];

const ProjectCard = ({ img, alt, title, subtitle, github, description, tags }) => (
  <article className="group flex flex-col overflow-hidden rounded-[28px] bg-[#1d1d1f]">
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col gap-5 p-7 md:p-9">
      <div className="space-y-2">
        <h4 className="text-2xl font-semibold tracking-tight text-white">{title}</h4>
        <p className="text-sm leading-snug text-[#86868b]">{subtitle}</p>
      </div>

      <p className="text-[15px] font-light leading-relaxed text-neutral-300">
        {description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-neutral-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-color inline-flex w-fit items-center gap-2 text-sm hover:underline"
      >
        <FaGithub aria-hidden="true" />
        View on GitHub
      </a>
    </div>
  </article>
);

const Section = ({ title, highlight, projects }) => (
  <div className="mt-20 first:mt-0 md:mt-28">
    <h3 className="mb-8 text-3xl font-semibold tracking-tight text-white md:mb-10 md:text-4xl">
      {title} <span>{highlight}</span>
    </h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </div>
);

function Project() {
  return (
    <section>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              All projects. <span>Web and mobile.</span>
            </h2>
            <p className="mt-6 text-base text-[#86868b] md:text-lg">
              Personal projects, from the first idea to the deployed app.
            </p>
          </div>

          <Section title="Web apps." highlight="Built for the browser." projects={webProjects} />
          <Section title="Mobile apps." highlight="Built with Ionic." projects={mobileProjects} />
        </div>
      </div>
    </section>
  );
}

export default Project;