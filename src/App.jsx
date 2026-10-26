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
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('salman-theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const background = document.body
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches) return

    let frame = 0
    const updateGradient = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = maxScroll > 0
          ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
          : 0

        background.style.setProperty('--scroll-gradient-opacity', String(1 - progress * 0.7))
        background.style.setProperty('--scroll-gradient-shift', `${progress * 48}px`)
      })
    }

    window.addEventListener('scroll', updateGradient, { passive: true })
    window.addEventListener('resize', updateGradient)
    updateGradient()

    return () => {
      window.removeEventListener('scroll', updateGradient)
      window.removeEventListener('resize', updateGradient)
      window.cancelAnimationFrame(frame)
      background.style.removeProperty('--scroll-gradient-opacity')
      background.style.removeProperty('--scroll-gradient-shift')
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('salman-theme', theme)
  }, [theme])

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