import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const links = [
  { href: "https://www.instagram.com/amrrxz/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.linkedin.com/in/mohamad-ainulamir-45a16719a/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://github.com/amirabdulaziz", label: "GitHub", Icon: FaGithub },
];

const Footer = () => {
  return (
    <section>
      <div className="pt-10 bg-black border-t border-white/10" id="contact">
        <footer className="text-white text-center py-8">
          <div className="flex justify-center gap-9 pt-9 mb-9">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <h1 className="text-sm text-neutral-500">@amirabdulaziz | 2026</h1>
        </footer>
      </div>
    </section>
  );
};

export default Footer;