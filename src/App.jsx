import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Highlights from './components/Highlights'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import SoftSkills from './components/SoftSkills'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link')
      let current = ''

      sections.forEach(sec => {
        const offset = sec.offsetTop
        if (window.pageYOffset >= offset - 180) {
          current = sec.getAttribute('id')
        }
      })

      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active')
      })

      // navbar visual tweak on scroll
      const navbar = document.getElementById('mainNavbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(15, 22, 46, 1)'
          navbar.style.boxShadow = '0 4px 25px rgba(0, 115, 255, .4)'
        } else {
          navbar.style.background = 'rgba(15, 22, 46, 0.95)'
          navbar.style.boxShadow = '0 2px 20px rgba(0, 115, 255, .3)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <main className="site-container py-5">
        <Header />
        <Highlights />
        <Projects />
        <Education />
        <Skills />
        <Experience />
        <Certifications />
        <SoftSkills />
        <Resume />
        <Footer />
      </main>
    </div>
  )
}

export default App
