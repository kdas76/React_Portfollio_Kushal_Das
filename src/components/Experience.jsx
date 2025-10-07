// import React, { useState, useEffect } from 'react';
// // Experience Component
// function Experience() {
//   return (
//     <section id="experience" className="mt-16 scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Experience
//       </h2>
//       <div className="bg-[rgba(255,255,255,0.04)] rounded-2xl p-6 border-l-4 border-[#0072ff]">
//         <h4 className="text-white mb-1 font-semibold">NIT Durgapur – Research Intern</h4>
//         <span className="text-[#89c9ff] text-sm">May – Jul 2025</span>
//         <p className="text-[#ccc] mt-2 leading-relaxed">
//           Worked on generative molecular graph modeling using geometry-aware GNNs. Achieved leading Validity–Uniqueness–Novelty metrics, contributing to ongoing publication work.
//         </p>
//       </div>
//     </section>
//   );
// }
// export default Experience;

import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="mt-4">
      <h2 className="section-title">Experience</h2>

      <div className="exp card-custom">
        <h5 className="mb-1">NIT Durgapur – Research Intern</h5>
        <div className="text-primary small">May – Jul 2025</div>
        <p className="text-white mt-2 mb-0">
          Worked on generative molecular graph modeling using geometry-aware GNNs. Achieved leading Validity–Uniqueness–Novelty metrics, contributing to ongoing publication work.
        </p>
      </div>
    </section>
  )
}
