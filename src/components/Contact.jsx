import { ArrowUpRight, Github, Linkedin, Code2, Mail } from 'lucide-react'

function Contact() {
  return (
    <section className="section-shell section contact-section" id="contact">
      <div className="contact-panel reveal">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Let's Connect</h2>
        <p>Have an opportunity, idea, or simply want to connect?</p>

        <a className="email-link" href="mailto:salmananik.bd@gmail.com">
          <Mail size={19} />
          salmananik.bd@gmail.com
          <ArrowUpRight size={17} />
        </a>

        <div className="contact-links">
          <a href="https://github.com/salman-anik" target="_blank" rel="noreferrer"><Github size={17} /> GitHub ↗</a>
          <a href="https://www.linkedin.com/in/salman-anik-5a7015294" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn ↗</a>
          <a href="https://leetcode.com/u/salmananik/" target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode ↗</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
