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
          <FaEnvelope className="text-info fs-5 flex-shrink-0" />
          <span>Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kdas76"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none d-flex align-items-center gap-2 text-white-50 hover-glow"
        >
          <FaGithub className="text-info fs-5 flex-shrink-0" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
