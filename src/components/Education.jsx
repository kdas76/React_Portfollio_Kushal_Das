// import React, { useState, useEffect } from 'react';
// // Education Component
// function Education() {
//   const education = [
//     {
//       institution: "University of Engineering & Management, Kolkata",
//       degree: "B.Tech in Computer Science & Engineering (AIML) · 2022–2026",
//       description: "Focused on Artificial Intelligence, Machine Learning, and Generative Architectures. CGPA: 7.5/10"
//     },
//     {
//       institution: "Khatra High School",
//       degree: "WBCHSE · 93%",
//       description: "Science stream with early research interest in mathematics."
//     }
//   ];

//   return (
//     <section id="education" className="mt-16 scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Education
//       </h2>
//       <div className="border-l-2 border-[#0072ff] pl-5">
//         {education.map((item, i) => (
//           <div key={i} className="mb-5">
//             <h4 className="text-white mb-1 font-semibold">{item.institution}</h4>
//             <span className="text-[#89c9ff] text-sm">{item.degree}</span>
//             <p className="text-[#ccc] mt-1">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Education;

// import React from 'react'

// export default function Education() {
//   const education = [
//     {
//       institution: "University of Engineering & Management, Kolkata",
//       degree: "B.Tech in Computer Science & Engineering (AIML) · 2022–2026",
//       description: "Focused on Artificial Intelligence, Machine Learning, and Generative Architectures. CGPA: 7.5/10"
//     },
//     {
//       institution: "Khatra High School",
//       degree: "WBCHSE · 93%",
//       description: "Science stream with early research interest in mathematics."
//     }
//   ]

//   return (
//     <section id="education" className="mt-4">
//       <h2 className="section-title">Education</h2>
//       <div className="edu ps-3">
//         {education.map((e, i) => (
//           <div key={i} className="mb-3">
//             <h5 className="mb-1">{e.institution}</h5>
//             <div className="text-primary small">{e.degree}</div>
//             <p className="text-white mb-0">{e.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      icon: <FaUniversity className="text-info fs-4 me-3" />,
      institution: "University of Engineering & Management, Kolkata",
      degree: "B.Tech in Computer Science & Engineering (AIML) · 2022–2026",
      description:
        "Focused on Artificial Intelligence, Machine Learning, and Generative Architectures. CGPA: 7.5/10",
    },
    {
      icon: <FaSchool className="text-info fs-4 me-3" />,
      institution: "Khatra High School",
      degree: "WBCHSE · 93%",
      description:
        "Science stream with early research interest in mathematics.",
    },
  ];

  return (
    <section id="education" className="mt-5">
      <h2
        className="fw-semibold mb-4"
        style={{
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "1.8rem",
        }}
      >
        Education
      </h2>

      <div className="timeline position-relative ps-4">
        {education.map((e, i) => (
          <div key={i} className="timeline-item mb-4">
            <div
              className="d-flex align-items-start p-3 rounded-4"
              style={{
                background: "rgba(0,170,255,0.08)",
                border: "1px solid rgba(0,170,255,0.25)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(el) =>
                (el.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,115,255,0.35)")
              }
              onMouseLeave={(el) =>
                (el.currentTarget.style.boxShadow = "none")
              }
            >
              {e.icon}
              <div>
                <h5
                  className="mb-1 fw-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg, #00c6ff, #0072ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {e.institution}
                </h5>
                <small className="text-info d-block mb-1">{e.degree}</small>
                <p className="text-secondary small mb-0">{e.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Vertical timeline line */}
        <div
          className="position-absolute start-0 top-0 h-100"
          style={{
            width: "3px",
            background:
              "linear-gradient(180deg, rgba(0,115,255,0.6), transparent)",
            borderRadius: "2px",
          }}
        ></div>
      </div>
    </section>
  );
}
