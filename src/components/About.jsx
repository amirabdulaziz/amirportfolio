import React from "react";
import ab1 from "../assets/ab1.svg";
import ab2 from "../assets/ab2.svg";
import ab3 from "../assets/ab3.svg";

// Edit these two lines to change the hero copy.
const firstName = "Amir";
const intro =
  "I’m a Software Engineer building sleek, responsive web and mobile apps with React, Vue, Ionic and TypeScript.";

const services = [
  {
    img: ab1,
    alt: "web/mobile development",
    title: "Web/Mobile development",
    note: "Responsive apps built with React, Vue and Ionic.",
  },
  {
    img: ab3,
    alt: "Software tester",
    title: "Software Tester",
    note: "Finding the bugs before your users do.",
  },
  {
    img: ab2,
    alt: "UI/UX design",
    title: "UI/UX Design",
    note: "Clear, user-focused interfaces designed in Figma.",
  },
];

const About = () => {
  return (
    <section className="bg-black text-white" id="about">
      {/* Hero: the first thing visitors see */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-32">
        {/* One soft light behind the headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(41,151,255,0.22), rgba(0,0,0,0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p
            data-aos="fade-up"
            className="primary-color text-lg font-medium md:text-2xl"
          >
            Hi, I’m {firstName}.
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Frontend first.
            <span className="block text-[#86868b]">Full stack when it counts.</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#a1a1a6] md:text-2xl md:leading-snug"
          >
            {intro}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
          >
            <a
              href="#project"
              className="rounded-full bg-[#2997ff] px-7 py-3 text-base font-medium text-white transition-colors hover:bg-[#147ce5]"
            >
              View my projects
            </a>
            <a
              href="#experience"
              className="primary-color text-base hover:underline md:text-lg"
            >
              See my experience &rsaquo;
            </a>
          </div>
        </div>
      </div>

      {/* Bio + services */}
      <div className="container mx-auto px-4 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
            <h3 className="text-4xl font-semibold tracking-tight md:text-6xl">
              About me. <span>A little more.</span>
            </h3>
            <p className="mt-10 text-xl font-semibold leading-snug tracking-tight md:text-2xl">
              I’m a Software Engineer specializing in frontend development, with
              expertise in frameworks like Ionic, ReactJS, VueJS, and TypeScript.
              <span className="text-[#86868b]">
                {" "}
                I create sleek, responsive applications using Tailwind CSS and
                Bootstrap, bringing innovative, user-focused designs to life. I’ve
                built a few projects, and they’re kinda dope! With additional
                skills in backend tools like Laravel, Flask, and MySQL, as well as
                Firebase, GitHub, and Figma, I thrive on tackling challenges and
                delivering impactful, real-world solutions. Let’s build something
                extraordinary!
              </span>
            </p>
          </div>

          <div className="mt-24 md:mt-32">
            <h4 className="mb-8 text-center text-2xl font-semibold tracking-tight md:mb-10 md:text-4xl">
              Services I offer.
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {services.map(({ img, alt, title, note }) => (
                <article
                  key={title}
                  data-aos="zoom-in-up"
                  className="flex flex-col items-center gap-6 rounded-[28px] bg-[#1d1d1f] px-6 py-10 text-center"
                >
                  <img src={img} alt={alt} loading="lazy" className="h-36 w-36" />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
                    <p className="text-sm text-[#86868b]">{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;