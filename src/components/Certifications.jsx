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
    <section id="certifications" className="mt-5 flex-shrink-0">
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
                <FaCertificate className="text-info fs-6 mt-1 flex-shrink-0" />
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
