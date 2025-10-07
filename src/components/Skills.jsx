import React from "react";
import { FaCode, FaBrain, FaCogs, FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaCode className="text-info fs-4 me-2 flex-shrink-0" />,
      title: "Languages",
      details: "Python, Java, SQL",
    },
    {
      icon: <FaBrain className="text-info fs-4 me-2 flex-shrink-0" />,
      title: "ML/DL & Research",
      details:
        "Transformers, GNNs, Diffusion Models, Representation Learning, Generative Modeling",
    },
    {
      icon: <FaCogs className="text-info fs-4 me-2 flex-shrink-0" />,
      title: "Frameworks",
      details: "PyTorch, TensorFlow, Scikit-learn, Keras, Flask, Streamlit",
    },
    {
      icon: <FaTools className="text-info fs-4 me-2 flex-shrink-0" />,
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
