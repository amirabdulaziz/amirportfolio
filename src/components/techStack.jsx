import React from "react";
import { IoLogoIonic, IoLogoFirebase } from "react-icons/io5";
import {
  FaReact,
  FaFigma,
  FaLaravel,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import { RiTailwindCssFill, RiVuejsFill } from "react-icons/ri";
import RevealBlock from "./RevealBlock";

// Layout lives in the data: change `span` to reshape the bento grid.
const groups = [
  {
    title: "Frontend",
    note: "Interfaces for web and mobile.",
    span: "md:col-span-4",
    items: [
      { name: "Ionic", icon: IoLogoIonic },
      { name: "React", icon: FaReact },
      { name: "Vue", icon: RiVuejsFill },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Styling",
    note: "Design systems and utilities.",
    span: "md:col-span-2",
    items: [
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    title: "Backend",
    note: "APIs, auth, and business logic.",
    span: "md:col-span-3",
    items: [
      { name: "Laravel", icon: FaLaravel },
      { name: "CodeIgniter", icon: DiCodeigniter },
      { name: "Flask", icon: BiLogoFlask },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    title: "Database",
    note: "Relational and document stores.",
    span: "md:col-span-3",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    note: "Hosting, version control, and design.",
    span: "md:col-span-6",
    items: [
      { name: "Firebase", icon: IoLogoFirebase },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

const Tile = ({ name, icon: Icon }) => (
  <li className="group/tile flex w-[88px] sm:w-24 flex-col items-center gap-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] px-2 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/15">
    <Icon
      aria-hidden="true"
      className="text-3xl sm:text-4xl text-neutral-400 transition-colors duration-300 group-hover/tile:text-white"
    />
    <span className="text-center text-xs leading-tight text-neutral-400 transition-colors duration-300 group-hover/tile:text-white">
      {name}
    </span>
  </li>
);

const TechStack = () => {
  return (
    <section
      id="stack"
      className="relative bg-black text-white py-24 md:py-36 border-t border-white/[0.06]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <RevealBlock className="max-w-3xl mb-14 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
            The tools I build with.{" "}
            <span className="text-neutral-500">Front to back.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-2xl">
            Frameworks, databases, and daily tools I use to design, build, and
            ship applications.
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {groups.map(({ title, note, span, items }, index) => (
            <RevealBlock
              key={title}
              delay={index * 90}
              className={`${span} h-full`}
            >
              <article className="group h-full flex flex-col justify-between gap-8 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
                <header>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-400">{note}</p>
                </header>

                <ul className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <Tile key={item.name} {...item} />
                  ))}
                </ul>
              </article>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;