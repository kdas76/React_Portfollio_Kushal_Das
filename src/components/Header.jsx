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
