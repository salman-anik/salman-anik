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