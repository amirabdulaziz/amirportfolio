import React from "react";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "./DownloadButton";
import me2 from "../assets/me4.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Subtle ambient spotlight behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[12%] -translate-y-1/2 h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-[#2997ff]/[0.06] blur-3xl"
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center">
          {/* Left Column: Editorial Typography & Intro */}
          <div className="md:col-span-7 text-left">
            <div className="reveal-hero reveal-delay-1">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4">
                Amir Abdul Aziz · Jerantut, Pahang
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-white min-h-[2.2em] sm:min-h-[1.15em]">
                <TypeAnimation
                  sequence={[
                    "UI/UX designer.",
                    1500,
                    "Frontend engineer.",
                    1500,
                    "Full-stack developer.",
                    1500,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </h1>
            </div>

            <div className="reveal-hero reveal-delay-2">
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-400 max-w-xl font-normal">
                I build thoughtful interfaces and reliable web systems with
                React, Flask, and Laravel—focused on clarity, usability, and
                inclusive technology.
              </p>

              <div className="mt-9 flex items-center gap-4">
                <DownloadButton />
              </div>
            </div>
          </div>

          {/* Right Column: Clean Framed Portrait */}
          <div className="md:col-span-5 flex justify-center md:justify-end reveal-hero reveal-delay-3">
            <div className="group relative w-64 sm:w-72 md:w-[360px] rounded-3xl bg-white/[0.03] border border-white/10 p-4 sm:p-5 backdrop-blur-xs transition-colors duration-300 hover:border-white/20">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-950/80 flex items-end justify-center">
                <img
                  src={me2}
                  alt="Amir Abdul Aziz"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between px-1 text-xs text-neutral-400">
                <span>React · Flask · Laravel</span>
                <span className="text-neutral-500">Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;