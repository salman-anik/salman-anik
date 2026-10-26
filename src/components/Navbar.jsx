import { useState } from 'react'
import { Menu, X, Sun, Moon, ArrowDownToLine } from 'lucide-react'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          SA<span>.</span>
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>{label}</button>
          ))}
          <a className="nav-resume" href="/Salman-Anik-CV.pdf" download>
            Resume <ArrowDownToLine size={14} />
          </a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar