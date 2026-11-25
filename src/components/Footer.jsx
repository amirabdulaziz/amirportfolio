import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import RevealBlock from "./RevealBlock";

const links = [
  {
    href: "https://www.instagram.com/amrrxz/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/mohamad-ainulamir-45a16719a/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/amirabdulaziz",
    label: "GitHub",
    Icon: FaGithub,
  },
];

const Footer = () => {
  const year = Math.max(2026, new Date().getFullYear());

  return (
    <footer
      id="contact"
      className="relative bg-black text-white border-t border-white/[0.06] py-14 md:py-16"
    >
      <RevealBlock className="container mx-auto max-w-6xl px-6 text-center">
        <div className="flex items-center justify-center gap-5">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
            >
              <Icon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>

        <p className="mt-7 text-xs sm:text-sm text-neutral-500">
          @amirabdulaziz · {year}
        </p>
      </RevealBlock>
    </footer>
  );
};

export default Footer;