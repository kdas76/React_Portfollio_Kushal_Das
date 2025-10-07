// import React, { useState, useEffect } from 'react';

// function Projects() {
//   const projects = [
//     {
//       title: "Chetona – Multilingual Transformer Chatbot",
//       description: "Custom GPT-style conversational model with memory, persona control, and multilingual Bn–Hi–En communication. A soulful chatbot designed to simulate emotional intelligence."
//     },
//     {
//       title: "A Unified Framework for Geometry-Enhanced & Drug-Likeness-Constrained Molecular Graph Generation",
//       description: "Hybrid generative GNN combining geometry, 3-body interactions, and property-guided diffusion to generate valid, novel, and drug-like molecules efficiently."
//     },
//     {
//       title: "Smartwatch-Based Women Safety System",
//       description: "Gesture-triggered and voice-activated emergency system integrating AI-based distress detection, GPS alerts, and real-time data streaming for safety intervention."
//     }
//   ];

//   return (
//     <section id="projects" className="mt-16 scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, i) => (
//           <div key={i} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 transition-all hover:border-[#0072ff] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,115,255,0.25)]">
//             <div className="text-white font-semibold text-lg mb-2">{project.title}</div>
//             <p className="text-[#c9d3ec] leading-relaxed">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;

// import React from 'react'

// export default function Projects() {
//   const projects = [
//     {
//       title: "Chetona – Multilingual Transformer Chatbot",
//       description: "Custom GPT-style conversational model with memory, persona control, and multilingual Bn–Hi–En communication. A soulful chatbot designed to simulate emotional intelligence."
//     },
//     {
//       title: "A Unified Framework for Geometry-Enhanced & Drug-Likeness-Constrained Molecular Graph Generation",
//       description: "Hybrid generative GNN combining geometry, 3-body interactions, and property-guided diffusion to generate valid, novel, and drug-like molecules efficiently."
//     },
//     {
//       title: "Smartwatch-Based Women Safety System",
//       description: "Gesture-triggered and voice-activated emergency system integrating AI-based distress detection, GPS alerts, and real-time data streaming for safety intervention."
//     }
//   ]

//   return (
//     <section id="projects" className="mt-4">
//       <h2 className="section-title">Projects</h2>
//       <div className="row projects-row">
//         {projects.map((p, idx) => (
//           <div key={idx} className="col-12 col-md-6 col-lg-4 mb-3">
//             <div className="card-custom h-100">
//               <div className="card-title mb-3">{p.title}</div>
//               <p className="text-white mb-m">{p.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
import React from "react";
import { FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      icon: <FaRobot className="text-info fs-3 me-3" />,
      title: "Chetona – Multilingual Transformer Chatbot",
      description:
        "Custom GPT-style conversational model with memory, persona control, and multilingual Bn–Hi–En communication. A soulful chatbot designed to simulate emotional intelligence.",
      tech: "PyTorch · NLP · Transformers",
    },
    {
      icon: <FaNetworkWired className="text-info fs-3 me-3" />,
      title:
        "Geometry-Enhanced & Drug-Likeness-Constrained Molecular Graph Generation",
      description:
        "Hybrid generative GNN combining geometry, 3-body interactions, and property-guided diffusion to generate valid, novel, and drug-like molecules efficiently.",
      tech: "PyTorch Geometric · GNN ",
    },
    {
      icon: <FaShieldAlt className="text-info fs-3 me-3" />,
      title: "Smartwatch-Based Women Safety System",
      description:
        "Gesture-triggered and voice-activated emergency system integrating AI-based distress detection, GPS alerts, and real-time data streaming for safety intervention.",
      tech: "Flask · IoT · Deep Learning",
    },
  ];

  return (
    <section id="projects" className="mt-5">
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
        Projects
      </h2>

      {/* Grid */}
      <div className="row g-4">
        {projects.map((p, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column"
              style={{
                background: "rgba(0, 170, 255, 0.08)",
                border: "1px solid rgba(0, 170, 255, 0.25)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(0,115,255,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              <div className="d-flex align-items-center mb-3">
                {p.icon}
                <h5
                  className="mb-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #00c6ff, #0072ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.title}
                </h5>
              </div>
              <p className="text-secondary mb-2" style={{ lineHeight: "1.6" }}>
                {p.description}
              </p>
              <div className="mt-auto">
                <small
                  className="text-white-50 px-3 py-1 rounded-pill"
                  style={{
                    background: "rgba(0,115,255,0.15)",
                    border: "1px solid rgba(0,115,255,0.25)",
                  }}
                >
                  {p.tech}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
