import React from "react";
import Footer from "../components/Footer";
import RevealBlock from "../components/RevealBlock";
import userprofile from "../assets/me4.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DownloadButton from "../components/DownloadButton";

const education = [
  {
    degree: "Bachelor of Software Engineering (Educational Software)",
    school: "Sultan Idris Education University",
    date: "Sept 2021 - Sept 2025 | Present",
    result: "Current CGPA: 3.78",
  },
  {
    degree: "Diploma in Computer Science (Internet Computing)",
    school: "Sultan Idris Education University",
    date: "May 2019 - Sept 2021",
    result: "CGPA: 3.70",
  },
  {
    degree: "Sijil Pelajaran Malaysia (SPM)",
    school: "Sekolah Menengah Kebangsaan Temin",
    date: "Jan 2012 - Sept 2018",
    result: "Results: 1A+ 3A 2A- 1B+",
  },
];

const experienceItems = [
  {
    date: "Sept 2025 - Present",
    role: "Software Engineer",
    company: "Management and Science University",
    description: [],
    skills: ["PHP", "Git"],
    current: true,
  },
  {
    date: "May 2025 - Aug 2025",
    role: "Software Developer",
    company: "MN Solutions Sdn Bhd",
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
    role: "ICT Intern | Frontend developer",
    company: "PKT Logistics Sdn Bhd",
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
    date: "July 2021 - October 2021",
    role: "Store Crew",
    company: "7-Eleven",
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
    date: "July 2021 - July 2022",
    role: "Junior Programmer",
    company: "Akla Services Sdn Bhd",
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
    date: "May 2021 - July 2021",
    role: "Internship",
    company: "Akla Services Sdn Bhd",
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

const skillGroups = [
  {
    title: "Programming",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Ionic",
      "Codeigniter",
      "MySQL",
      "PHP",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Software",
    items: [
      "Microsoft words or docs",
      "Microsoft Excel or sheets",
      "Visual Studio",
      "Github Desktop",
      "Figma",
      "Draw.io",
      "Mockflow",
      "WordPress",
      "Postman",
      "OBS Studio",
    ],
  },
  {
    title: "Technical writing and documentation",
    items: [
      "Software Requirements Specifications (SRS)",
      "Software Design Documents (SDD)",
      "Architecture Diagrams (ADV1-ADV3)",
      "Software Test Documents (STD)",
    ],
  },
  {
    title: "Soft skills",
    items: [
      "Presentation Skills",
      "Problem Solving",
      "Team Work",
      "Communication",
    ],
  },
];

const languages = [
  { name: "Malay", level: "Native Speaker" },
  { name: "English", level: "Full Working" },
];

const contacts = [
  {
    icon: FaGithub,
    label: "amirabdulaziz",
    href: "https://github.com/amirabdulaziz",
  },
  {
    icon: FaInstagram,
    label: "amrrxz",
    href: "https://www.instagram.com/amrrxz/",
  },
  {
    icon: FaLinkedin,
    label: "Mohamad Ainulamir",
    href: "https://www.linkedin.com/in/mohamad-ainulamir-45a16719a/",
  },
  {
    icon: FaEnvelope,
    label: "amirabdulaziz01@gmail.com",
    href: "mailto:amirabdulaziz01@gmail.com",
  },
];

const Card = ({ children, className = "" }) => (
  <div
    className={`h-full rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 ${className}`}
  >
    {children}
  </div>
);

const Pills = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className="rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 text-xs text-neutral-300"
      >
        {item}
      </li>
    ))}
  </ul>
);

const SectionHeading = ({ eyebrow, title, highlight }) => (
  <RevealBlock className="mb-8 mt-20 md:mb-10 md:mt-28">
    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
      {eyebrow}
    </p>
    <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
      {title} <span className="text-neutral-500">{highlight}</span>
    </h3>
  </RevealBlock>
);

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="container mx-auto max-w-5xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="reveal-hero reveal-delay-1">
            <img
              alt="Mohamad Ainulamir"
              src={userprofile}
              className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover object-top ring-1 ring-white/20"
            />
          </div>

          <div className="reveal-hero reveal-delay-2">
            <h2 className="mt-7 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Mohamad Ainulamir bin Abdul Aziz
            </h2>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl text-neutral-400">
              Software Engineer
            </p>
          </div>

          <div className="reveal-hero reveal-delay-3 mt-8">
            <DownloadButton />
          </div>
        </div>

        {/* Education */}
        <SectionHeading
          eyebrow="Academic Background"
          title="Education."
          highlight="Where I studied."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {education.map((e, index) => (
            <RevealBlock key={e.degree} delay={index * 100} className="h-full">
              <Card className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold leading-snug tracking-tight text-white">
                  {e.degree}
                </h4>
                <p className="text-sm text-neutral-300">{e.school}</p>
                <p className="text-xs sm:text-sm text-neutral-400">{e.date}</p>
                <p className="mt-auto pt-4 text-sm font-medium text-[#66b5ff]">
                  {e.result}
                </p>
              </Card>
            </RevealBlock>
          ))}
        </div>

        {/* Experience */}
        <SectionHeading
          eyebrow="Career History"
          title="Experience."
          highlight="Where I've worked."
        />
        <ol className="ms-3 border-s border-white/10 ps-6 md:ps-8">
          {experienceItems.map((item, index) => (
            <li
              key={`${item.role}-${item.date}`}
              className={`relative ${
                index === experienceItems.length - 1 ? "" : "mb-5"
              }`}
            >
              <RevealBlock delay={index * 80}>
                <span
                  aria-hidden="true"
                  className={`absolute top-9 -start-[31px] md:-start-[39px] h-3 w-3 rounded-full ring-4 ring-black ${
                    item.current
                      ? "bg-[#2997ff] shadow-[0_0_12px_rgba(41,151,255,0.8)]"
                      : "bg-neutral-500"
                  }`}
                />
                <Card>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <time className="text-xs sm:text-sm text-neutral-400">
                      {item.date}
                    </time>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2997ff]/15 border border-[#2997ff]/30 px-2.5 py-0.5 text-xs font-medium text-[#66b5ff]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2997ff] animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h4 className="mt-2.5 text-xl sm:text-2xl font-semibold tracking-tight text-white">
                    {item.role}
                  </h4>
                  <p className="mt-1 text-sm sm:text-base text-neutral-400">
                    {item.company}
                  </p>

                  {item.description.length > 0 && (
                    <ul className="mt-5 list-disc space-y-2 ps-5 text-sm sm:text-[15px] leading-relaxed text-neutral-300 marker:text-neutral-600">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6">
                    <Pills items={item.skills} />
                  </div>
                </Card>
              </RevealBlock>
            </li>
          ))}
        </ol>

        {/* Skills */}
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills."
          highlight="What I work with."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <RevealBlock
              key={group.title}
              delay={index * 100}
              className="h-full"
            >
              <Card className="flex flex-col gap-6">
                <h4 className="text-xl font-semibold tracking-tight text-white">
                  {group.title}
                </h4>
                <Pills items={group.items} />
              </Card>
            </RevealBlock>
          ))}
        </div>

        {/* Languages + Contact */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <RevealBlock delay={0} className="h-full">
            <Card className="flex flex-col gap-6">
              <h4 className="text-xl font-semibold tracking-tight text-white">
                Languages
              </h4>
              <ul className="space-y-4">
                {languages.map((l) => (
                  <li key={l.name}>
                    <p className="font-medium text-white">{l.name}</p>
                    <p className="text-sm text-neutral-400">{l.level}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealBlock>

          <RevealBlock delay={100} className="h-full">
            <Card className="flex flex-col gap-6">
              <h4 className="text-xl font-semibold tracking-tight text-white">
                Get in touch
              </h4>
              <ul className="space-y-4">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 break-all text-sm sm:text-base text-neutral-300 transition-colors hover:text-white"
                    >
                      <Icon
                        size={20}
                        aria-hidden="true"
                        className="shrink-0 text-[#2997ff]"
                      />
                      <span className="group-hover:underline">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealBlock>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resume;