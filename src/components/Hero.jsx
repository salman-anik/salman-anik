import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, MapPin, Sparkles } from 'lucide-react'
import { scrollToElement } from '../utils/smoothScroll'

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-content reveal">
        <div className="profile-frame">
          <img
            src="/profile.jpg"
            alt="Salman Anik"
            className="profile-image"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              event.currentTarget.parentElement.classList.add('profile-fallback')
            }}
          />
          <span className="profile-initials">SA</span>
        </div>

        <p className="hero-status"><span aria-hidden="true" /> Open to learning and collaboration</p>
        <p className="eyebrow">HELLO, I'M</p>
        <h1>Salman Anik<span className="hero-period">.</span></h1>
        <p className="hero-title">Computer Science student <span>·</span> Data science enthusiast</p>
        <p className="hero-copy">
          I'm a Computer Science and Engineering student at East West University with a growing
          interest in Data Science. I enjoy learning, building practical projects, and exploring
          how data and technology can solve real-world problems.
        </p>

        <div className="hero-meta"><span><MapPin size={15} /> Dhaka, Bangladesh</span><span><Sparkles size={15} /> Curious by nature</span></div>

        <div className="hero-buttons">
          <a className="button button-dark" href="https://github.com/salman-anik" target="_blank" rel="noreferrer">
            View GitHub <ArrowUpRight size={17} />
          </a>
          <a className="button button-outline" href="/Salman-Anik-CV.pdf" download>
            Download CV <ArrowDown size={17} />
          </a>
        </div>

        <div className="social-row">
          <a href="https://github.com/salman-anik" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/salman-anik-5a7015294" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="https://leetcode.com/u/salmananik/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={18} /></a>
        </div>

        <button className="scroll-cue" onClick={() => scrollToElement(document.getElementById('about'))}>
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  )
}

export default Hero
