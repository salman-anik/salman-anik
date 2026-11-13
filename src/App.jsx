'use client'

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Learning from './components/Learning'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('salman-theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.dataset.theme = theme
    localStorage.setItem('salman-theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light')

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Learning />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
