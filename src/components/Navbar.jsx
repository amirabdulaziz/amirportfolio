import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useHistory, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { SectionContext } from "../context/SectionContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
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
    setNav(false); // Close the mobile menu if it's open
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
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNavItemActive = (itemValue) => {
    return pathname === "/" && itemValue === value;
  };

  return (
<div
  className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center text-white h-24 px-4 text-l transition-all duration-300 ${
    scrollY > 0 ? "bg-[#20242d]" : "bg-transparent"
  }`}
>
  <div className="container max-w-[115vh] flex justify-between items-center mx-auto px-2 py-8">
        <h1
          className="w-full text-xl font-bold primary-color"
          onClick={scrollToTop}
        >
          amirabdulaziz
        </h1>

        <ul className="list-none hidden md:flex">
          {navbarItem.map((item) => (
            <li key={item.value} className="p-5 text-sm">
              <span
                className={`cursor-pointer ${
                  isNavItemActive(item.value) ? "text-white" : "primary-color"
                }`}
                onClick={() => handleScroll(item.value)}
              >
                {item.name}
              </span>
            </li>
          ))}
          <li className="p-5 text-sm">
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
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "bg-[#202121] fixed text-gray-300 h-full left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-100"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-xl font-bold primary-color px-2 py-8">
            amirabdulaziz
          </h1>
          <ul className="list-none py-2 text-xl">
            {navbarItem.map((item) => (
              <li key={item.value} className="px-4 py-2 text-sm">
                <span
                  className={`cursor-pointer ${
                    isNavItemActive(item.value) ? "text-white" : "primary-color"
                  }`}
                  onClick={() => handleScrollMobile(item.value)}
                >
                  {item.name}
                </span>
              </li>
            ))}
            <li className="px-4 py-2 text-sm">
              <Link
                to="/resume"
                onClick={handleNav}
                className={`cursor-pointer ${
                  pathname === "/resume" ? "text-white" : "primary-color"
                }`}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
