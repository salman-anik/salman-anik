import { useEffect, useRef, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowDownToLine } from 'lucide-react'
import { scrollToElement, scrollToTop } from '../utils/smoothScroll'

const links = [
  ['About', 'about'],
  ['Thoughts', 'thoughts'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Projects', 'projects'],
  ['Data Projects', 'data-collection'],
  ['Contact', 'contact'],
]

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const goTo = (id) => {
    scrollToElement(document.getElementById(id))
    setOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" ref={navRef} aria-label="Primary navigation">
        <button className="brand" onClick={() => { scrollToTop(); setOpen(false) }}>
          SA<span>.</span>
        </button>

        <div id="primary-nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>{label}</button>
          ))}
          <a className="nav-resume" href="/Salman-Anik-Resume.pdf" download onClick={() => setOpen(false)}>
            Resume <ArrowDownToLine size={14} />
          </a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="primary-nav-links"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
