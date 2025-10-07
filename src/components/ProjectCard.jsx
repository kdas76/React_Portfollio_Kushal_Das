import React from "react";

export default function ProjectCard({ title, description }) {
  return (
    <div className="project-card h-100 p-4 rounded-4">
      <h5 className="text-gradient mb-2">{title}</h5>
      <p className="text-secondary small mb-0">{description}</p>
    </div>
  );
}
