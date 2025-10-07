// import React from "react";
// import { FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

// export default function Projects() {
//   const projects = [
//     {
//       icon: <FaRobot className="text-info fs-3 me-3 flex-shrink-0" />,
//       title: "Chetona – Multilingual Transformer Chatbot",
//       description:
//         "Custom GPT-style conversational model with memory, persona control, and multilingual Bn–Hi–En communication. A soulful chatbot designed to simulate emotional intelligence.",
//       tech: "PyTorch · NLP · Transformers",
//     },
//     {
//       icon: <FaNetworkWired className="text-info fs-3 me-3 flex-shrink-0" />,
//       title:
//         "Geometry-Enhanced & Drug-Likeness-Constrained Molecular Graph Generation",
//       description:
//         "Hybrid generative GNN combining geometry, 3-body interactions, and property-guided diffusion to generate valid, novel, and drug-like molecules efficiently.",
//       tech: "PyTorch Geometric · GNN ",
//     },
//     {
//       icon: <FaShieldAlt className="text-info fs-3 me-3 flex-shrink-0" />,
//       title: "Smartwatch-Based Women Safety System",
//       description:
//         "Gesture-triggered and voice-activated emergency system integrating AI-based distress detection, GPS alerts, and real-time data streaming for safety intervention.",
//       tech: "Flask · IoT · Deep Learning",
//     },
//   ];

//   return (
//     <section id="projects" className="mt-5">
//       {/* Title */}
//       <h2
//         className="fw-semibold mb-4"
//         style={{
//           background: "linear-gradient(90deg, #00c6ff, #0072ff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           fontSize: "1.8rem",
//         }}
//       >
//         Projects
//       </h2>

//       {/* Grid */}
//       <div className="row g-4">
//         {projects.map((p, idx) => (
//           <div key={idx} className="col-12 col-md-6 col-lg-4">
//             <div
//               className="p-4 rounded-4 h-100 d-flex flex-column"
//               style={{
//                 background: "rgba(0, 170, 255, 0.08)",
//                 border: "1px solid rgba(0, 170, 255, 0.25)",
//                 backdropFilter: "blur(10px)",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) =>
//               (e.currentTarget.style.boxShadow =
//                 "0 0 25px rgba(0,115,255,0.35)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.boxShadow = "none")
//               }
//             >
//               <div className="d-flex align-items-center mb-3">
//                 {p.icon}
//                 <h5
//                   className="mb-0"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, #00c6ff, #0072ff)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {p.title}
//                 </h5>
//               </div>
//               <p className="text-secondary mb-2" style={{ lineHeight: "1.6" }}>
//                 {p.description}
//               </p>
//               <div className="mt-auto">
//   <div className="d-flex flex-wrap gap-2">
//     {p.tech.split(',').map((tech, i) => (
//       <small
//         key={i}
//         className="text-white-50 px-2 py-1 rounded-pill text-nowrap"
//         style={{
//           background: "rgba(0,115,255,0.15)",
//           border: "1px solid rgba(0,115,255,0.25)",
//           fontSize: "0.7rem"
//         }}
//       >
//         {tech.trim()}
//       </small>
//     ))}
//   </div>
// </div>
//             </div>
//           </div>
//     </section>
//   );
// }

import React from "react";
import { FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      icon: <FaRobot className="text-info fs-3 me-3 flex-shrink-0" />,
      title: "Chetona – Multilingual Transformer Chatbot",
      description:
        "Custom GPT-style conversational model with memory, persona control, and multilingual Bn–Hi–En communication. A soulful chatbot designed to simulate emotional intelligence.",
      tech: "PyTorch, NLP, Transformers",
    },
    {
      icon: <FaNetworkWired className="text-info fs-3 me-3 flex-shrink-0" />,
      title:
        "Geometry-Enhanced & Drug-Likeness-Constrained Molecular Graph Generation",
      description:
        "Hybrid generative GNN combining geometry, 3-body interactions, and property-guided diffusion to generate valid, novel, and drug-like molecules efficiently.",
      tech: "PyTorch Geometric, GNN",
    },
    {
      icon: <FaShieldAlt className="text-info fs-3 me-3 flex-shrink-0" />,
      title: "Smartwatch-Based Women Safety System",
      description:
        "Gesture-triggered and voice-activated emergency system integrating AI-based distress detection, GPS alerts, and real-time data streaming for safety intervention.",
      tech: "Flask, IoT, Deep Learning",
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
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="d-flex align-items-start mb-3">
                {p.icon}
                <h5
                  className="mb-0"
                  style={{
                    background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.title}
                </h5>
              </div>
              <p className="text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                {p.description}
              </p>
              <div className="mt-auto">
                <div className="d-flex flex-wrap gap-2">
                  {p.tech.split(",").map((tech, i) => (
                    <small
                      key={i}
                      className="text-white-50 px-2 py-1 rounded-pill text-nowrap"
                      style={{
                        background: "rgba(0,115,255,0.15)",
                        border: "1px solid rgba(0,115,255,0.25)",
                        fontSize: "0.7rem",
                      }}
                    >
                      {tech.trim()}
                    </small>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}