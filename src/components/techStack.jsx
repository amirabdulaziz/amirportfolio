import React from "react";
import { IoLogoIonic, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaFigma, FaLaravel, FaBootstrap, FaGithub, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import { RiTailwindCssFill, RiVuejsFill } from "react-icons/ri";

// Layout lives in the data: change `span` to reshape the bento grid.
const groups = [
  {
    title: "Front end",
    note: "Interfaces for web and mobile.",
    span: "md:col-span-4",
    items: [
      { name: "Ionic", icon: IoLogoIonic },
      { name: "ReactJs", icon: FaReact },
      { name: "VueJs", icon: RiVuejsFill },
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
    note: "APIs, auth and business logic.",
    span: "md:col-span-3",
    items: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Codeigniter", icon: DiCodeigniter },
      { name: "Flask", icon: BiLogoFlask },
      { name: "NodeJs", icon: FaNodeJs },
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
    note: "Hosting, version control and design.",
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
  <li className="group flex w-[88px] flex-col items-center gap-3 rounded-2xl bg-white/[0.04] px-2 py-5 transition-colors duration-300 hover:bg-white/[0.09] sm:w-24">
    <Icon className="text-4xl text-neutral-400 transition-colors duration-300 group-hover:text-white" />
    <span className="text-center text-xs leading-tight text-neutral-400 transition-colors duration-300 group-hover:text-white">
      {name}
    </span>
  </li>
);

const TechStack = () => {
  return (
    <section id="stack">
      <div className="container mx-auto max-w-full px-4 py-24 text-white md:py-32">
        <div data-aos="zoom-in-up" className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <h3 className="text-4xl font-semibold tracking-tight md:text-6xl">
              The tools I build with. <span>Front to back.</span>
            </h3>
            <p className="mt-6 text-base text-[#86868b] md:text-lg">
              Curious about my <span className="primary-color">stack?</span>{" "}
              Here is what I reach for every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
            {groups.map(({ title, note, span, items }) => (
              <article
                key={title}
                className={`${span} flex flex-col justify-between gap-10 rounded-[28px] bg-[#1d1d1f] p-7 md:p-9`}
              >
                <header>
                  <h4 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {title}
                  </h4>
                  <p className="mt-1 text-sm text-[#86868b]">{note}</p>
                </header>
                <ul className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <Tile key={item.name} {...item} />
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;