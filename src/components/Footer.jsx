// import React, { useState, useEffect } from 'react';

// // Footer Component
// function Footer() {
//   return (
//     <footer className="mt-16 text-center text-[#aab4c8] py-6 border-t border-[rgba(0,170,255,0.2)]">
//       © 2025 <span className="text-[#6ba4ff] font-medium">Kushal Das</span> —{" "}
//       <em className="text-[#cfd8e8]">"Turning Thought into Intelligence"</em>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react'

// export default function Footer() {
//   return (
//     <footer id="contact" className="mt-4">
//       <div className="text-center text-muted">
//         © {new Date().getFullYear()} <span className="text-primary">Kushal Das</span> — <em>"Turning Thought into Intelligence"</em>
//         <div className="mt-2">
//           <a href="mailto:your-email@example.com" className="me-3">Email</a>
//           <a href="#" target="_blank" rel="noreferrer">GitHub</a>
//         </div>
//       </div>
//     </footer>
//   )
// }

// import React from "react";
// import { FaEnvelope, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer
//       id="contact"
//       className="text-center py-4 mt-5"
//       style={{
//         background: "rgba(0, 170, 255, 0.05)",
//         borderTop: "1px solid rgba(0,170,255,0.2)",
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       {/* Main Line */}
//       <p className="mb-2 text-white-50 small">
//         © {new Date().getFullYear()}{" "}
//         <span
//           style={{
//             background: "linear-gradient(90deg, #00c6ff, #0072ff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontWeight: 600,
//           }}
//         >
//           Kushal Das
//         </span>{" "}
//         — <em>"Turning Thought into Intelligence"</em>
//       </p>

//       {/* Social / Contact */}
//       <div className="d-flex justify-content-center align-items-center gap-4">
//         <a
//           href="mailto:kdas76792@gmail.com"
//           className="text-decoration-none d-flex align-items-center gap-2 text-white-50 hover-glow"
//           style={{ transition: "all 0.3s ease" }}
//         >
//           <FaEnvelope className="text-info fs-5" />
//           <span>Email</span>
//         </a>

//         <a
//           href="https://github.com/kdas76"
//           target="_blank"
//           rel="noreferrer"
//           className="text-decoration-none d-flex align-items-center gap-2 text-white-50 hover-glow"
//           style={{ transition: "all 0.3s ease" }}
//         >
//           <FaGithub className="text-info fs-5" />
//           <span>GitHub</span>
//         </a>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-center py-4 mt-5"
      style={{
        background: "rgba(0, 170, 255, 0.05)",
        borderTop: "1px solid rgba(0,170,255,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <p className="mb-2 text-white-50 small">
        © {new Date().getFullYear()}{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 600,
          }}
        >
          Kushal Das
        </span>{" "}
        — <em>"Turning Thought into Intelligence"</em>
      </p>

      <div className="d-flex justify-content-center align-items-center gap-4">
        {/* Gmail link version */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=kdas76792@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none d-flex align-items-center gap-2 text-white-50 hover-glow"
        >
          <FaEnvelope className="text-info fs-5" />
          <span>Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kdas76"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none d-flex align-items-center gap-2 text-white-50 hover-glow"
        >
          <FaGithub className="text-info fs-5" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
