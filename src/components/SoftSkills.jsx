// import React, { useState, useEffect } from 'react';

// // Soft Skills Component
// function SoftSkills() {
//   return (
//     <section id="softskills" className="mt-16 scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Soft Skills
//       </h2>
//       <p className="bg-[rgba(255,255,255,0.04)] border border-[rgba(0,170,255,0.25)] rounded-xl p-5 text-[#cfd8e8] text-center leading-relaxed">
//         Analytical · Research-driven · Adaptive · Conceptual Innovator · Blending logic with creativity and empathy.
//       </p>
//     </section>
//   );
// }

// export default SoftSkills;

import React from 'react'

export default function SoftSkills() {
  return (
    <section id="softskills" className="mt-4">
      <h2 className="section-title">Soft Skills</h2>
      <div className="card-custom text-center soft-skills-text">
        Analytical · Research-driven · Adaptive · Conceptual Innovator · Blending logic with creativity and empathy.
      </div>
    </section>
  )
}
