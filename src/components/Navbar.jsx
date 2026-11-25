import React, { useState, useEffect, useContext, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useHistory, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { SectionContext } from "../context/SectionContext";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const navbarItems = [
  { name: "Home", value: "home" },
  { name: "About", value: "about" },
  { name: "Experience", value: "experience" },
  { name: "Project", value: "project" },
  { name: "Stack", value: "stack" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  const { value, changeValue } = useContext(SectionContext);
  const history = useHistory();
  const { pathname } = useLocation();
  const pendingTargetRef = useRef(null);

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

  const performScroll = (target) => {
    if (!target || target === "home") {
      scroll.scrollToTop({ duration: 500, smooth: "easeInOutCubic" });
      return;
    }

    scroller.scrollTo(target, {
      duration: 550,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -76,
    });
  };

  // Scroll when arriving back on "/" from another route
  useEffect(() => {
    if (pathname === "/" && pendingTargetRef.current) {
      const target = pendingTargetRef.current;
      pendingTargetRef.current = null;

      const timer = setTimeout(() => {
        performScroll(target);
      }, 60);

      return () => clearTimeout(timer);
    }

    if (pathname === "/resume" || pathname === "/more-project") {
      scroll.scrollToTop({ duration: 1 });
    }
  }, [pathname]);

  // Also respond when SectionContext value changes while already on "/"
  useEffect(() => {
    if (pathname === "/" && value) {
      performScroll(value);
    }
  }, [value, pathname]);

  const navigateToSection = (sectionName, fromMobile = false) => {
    if (fromMobile) {
      closeMobileMenu();
    }
    changeValue(sectionName);

    if (pathname !== "/") {
      pendingTargetRef.current = sectionName;
      history.push("/");
    } else {
      performScroll(sectionName);
    }
  };

  const handleBrandClick = (fromMobile = false) => {
    if (fromMobile) {
      closeMobileMenu();
    }
    changeValue("home");

    if (pathname !== "/") {
      pendingTargetRef.current = "home";
      history.push("/");
    } else {
      scroll.scrollToTop({ duration: 500, smooth: "easeInOutCubic" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl flex justify-between items-center px-6 py-5 md:py-6">
        <button
          type="button"
          onClick={() => handleBrandClick(false)}
          className="text-lg md:text-xl font-semibold tracking-tight text-white hover:text-[#66b5ff] transition-colors cursor-pointer text-left"
        >
          amirabdulaziz
        </button>

        {/* Desktop Navbar */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="list-none flex items-center gap-7">
            {navbarItems.map((item) =>
              item.name === "Project" ? (
                <li key={item.value} className="text-sm relative group">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => navigateToSection(item.value, false)}
                      className={`cursor-pointer transition-colors ${
                        isNavItemActive(item.value)
                          ? "text-[#2997ff] font-medium"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </button>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-4 text-neutral-400 group-hover:text-white transition-transform duration-200 group-hover:rotate-180"
                    />
                  </div>

                  <div className="absolute right-0 top-full pt-2.5 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                    <div className="bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-1.5 overflow-hidden">
                      <Link
                        to="/more-project"
                        onClick={() => {
                          changeValue("");
                          scroll.scrollToTop({ duration: 1 });
                        }}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === "/more-project"
                            ? "text-[#2997ff] bg-white/[0.06] font-medium"
                            : "text-neutral-300 hover:bg-white/[0.06] hover:text-white"
                        }`}
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
                    onClick={() => navigateToSection(item.value, false)}
                    className={`cursor-pointer transition-colors ${
                      isNavItemActive(item.value)
                        ? "text-[#2997ff] font-medium"
                        : "text-neutral-300 hover:text-white"
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
                onClick={() => {
                  changeValue("");
                  scroll.scrollToTop({ duration: 1 });
                }}
                className={`px-4 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  pathname === "/resume"
                    ? "bg-[#2997ff]/15 text-[#66b5ff] border-[#2997ff]/40"
                    : "text-neutral-200 border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 hover:text-white"
                }`}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={nav}
          onClick={handleNavToggle}
          className="md:hidden p-2 -mr-2 rounded-full text-neutral-200 hover:bg-white/[0.08] active:scale-95 transition"
        >
          <AiOutlineMenu size={22} />
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        onClick={closeMobileMenu}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-xs transition-opacity duration-300 ${
          nav ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Mobile Slide-Over Drawer */}
      <aside
        aria-label="Mobile navigation"
        className={`md:hidden fixed top-0 right-0 z-50 h-dvh w-[84%] max-w-sm bg-[#09090b] border-l border-white/10 text-neutral-200 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/[0.08]">
            <button
              type="button"
              onClick={() => handleBrandClick(true)}
              className="text-lg font-semibold tracking-tight text-white cursor-pointer"
            >
              amirabdulaziz
            </button>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="p-2 -mr-2 rounded-full text-neutral-300 hover:bg-white/[0.08] hover:text-white transition"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <ul className="list-none px-4 py-4 space-y-1">
            {navbarItems.map((item) => {
              const active = isNavItemActive(item.value);

              if (item.name === "Project") {
                return (
                  <li key={item.value} className="rounded-2xl overflow-hidden">
                    <div
                      className={`flex items-center justify-between rounded-2xl px-3.5 py-3 transition-colors ${
                        active ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => navigateToSection(item.value, true)}
                        className={`flex-1 text-left text-base font-medium cursor-pointer ${
                          active ? "text-[#2997ff]" : "text-neutral-200"
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
                        className="p-1.5 -mr-1 rounded-xl text-neutral-400 hover:text-white hover:bg-white/[0.08] transition"
                      >
                        <ChevronRightIcon
                          className={`size-5 transition-transform duration-200 ${
                            projectDropdownOpen
                              ? "rotate-90 text-[#2997ff]"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

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
                          onClick={() => {
                            closeMobileMenu();
                            changeValue("");
                            scroll.scrollToTop({ duration: 1 });
                          }}
                          className={`ml-4 mr-2 flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm border-l border-white/15 transition-colors ${
                            pathname === "/more-project"
                              ? "bg-white/[0.07] text-[#2997ff] font-medium"
                              : "text-neutral-300 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          <span>More Project</span>
                          <ChevronRightIcon className="size-4 text-neutral-500" />
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
                    onClick={() => navigateToSection(item.value, true)}
                    className={`w-full flex items-center justify-between rounded-2xl px-3.5 py-3 text-left text-base font-medium transition-colors cursor-pointer ${
                      active
                        ? "bg-white/[0.07] text-[#2997ff]"
                        : "text-neutral-200 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRightIcon
                      className={`size-4 transition-transform ${
                        active
                          ? "text-[#2997ff] translate-x-0.5"
                          : "text-neutral-500"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-white/[0.08]">
          <Link
            to="/resume"
            onClick={() => {
              closeMobileMenu();
              changeValue("");
              scroll.scrollToTop({ duration: 1 });
            }}
            className={`w-full flex items-center justify-center rounded-full py-3 px-4 text-sm font-medium transition-all ${
              pathname === "/resume"
                ? "bg-[#2997ff] text-white"
                : "bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10"
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