import React from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import IChatMate from "../assets/IchatMateImg.png";
import Upsifh from "../assets/upsifh.png";
import BudakGemok from "../assets/1.svg";

// The first project is shown as the wide featured card.
const projects = [
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
    subtitle: "Fitness Helper #CurrentlyWorkingOnThisProject",
    github: "https://github.com/amirabdulaziz/",
    description:
      "UPSIFH: Fitness Helper provides detailed guides for barbell and dumbbell exercises, targeting five key muscle groups. It offers tailored workouts with step-by-step instructions and images for each exercise, helping users efficiently achieve their fitness goals.",
    tags: ["Ionic", "React", "TailwindCss", "Firebase"],
  },
  {
    img: BudakGemok,
    alt: "4BudakGemokz Burgers",
    title: "4BudakGemokz Burgers",
    subtitle: "Food Ordering System #LatestVueJsProject",
    github: "https://github.com/amirabdulaziz/",
    description:
      "4BudakGemokz Burgers: Food Ordering System offers a wide variety of appetising selections and simplifies the process of ordering burgers. With only a few taps or clicks, users can satisfy their food cravings due to the platform's easy-to-use customisation tools, safe payment options, and pickup tracking.",
    tags: ["VueJs", "TailwindCss", "Firebase"],
  },
];

const ProjectCard = ({ img, alt, title, subtitle, github, description, tags, featured }) => (
  <article
    data-aos="zoom-in-up"
    className={`group flex flex-col overflow-hidden rounded-[28px] bg-[#1d1d1f] ${
      featured ? "lg:col-span-2 lg:flex-row-reverse" : ""
    }`}
  >
    <div
      className={`aspect-[16/10] overflow-hidden ${
        featured ? "lg:aspect-auto lg:min-h-[340px] lg:w-3/5" : ""
      }`}
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>

    <div className={`flex flex-1 flex-col gap-5 p-7 md:p-9 ${featured ? "lg:w-2/5" : ""}`}>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
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

const Work = () => {
  // don't delete this for knowledge purposes(Framer motion)
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);
  const history = useHistory();
  // const [scrollY, setScrollY] = useState(0);
  const scrollToTopandRedirect = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
    setTimeout(() => {
      history.push("/more-project");
    }, 500);
  };

  return (
    <section className="bg-neutral-950 py-24 md:py-32" id="project">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              My projects. <span>The latest things I've built.</span>
            </h2>
            <p className="mt-6 text-base text-[#86868b] md:text-lg">
              Personal projects, from the first idea to the deployed app.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} featured={i === 0} {...project} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={scrollToTopandRedirect}
              className="primary-color text-base hover:underline md:text-lg"
            >
              View more projects &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;