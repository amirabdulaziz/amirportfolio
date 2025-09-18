import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useHistory, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { SectionContext } from "../context/SectionContext";

// Headless UI
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (nav) {
      setProjectDropdownOpen(false);
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
    setNav(false);
  };

  useEffect(() => {
    if (pathname === "/") {
      if (value === "home") scroll.scrollToTop({ duration: 100 });
      else scroller.scrollTo(value);
    }

    if (pathname === "/resume") {
      scroll.scrollToTop({ duration: 1 });
      changeValue("");
    }

    if (pathname === "/more-project") {
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
    handleNav();
    if (pathname === "/resume" || pathname === "/more-project") {
      history.push("/");
    }
    changeValue(sectionName);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavItemActive = (itemValue) =>
    pathname === "/" && itemValue === value;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center text-white h-24 px-4 text-l transition-all duration-300 ${
        scrollY > 0 ? "bg-[#20242d]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-2 py-8">
        <h1
          className=" text-xl font-bold primary-color cursor-pointer"
          onClick={scrollToTop}
        >
          amirabdulaziz
        </h1>

        {/* Desktop Navbar */}

        <ul className="list-none hidden md:flex items-center gap-4">
          {navbarItem.map((item) =>
            item.name === "Project" ? (
              <li
                key={item.value}
                className="text-sm relative flex items-center gap-1"
              >
                <span
                  className={`cursor-pointer ${
                    isNavItemActive(item.value) ? "text-white" : "primary-color"
                  }`}
                  onClick={() => handleScroll(item.value)}
                >
                  {item.name}
                </span>

                <div className="relative group">
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-4 text-gray-400 cursor-pointer"
                  />

                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="py-1">
                      <Link
                        to="/more-project"
                        onClick={scrollToTop}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-150"
                      >
                        More Project
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.value} className="text-sm">
                <span
                  className={`cursor-pointer ${
                    isNavItemActive(item.value) ? "text-white" : "primary-color"
                  }`}
                  onClick={() => handleScroll(item.value)}
                >
                  {item.name}
                </span>
              </li>
            )
          )}

          <li className="text-sm">
            <Link
              to="/resume"
              className={`cursor-pointer ${
                pathname === "/resume" ? "text-white" : "primary-color"
              }`}
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? null : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "bg-[#202121] fixed text-gray-300 h-full left-0 top-0 w-full border-r border-r-gray-900 ease-in-out duration-100 z-50"
              : "fixed left-[-100%] z-50"
          }
        >
          <div className="flex justify-between items-center px-4 py-8">
            <h1 className="text-xl font-bold primary-color">amirabdulaziz</h1>
            <AiOutlineClose
              size={20}
              onClick={() => {
                handleNav();
                setProjectDropdownOpen(false);
              }}
              className="cursor-pointer text-white"
            />
          </div>

          <ul className="list-none py-2 text-xl">
            {navbarItem.map((item) =>
              item.name === "Project" ? (
                <li key={item.value} className="px-4 py-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span
                      className={`cursor-pointer ${
                        isNavItemActive(item.value)
                          ? "text-white"
                          : "primary-color"
                      }`}
                      onClick={() => handleScrollMobile(item.value)}
                    >
                      {item.name}
                    </span>
                    <ChevronRightIcon
                      className={`size-4 text-gray-400 cursor-pointer transition-transform duration-200 ${
                        projectDropdownOpen ? "rotate-90" : ""
                      }`}
                      onClick={() =>
                        setProjectDropdownOpen(!projectDropdownOpen)
                      }
                    />
                  </div>

                  {/* Animated submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      projectDropdownOpen
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="mt-1 ml-4 border-l border-gray-600 pl-3">
                      <li>
                        <Link
                          to="/more-project"
                          onClick={() => {
                            handleNav();
                            setProjectDropdownOpen(false);
                          }}
                          className={`block py-1 text-xs ${
                            pathname === "/more-project"
                              ? "text-white"
                              : "primary-color"
                          }`}
                        >
                          More Project
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.value} className="px-4 py-2 text-sm">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleScrollMobile(item.value)}
                  >
                    <span
                      className={`${
                        isNavItemActive(item.value)
                          ? "text-white"
                          : "primary-color"
                      }`}
                    >
                      {item.name}
                    </span>
                    <ChevronRightIcon className="size-4 text-gray-400" />
                  </div>
                </li>
              )
            )}

            <li className="px-4 py-2 text-sm">
              <Link
                to="/resume"
                onClick={handleNav}
                className="flex justify-between items-center cursor-pointer"
              >
                <span
                  className={`${
                    pathname === "/resume" ? "text-white" : "primary-color"
                  }`}
                >
                  Resume
                </span>
                <ChevronRightIcon className="size-4 text-gray-400" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
