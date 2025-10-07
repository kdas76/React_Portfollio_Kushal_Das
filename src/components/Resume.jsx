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
