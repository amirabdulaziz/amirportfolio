import React from "react";

const DownloadButton = () => {
  return (
    <div>
      <a
        href="/resume.pdf"
        download="MOHAMAD AINULAMIR RESUME"
        className="inline-block bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadButton;