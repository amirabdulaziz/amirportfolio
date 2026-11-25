import React, { useEffect, useRef, useState } from "react";
import ab1 from "../assets/ab1.svg";
import ab2 from "../assets/ab2.svg";
import ab3 from "../assets/ab3.svg";
import "./About.css";

const focusAreas = [
  {
    img: ab1,
    alt: "Web and mobile development",
    title: "Web & Mobile Engineering",
    note: "Responsive, production-ready interfaces built with React, Vue, Ionic, and TypeScript.",
  },
  {
    img: ab2,
    alt: "UI/UX design",
    title: "UI/UX Design",
    note: "Clean, accessible user flows and design systems crafted in Figma.",
  },
  {
    img: ab3,
    alt: "Quality assurance and testing",
    title: "Quality & Testing",
    note: "Structured testing and edge-case verification to catch issues before release.",
  },
];

// Reusable scroll-reveal wrapper using native IntersectionObserver
const RevealBlock = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-section ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 md:py-36 border-t border-white/[0.06]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Editorial Statement */}
        <RevealBlock className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-5">
            About
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
            Frontend first.{" "}
            <span className="text-neutral-500">Full stack when it counts.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white">
            I’m a Software Engineer specializing in frontend development with
            React, Vue, Ionic, and TypeScript.{" "}
            <span className="text-neutral-400">
              Using Tailwind CSS and clean component architecture, I turn
              complex requirements into calm, intuitive interfaces—backed by
              practical experience in Laravel, Flask, MySQL, Firebase, and
              Figma to ship complete, reliable applications.
            </span>
          </p>
        </RevealBlock>

        {/* Core Focus Cards */}
        <div className="mt-20 md:mt-28">
          <RevealBlock>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Disciplines
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  What I focus on.
                </h3>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#project"
                  className="text-[#2997ff] hover:text-[#66b5ff] transition-colors font-medium"
                >
                  Explore projects &rsaquo;
                </a>
                <a
                  href="#experience"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Experience &rsaquo;
                </a>
              </div>
            </div>
          </RevealBlock>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {focusAreas.map(({ img, alt, title, note }, index) => (
              <RevealBlock key={title} delay={index * 110} className="h-full">
                <article className="group h-full flex flex-col justify-between rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
                  <div>
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 p-3 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={img}
                        alt={alt}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                      {title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      {note}
                    </p>
                  </div>
                </article>
              </RevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;