import { ArrowUpRight, Code2, Github, Layers3 } from 'lucide-react'

const destinations = [
  {
    number: '01',
    title: 'Code & experiments',
    description: 'Small builds, coursework, and experiments as I grow my development skills.',
    href: 'https://github.com/salman-anik',
    link: 'Explore GitHub',
    icon: Github,
  },
  {
    number: '02',
    title: 'Problem solving',
    description: 'Practicing programming fundamentals and sharpening my approach to problems.',
    href: 'https://leetcode.com/u/salmananik/',
    link: 'View LeetCode',
    icon: Code2,
  },
]

function Projects() {
  return (
    <section className="section-shell section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / WORK &amp; PRACTICE</p>
        <h2>Learning by building.</h2>
        <p className="section-intro">I’m growing my portfolio through coursework, coding practice, and hands-on experiments. Follow along as I add more work.</p>
      </div>

      <div className="projects-grid">
        <article className="project-card project-card-featured reveal">
          <div className="project-card-top">
            <span className="project-card-number">IN PROGRESS</span>
            <Layers3 size={19} aria-hidden="true" />
          </div>
          <div className="project-card-copy">
            <p className="card-kicker">MY NEXT CHAPTER</p>
            <h3>From foundations to data projects</h3>
            <p>I’m strengthening my Python, SQL, and data analysis foundations. The next step: sharing practical projects that turn what I learn into something useful.</p>
            <a className="project-link" href="https://github.com/salman-anik" target="_blank" rel="noreferrer">Follow my progress <ArrowUpRight size={16} /></a>
          </div>
        </article>

        {destinations.map(({ number, title, description, href, link, icon: Icon }) => (
          <a className="project-card project-card-link reveal" href={href} target="_blank" rel="noreferrer" key={number}>
            <div className="project-card-top">
              <span className="project-card-number">{number}</span>
              <Icon size={19} aria-hidden="true" />
            </div>
            <div className="project-card-copy">
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="project-link">{link} <ArrowUpRight size={16} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
