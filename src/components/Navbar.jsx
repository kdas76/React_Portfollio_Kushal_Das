// import React, { useState, useEffect } from "react";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault();
//     const element = document.querySelector(targetId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setMobileMenuOpen(false);
//     }
//   };

//   const menuItems = ["About", "Projects", "Experience", "Skills", "Contact"];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
//         scrolled ? "bg-[#0a0e27]/95 shadow-lg shadow-blue-500/20" : "bg-[#0a0e27]/90"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-between items-center h-16">
//           <a
//             href="#top"
//             onClick={(e) => handleNavClick(e, "#top")}
//             className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//           >
//             Kushal Das
//           </a>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {mobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>

//           <div className="hidden md:flex items-center gap-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
//                 className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
//               >
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden pb-4">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
//                 className="block text-gray-300 hover:text-cyan-400 py-3 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useEffect } from 'react'


// export default function Navbar(){
// useEffect(()=>{
// const navbar = document.getElementById('mainNavbar')
// const onScroll = ()=>{
// if(window.scrollY > 40){
// navbar.style.background = 'rgba(8,12,27,0.98)'
// navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.6)'
// } else {
// navbar.style.background = 'transparent'
// navbar.style.boxShadow = 'none'
// }
// }
// window.addEventListener('scroll', onScroll)
// return ()=> window.removeEventListener('scroll', onScroll)
// }, [])


// return (
// <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom px-3">
// <div className="container">
// <a className="navbar-brand" href="#">Kushal Das</a>
// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
// <span className="navbar-toggler-icon" />
// </button>
// <div className="collapse navbar-collapse" id="navMenu">
// <ul className="navbar-nav ms-auto">
// <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
// <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
// <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
// <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
// <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
// </ul>
// </div>
// </div>
// </nav>
// )
// }

import React from 'react'

export default function Navbar() {
  return (
    <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Kushal Das</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
                aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item ms-2"><a className="btn contact-btn" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
