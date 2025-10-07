// import React, { useState, useEffect } from 'react';

// function Skills() {
//   return (
//     <section id="skills" className="mt-16 scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Skills
//       </h2>
//       <ul className="list-none pl-0">
//         <li className="mb-2 pl-6 relative leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#00aaff]">
//           <strong>Languages:</strong> Python, Java, SQL
//         </li>
//         <li className="mb-2 pl-6 relative leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#00aaff]">
//           <strong>ML/DL & Research:</strong> Transformers, GNNs, Diffusion Models, Representation Learning, Generative Modeling
//         </li>
//         <li className="mb-2 pl-6 relative leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#00aaff]">
//           <strong>Frameworks:</strong> PyTorch, TensorFlow, Scikit-learn, Keras, Flask, Streamlit
//         </li>
//         <li className="mb-2 pl-6 relative leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#00aaff]">
//           <strong>Tools:</strong> Git, Colab, Kaggle, Linux, VS Code
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default Skills;

// import React from 'react'

// export default function Skills() {
//   return (
//     <section id="skills" className="mt-4">
//       <h2 className="section-title">Skills</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <ul className="list-bullet">
//             <li><strong>Languages:</strong> Python, Java, SQL</li>
//             <li><strong>ML/DL & Research:</strong> Transformers, GNNs, Diffusion Models, Representation Learning, Generative Modeling</li>
//           </ul>
//         </div>
//         <div className="col-md-6">
//           <ul className="list-bullet">
//             <li><strong>Frameworks:</strong> PyTorch, TensorFlow, Scikit-learn, Keras, Flask, Streamlit</li>
//             <li><strong>Tools:</strong> Git, Colab, Kaggle, Linux, VS Code</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react";
import { FaCode, FaBrain, FaCogs, FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaCode className="text-info fs-4 me-2" />,
      title: "Languages",
      details: "Python, Java, SQL",
    },
    {
      icon: <FaBrain className="text-info fs-4 me-2" />,
      title: "ML/DL & Research",
      details:
        "Transformers, GNNs, Diffusion Models, Representation Learning, Generative Modeling",
    },
    {
      icon: <FaCogs className="text-info fs-4 me-2" />,
      title: "Frameworks",
      details: "PyTorch, TensorFlow, Scikit-learn, Keras, Flask, Streamlit",
    },
    {
      icon: <FaTools className="text-info fs-4 me-2" />,
      title: "Tools",
      details: "Git, Colab, Kaggle, Linux, VS Code",
    },
  ];

  return (
    <section id="skills" className="mt-5">
      {/* Title */}
      <h2
        className="fw-semibold mb-4"
        style={{
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "1.8rem",
        }}
      >
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="row g-3">
        {skills.map((skill, i) => (
          <div key={i} className="col-12 col-md-6">
            <div
              className="p-3 rounded-4 h-100 d-flex align-items-start"
              style={{
                background: "rgba(0, 170, 255, 0.08)",
                border: "1px solid rgba(0, 170, 255, 0.25)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,115,255,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              {skill.icon}
              <div>
                <h6 className="text-white medium mb-1">{skill.title}</h6>
                <p className="text-secondary small mb-0">{skill.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
