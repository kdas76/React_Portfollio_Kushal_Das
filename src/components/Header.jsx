// import React, { useState, useEffect } from 'react';

// // Header Component
// function Header() {
//   return (
//     <header className="flex flex-wrap items-center gap-8 mb-12" id="top">
//       <img 
//         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300c6ff'/%3E%3Cstop offset='100%25' style='stop-color:%230072ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='130' height='130' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-size='50' fill='white' text-anchor='middle' dy='.3em' font-weight='600'%3EKD%3C/text%3E%3C/svg%3E"
//         className="w-32 h-32 rounded-full border-4 border-[#00aaff] shadow-[0_0_30px_rgba(0,170,255,0.4)] object-cover" 
//         alt="Kushal Das" 
//       />
//       <div className="flex-1">
//         <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
//           Hello — I'm Kushal Das
//         </h1>
//         <p className="mt-2 text-lg text-[#cfd8e8] leading-relaxed">
//           AI/ML Developer | Deep Learning Enthusiast<br />
//           Building soulful intelligence through Deep Learning, Graph Neural Networks, and Generative AI.
//         </p>
//         <div className="flex flex-wrap gap-3 mt-4">
//           <div className="bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.25)] px-4 py-2 rounded-lg text-[#6ba4ff] hover:bg-[rgba(0,170,255,0.2)] hover:text-white transition-all">
//             📞 +91-6295639631
//           </div>
//           <div className="bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.25)] px-4 py-2 rounded-lg text-[#6ba4ff] hover:bg-[rgba(0,170,255,0.2)] hover:text-white transition-all">
//             ✉️ kdas76792@gmail.com
//           </div>
//           <div className="bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.25)] px-4 py-2 rounded-lg text-[#6ba4ff] hover:bg-[rgba(0,170,255,0.2)] hover:text-white transition-all">
//             📍 West Bengal, India
//           </div>
//           <a href="https://github.com/kdas76" target="_blank" rel="noopener noreferrer" className="bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.25)] px-4 py-2 rounded-lg text-[#6ba4ff] hover:bg-[rgba(0,170,255,0.2)] hover:text-white transition-all">
//             GitHub
//           </a>
//           <a href="https://linkedin.com/in/kushal-das01/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.25)] px-4 py-2 rounded-lg text-[#6ba4ff] hover:bg-[rgba(0,170,255,0.2)] hover:text-white transition-all">
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;

// import React from 'react'
// import profilePic from '../assets/profile pic.png'


// export default function Header(){
// return (
// <header className="container hero" id="about">
// <div className="profile">
// <img src={profilePic} alt="Kushal" style={{width:'100%', display:'block'}} />
// </div>
// <div>
// <h1>Kushal Das</h1>
// <p className="lead">AI Developer & Researcher — Deep Learning Enthusiast</p>
// <p>Hi — I'm Kushal. I build ML systems, experiment with generative models, and love practical research.</p>
// <a href="/src/assets/Kushal_Resume.pdf" className="btn btn-outline-light me-2" download>Download Resume</a>
// <a href="#projects" className="btn btn-primary">See Projects</a>
// </div>
// </header>
// )
// }

import React from 'react'
import profilePic from '../assets/profile pic.png'
import resumePDF from '../assets/Kushal_Resume.pdf'

export default function Header() {
  return (
    <header id="about" className="header row align-items-center">
      <div className="col-md-3 text-center">
        <img src={profilePic} alt="Kushal" className="photo img-fluid" />
      </div>

      <div className="col-md-9 intro">
        <h1>Kushal Das</h1>
        <p className="lead">AI Developer & Researcher — Deep Learning Enthusiast</p>
        <p>Hi — I'm Kushal. I build ML systems, experiment with generative models, and love practical research.</p>

        <div className="contact mt-3">
          <a href={resumePDF} download className="btn btn-outline-light me-2">Download Resume</a>
          <a href="#projects" className="btn btn-primary">See Projects</a>
        </div>
      </div>
    </header>
  )
}
