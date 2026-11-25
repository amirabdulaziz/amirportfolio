import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useHistory, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { SectionContext } from "../context/SectionContext";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setNav(false);
    setProjectDropdownOpen(false);
  };

  const handleNavToggle = () => {
    if (nav) {
      closeMobileMenu();
    } else {
      setNav(true);
    }
  };

  const { value, changeValue } = useContext(SectionContext);
  const history = useHistory();
  const { pathname } = useLocation();

  const navbarItem = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Experience", value: "experience" },
    { name: "Project", value: "project" },
    { name: "Stack", value: "stack" },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

  useEffect(() => {
    if (pathname === "/") {
      if (value === "home") scroll.scrollToTop({ duration: 100 });
      else if (value) scroller.scrollTo(value, { smooth: true, duration: 500, offset: -80 });
    }

    if (pathname === "/resume" || pathname === "/more-project") {
      scroll.scrollToTop({ duration: 1 });
      changeValue("");
    }
  }, [pathname, value, changeValue]);

  const handleScroll = (sectionName) => {
    if (pathname !== "/") {
      history.push("/");
    }
    changeValue(sectionName);
  };

  const handleScrollMobile = (sectionName) => {
    closeMobileMenu();
    if (pathname !== "/") {
      history.push("/");
    }
    changeValue(sectionName);
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background page scrolling while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  const isNavItemActive = (itemValue) =>
    pathname === "/" && itemValue === value;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrollY > 10
          ? "bg-[#20242d]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-5 md:py-7">
        <button
          type="button"
          onClick={scrollToTop}
          className="text-lg md:text-xl font-bold tracking-tight primary-color cursor-pointer text-left"
        >
          amirabdulaziz
        </button>

        {/* Desktop Navbar */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="list-none flex items-center gap-6">
            {navbarItem.map((item) =>
              item.name === "Project" ? (
                <li key={item.value} className="text-sm relative group">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleScroll(item.value)}
                      className={`cursor-pointer transition-colors ${
                        isNavItemActive(item.value)
                          ? "text-white font-medium"
                          : "primary-color hover:text-white"
                      }`}
                    >
                      {item.name}
                    </button>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-4 text-gray-400 group-hover:text-white transition-transform duration-200 group-hover:rotate-180"
                    />
                  </div>

                  <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                    <div className="bg-[#252a34] border border-white/10 rounded-xl shadow-xl py-1.5 overflow-hidden">
                      <Link
                        to="/more-project"
                        onClick={scrollToTop}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        More Project
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.value} className="text-sm">
                  <button
                    type="button"
                    onClick={() => handleScroll(item.value)}
                    className={`cursor-pointer transition-colors ${
                      isNavItemActive(item.value)
                        ? "text-white font-medium"
                        : "primary-color hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}

            <li className="text-sm">
              <Link
                to="/resume"
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  pathname === "/resume"
                    ? "bg-white/15 text-white border-white/25"
                    : "primary-color border-white/15 hover:border-white/30 hover:text-white"
                }`}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={nav}
          onClick={handleNavToggle}
          className="md:hidden p-2 -mr-2 rounded-lg text-gray-200 hover:bg-white/10 active:scale-95 transition"
        >
          <AiOutlineMenu size={22} />
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        onClick={closeMobileMenu}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          nav ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Mobile Slide-Over Drawer */}
      <aside
        aria-label="Mobile navigation"
        className={`md:hidden fixed top-0 right-0 z-50 h-dvh w-[82%] max-w-sm bg-[#1c2029] border-l border-white/10 text-gray-200 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-5 py-5 border-b border-white/10">
            <span
              onClick={scrollToTop}
              className="text-lg font-bold tracking-tight primary-color cursor-pointer"
            >
              amirabdulaziz
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="p-2 -mr-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="list-none px-3 py-4 space-y-1">
            {navbarItem.map((item) => {
              const active = isNavItemActive(item.value);

              if (item.name === "Project") {
                return (
                  <li key={item.value} className="rounded-xl overflow-hidden">
                    <div
                      className={`flex items-center justify-between rounded-xl px-3 py-3 transition-colors ${
                        active ? "bg-white/10 text-white" : "hover:bg-white/5"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleScrollMobile(item.value)}
                        className={`flex-1 text-left text-base font-medium cursor-pointer ${
                          active ? "text-white" : "primary-color"
                        }`}
                      >
                        {item.name}
                      </button>

                      <button
                        type="button"
                        aria-label="Toggle more projects"
                        aria-expanded={projectDropdownOpen}
                        onClick={() =>
                          setProjectDropdownOpen(!projectDropdownOpen)
                        }
                        className="p-1.5 -mr-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                      >
                        <ChevronRightIcon
                          className={`size-5 transition-transform duration-200 ${
                            projectDropdownOpen ? "rotate-90 text-white" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu */}
                    <div
                      className={`grid transition-all duration-200 ease-out ${
                        projectDropdownOpen
                          ? "grid-rows-[1fr] opacity-100 mt-1"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <Link
                          to="/more-project"
                          onClick={closeMobileMenu}
                          className={`ml-4 mr-2 flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm border-l border-white/15 transition-colors ${
                            pathname === "/more-project"
                              ? "bg-white/10 text-white font-medium"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span>More Project</span>
                          <ChevronRightIcon className="size-4 text-gray-500" />
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.value}>
                  <button
                    type="button"
                    onClick={() => handleScrollMobile(item.value)}
                    className={`w-full flex items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium transition-colors cursor-pointer ${
                      active
                        ? "bg-white/10 text-white"
                        : "primary-color hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRightIcon
                      className={`size-4 transition-transform ${
                        active ? "text-white translate-x-0.5" : "text-gray-500"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-white/10">
          <Link
            to="/resume"
            onClick={closeMobileMenu}
            className={`w-full flex items-center justify-center rounded-xl py-3 px-4 text-sm font-semibold transition-all ${
              pathname === "/resume"
                ? "bg-white text-[#1c2029]"
                : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
            }`}
          >
            View Resume
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;