import React from "react";

const DownloadButton = () => {
  return (
    <div>
      <a
        href="/resume.pdf"
        download="MOHAMAD AINULAMIR RESUME"
        className="bg-gradient-to-r from-purple-600 to-indigo-400 rounded-md border-none shadow-inset focus:outline-none text-white font-inter font-medium px-8 py-4 hover:opacity-70 sm:text-sm sm:h-14 sm:py-3.5 sm:w-48"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadButton;
