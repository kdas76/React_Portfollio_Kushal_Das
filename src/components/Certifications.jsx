// import React, { useState, useEffect } from 'react';
// // Certifications Component
// function Certifications() {
//   const certs = [
//     "NPTEL – Machine Learning by IIT Madras",
//     "NPTEL – Deep Learning by IIT Kharagpur",
//     "Coursera – Deep Learning Specialization (Andrew Ng)",
//     "Google – Machine Learning Crash Course",
//     "IBM – Python for Data Science"
//   ];

//   return (
//     <section id="certifications" className="mt-16 scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Certifications
//       </h2>
//       <div className="flex flex-wrap gap-3">
//         {certs.map((cert, i) => (
//           <div key={i} className="bg-[rgba(0,170,255,0.1)] border border-[rgba(0,170,255,0.25)] rounded-lg px-4 py-2 text-sm text-[#bcd4ff] hover:bg-[rgba(0,170,255,0.25)] hover:text-white transition-all">
//             {cert}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Certifications;

// import React from 'react'

// export default function Certifications() {
//   const certs = [
//     "NPTEL – Machine Learning by IIT Madras",
//     "NPTEL – Deep Learning by IIT Kharagpur",
//     "Coursera – Deep Learning Specialization (Andrew Ng)",
//     "Google – Machine Learning Crash Course",
//     "IBM – Python for Data Science"
//   ]

//   return (
//     <section id="certifications" className="mt-4">
//       <h2 className="section-title">Certifications</h2>
//       <div className="d-flex flex-wrap gap-2">
//         {certs.map((c, i) => (
//           <div key={i} className="cert px-3 py-2 small">{c}</div>
//         ))}
//       </div>
//     </section>
//   )
// }
import React from "react";
import { FaCertificate } from "react-icons/fa"; // for icons (run: npm install react-icons)

export default function Certifications() {
  const certs = [
    {
      name: "NPTEL – Machine Learning by IIT Madras",
      provider: "IIT Madras",
      year: "2024"
    },
    {
      name: "NPTEL – Deep Learning by IIT Kharagpur",
      provider: "IIT Kharagpur",
      year: "2024"
    },
    {
      name: "Coursera – Deep Learning Specialization (Andrew Ng)",
      provider: "Coursera",
      year: "2023"
    },
    {
      name: "Google – Machine Learning Crash Course",
      provider: "Google",
      year: "2023"
    },
    {
      name: "IBM – Python for Data Science",
      provider: "IBM",
      year: "2022"
    }
  ];

  return (
    <section id="certifications" className="mt-5">
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
        Certifications
      </h2>

      {/* Cards */}
      <div className="row g-3">
        {certs.map((c, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div
              className="p-3 rounded-4 h-100"
              style={{
                background: "rgba(0, 170, 255, 0.08)",
                border: "1px solid rgba(0, 170, 255, 0.25)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                boxShadow: "0 0 10px rgba(0,115,255,0.1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,115,255,0.35)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(0,115,255,0.1)")
              }
            >
              <div className="d-flex align-items-start gap-2">
                <FaCertificate className="text-info fs-5 mt-1" />
                <div>
                  <h6 className="text-white mb-1">{c.name}</h6>
                  <small className="text-primary">
                    {c.provider} · {c.year}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
