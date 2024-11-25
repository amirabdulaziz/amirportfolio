import React from "react";
import BudakGemok from "../assets/1.svg";
import IChatMate from "../assets/IchatMateImg.png";
import Upsifh from "../assets/upsifh.png";
import CNardus from "../assets/CNardus.svg";


function Project() {


  return (
    <section>
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-2xl lg:text-3xl text-white text-center">
            My <span>Projects</span>
          </h2>
          <p className="text-gray-500 text-center">
            These are my latest personal project that I have built.
          </p>
        </div>
        <div className="py-8">
          <h4 className="text-xl text-white font-bold">
            Web Application Project
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 py-4">
          {/* 4 budak gemok */}
          <div
            className=" rounded-xl border bg-gray-500/20 border-white/[0.1] bg-card text-card-foreground shadow w-full lg:w-1/2"
          >
            <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl">
              <div className="top-0 right-0 bottom-0 left-0">
                <img
                  src={BudakGemok}
                  alt="4 Budak Gemok"
                  loading="lazy"
                  className="w-full object-cover transition group-hover:scale-110 border-t border-white/[0.08] rounded-t-xl ease-in-out duration-1000 scale-100 delay-300"
                  style={{
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                />
              </div>

              <div
                className="p-6 pt-6 space-y-6"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-1.5">
                    <h3 className="text-white text-xl font-semibold leading-none tracking-tight">
                      4BudakGemokz Burgers
                    </h3>
                    <p className="text-muted-foreground text-gray-400 text-xs">
                      Food Ordering System #LatestVueJsProject
                    </p>
                  </div>
                  <div className="flex text-gray-400">
                    <a
                      href="https://github.com/amirabdulaziz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 dark:text-neutral-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-sm text-card-foreground text-white font-light text-md">
                4BudakGemokz Burgers: Food Ordering System offers a wide variety of appetising selections and simplifies the process of ordering burgers. With only a few taps or clicks, users can satisfy their food cravings due to the platform's easy-to-use customisation tools, safe payment options, and pickup tracking.
                </p>
              </div>
              <div
                className="px-6 flex gap-2 flex-wrap py-4 items-center"
              >
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  VueJs
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  TailwindCss
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  Firebase
                </div>
              </div>
            </div>
          </div>
          {/* cnardus project */}
          <div
            className="mb-2 rounded-xl border bg-gray-500/20 border-white/[0.1] bg-card text-card-foreground shadow w-full lg:w-1/2"
          >
            <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl">
              <div className="top-0 right-0 bottom-0 left-0">
                <img
                  src={CNardus}
                  alt="cnardus"
                  loading="lazy"
                  className="w-full object-cover transition group-hover:scale-110 border-t border-white/[0.08] rounded-t-xl ease-in-out duration-1000 scale-100 delay-300"
                  style={{
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                />
              </div>

              <div
                className="p-6 pt-6 space-y-6"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-1.5">
                    <h3 className="text-white text-xl font-semibold leading-none tracking-tight">
                      CNardus
                    </h3>
                    <p className="text-muted-foreground text-gray-400 text-xs">
                      Client-landing page
                    </p>
                  </div>
                  <div className="flex text-gray-400">
                    <a
                      href="https://github.com/amirabdulaziz/cnardus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 dark:text-neutral-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-sm text-card-foreground text-white font-light text-md">
                  CNardus is a sophisticated web application designed to
                  advocate and market top-tier spray repellents providing
                  exceptional natural defense against insects. This platform
                  offers users an effective and environmentally friendly
                  solution to protect themselves from insect bites and related
                  nuisances.
                </p>
              </div>
              <div
                className="px-6 flex gap-2 flex-wrap py-4 items-center"
              >
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  HTML
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  CSS
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  JavaScript
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <h4 className="text-xl text-white font-bold">
            Mobile Application project
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 py-4">
          {/* ichatmate project */}
          <div
            className=" rounded-xl border bg-gray-500/20 border-white/[0.1] bg-card text-card-foreground shadow w-full lg:w-1/2 flex flex-col"
          >
            <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl flex-grow">
              <div className="top-0 right-0 bottom-0 left-0">
                <img
                  src={IChatMate}
                  alt="IChatMate"
                  loading="lazy"
                  className="w-full object-cover transition group-hover:scale-110 border-t border-white/[0.08] rounded-t-xl ease-in-out duration-1000 scale-100 delay-300"
                  style={{
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                />
              </div>

              <div
                className="p-4 pt-6 space-y-4 flex-grow flex flex-col justify-between"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-1.5">
                    <h3 className="text-white text-xl font-semibold leading-none tracking-tight">
                    IchatMate
                    </h3>
                    <p className="text-muted-foreground text-gray-400 text-xs">
                    Your Personal Counseling Assistant Chatbot Using Islamic
                    Intervention and Cognitive Behavioral Theory (CBT) #FinalYearProject
                    </p>
                  </div>
                  <div className="flex text-gray-400">
                    <a
                      href="https://github.com/amirabdulaziz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 dark:text-neutral-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-sm text-card-foreground text-white font-light text-md flex-grow">
                IChatMate is a personal counseling assistant chatbot that
                    integrates Islamic principles and Cognitive Behavioral
                    Theory (CBT) to provide personalized sessions for students.
                    It aims to offer guidance and support through a combination
                    of faith-based and evidence-based approaches to mental
                    health and well-being.
                </p>
              </div>
              <div
                className="px-6 flex gap-2 flex-wrap py-4 items-center mt-auto"
              >
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold  border-transparent bg-primary-color  shadow ">
                    Ionic
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibold  border-transparent bg-primary-color  shadow ">
                    React
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    TailwindCss
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    Python
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    Flask Python
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    Illama Index
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    OpenAi
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    Knowledge base
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    Firebase
                  </div>
                  <div className="text-white inline-flex rounded-sm items-center rouned-md px-2.5 py-0.5 text-xs font-semibol  border-transparent bg-primary-color  shadow ">
                    Render
                  </div>
              </div>
            </div>
          </div>
          {/* upsifh project */}
          <div
            className=" rounded-xl border bg-gray-500/20 border-white/[0.1] bg-card text-card-foreground shadow w-full lg:w-1/2 flex flex-col"
          >
            <div className="flex flex-col p-0 relative overflow-clip space-y-0 rounded-t-xl flex-grow">
              <div className="top-0 right-0 bottom-0 left-0">
                <img
                  src={Upsifh}
                  alt="cnardus"
                  loading="lazy"
                  className="w-full object-cover transition group-hover:scale-110 border-t border-white/[0.08] rounded-t-xl ease-in-out duration-1000 scale-100 delay-300"
                  style={{
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                />
              </div>

              <div
                className="p-4 pt-6 space-y-4 flex-grow flex flex-col justify-between"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-1.5">
                    <h3 className="text-white text-xl font-semibold leading-none tracking-tight">
                      UPSIFH
                    </h3>
                    <p className="text-muted-foreground text-gray-400 text-xs">
                      Fitness Helper App
                    </p>
                  </div>
                  <div className="flex text-gray-400">
                    <a
                      href="https://github.com/amirabdulaziz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 dark:text-neutral-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-sm text-card-foreground text-white font-light text-md flex-grow">
                  UPSIFH: Fitness Helper provides detailed guides for barbell
                  and dumbbell exercises, targeting five key muscle groups. It
                  offers tailored workouts with step-by-step instructions and
                  images for each exercise, helping users efficiently achieve
                  their fitness goals.
                </p>
              </div>
              <div
                className="px-6 flex gap-2 flex-wrap py-4 items-center mt-auto"
              >
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  Ionic
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  React
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  TailwindCss
                </div>
                <div className="text-white inline-flex rounded-sm items-center  px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary-color shadow">
                  Firebase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
