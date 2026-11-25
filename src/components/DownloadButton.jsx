// import React from "react";

// const DownloadButton = () => {
//   return (
//     <div>
//       <a
//         href="/resume.pdf"
//         download="MOHAMAD AINULAMIR RESUME"
//         className="inline-block bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
//       >
//         Download CV
//       </a>
//     </div>
//   );
// };

// export default DownloadButton;

import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadButton = ({
  href = "/resume.pdf",
  fileName = "Mohamad_Ainulamir_Resume.pdf",
  label = "Download Resume",
  variant = "primary", // "primary" | "subtle"
  className = "",
}) => {
  const styles =
    variant === "subtle"
      ? "bg-white/[0.05] text-white border border-white/15 hover:bg-white/[0.1] hover:border-white/25"
      : "bg-[#2997ff] text-white border border-[#2997ff]/40 shadow-[0_8px_24px_rgba(41,151,255,0.2)] hover:bg-[#147ce5] hover:border-[#66b5ff]/50";

  return (
    <a
      href={href}
      download={fileName}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${styles} ${className}`}
    >
      <FiDownload
        aria-hidden="true"
        className="h-4 w-4 text-current transition-transform duration-300 group-hover:translate-y-0.5"
      />
      <span>{label}</span>
    </a>
  );
};

export default DownloadButton;