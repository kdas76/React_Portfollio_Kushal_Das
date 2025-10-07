// import React, { useState, useEffect } from 'react';
// // Resume Component
// function Resume() {
//   return (
//     <section id="resume" className="mt-16 text-center scroll-mt-24">
//       <h2 className="text-[#6ba4ff] font-semibold text-2xl mb-5 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#00aaff] after:to-[#0072ff] after:rounded">
//         Resume
//       </h2>
//       <a 
//         href="assets/Kushal_Resume.pdf" 
//         download
//         className="inline-block mt-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-8 py-3 rounded-lg font-semibold text-lg"
//       >
//         Download My Resume
//       </a>
//     </section>
//   );
// }

// export default Resume;

import React from 'react'
import resumePDF from '../assets/Kushal_Resume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="mt-4 text-center">
      <h2 className="section-title d-inline-block">Resume</h2>
      <div className="mt-3">
        <a href={resumePDF} download className="resume-btn">Download My Resume</a>
      </div>
    </section>
  )
}
