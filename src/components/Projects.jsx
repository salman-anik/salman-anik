import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Layers3, Pause, Play } from 'lucide-react'

const projects = [
  {
    title: 'QuranicStatistic',
    category: 'DATA & INTERACTIVE TOOLS',
    description: 'Explore Quranic Arabic through word frequencies, repeated phrases, Surah statistics, and an interactive reader.',
    repository: 'https://github.com/salman-anik/QuranicStatistic',
    liveSite: 'https://quranic-statistic.vercel.app',
  },
  {
    title: 'Bangladesh Education Statistics 2025',
    category: 'DATA VISUALIZATION',
    description: 'An interactive look at Bangladesh education data from BANBEIS, with dependency-free SVG charts.',
    repository: 'https://github.com/salman-anik/Bd-statistic-2025',
    liveSite: 'https://bdstatistic2025.vercel.app/',
  },
  {
    title: 'QawmiVerse',
    category: 'EDUCATION & DIRECTORY',
    description: 'A bilingual guide to Qawmi madrasa education, with a searchable institution directory and cited learning resources.',
    repository: 'https://github.com/salman-anik/QawmiVerse',
    liveSite: 'https://qawmi-verse.vercel.app/',
  },
  {
    title: 'Sarsina Darbar Sharif',
    category: 'BILINGUAL WEBSITE',
    description: 'A responsive institutional website with Bangla and English content, news, history, and community information.',
    repository: 'https://github.com/salman-anik/sarsina-darbar-sharif',
    liveSite: 'https://sarsina-darbar-sharif.vercel.app',
  },
  {
    title: 'TechNexus',
    category: 'PRODUCT SHOWCASE',
    description: 'A responsive product showcase featuring product search, category filters, pricing, and detail modals.',
    repository: 'https://github.com/salman-anik/texhnexus',
    liveSite: 'https://texhnexus.vercel.app',
  },
  {
    title: 'Semantic Search',
    category: 'NLP & MACHINE LEARNING',
    description: 'A hybrid search system that combines self-supervised sentence embeddings with BM25 keyword ranking.',
    repository: 'https://github.com/salman-anik/semantic-search-using-vibe-code',
  },
  {
    title: 'Best Vibe Coder in Bangladesh',
    category: 'PERSONAL WEBSITE',
    description: 'A lightweight personal site introducing my development journey, projects, and interest in AI-assisted coding.',
    repository: 'https://github.com/salman-anik/best-vibe-coder-in-bangladesh',
    liveSite: 'https://best-vibe-coder-in-bangladesh.vercel.app',
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsPaused(true)
    }
  }, [])

  useEffect(() => {
    if (isPaused || isInteracting) return undefined

    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [activeProject, isInteracting, isPaused])

  const showProject = (index) => {
    setActiveProject((index + projects.length) % projects.length)
  }

  const project = projects[activeProject]

  return (
    <section className="section-shell section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">05 / SELECTED PROJECTS</p>
        <h2>Learning by building.</h2>
        <p className="section-intro">A rotating look at projects across web development, data visualization, education, and machine learning.</p>
      </div>

      <div
        className="project-showcase reveal"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocusCapture={() => setIsInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false)
        }}
      >
        <article className="project-card project-card-showcase" key={project.repository}>
          <div className="project-card-top">
            <span className="project-card-number">{String(activeProject + 1).padStart(2, '0')} / {project.category}</span>
            <Layers3 size={19} aria-hidden="true" />
          </div>
          <div className="project-card-copy">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-actions">
            <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
              Source code <Github size={16} aria-hidden="true" />
            </a>
            {project.liveSite && (
              <a className="project-link" href={project.liveSite} target="_blank" rel="noreferrer">
                Live site <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </article>

        <div className="project-showcase-controls">
          <div className="project-showcase-position" aria-live="polite">
            {String(activeProject + 1).padStart(2, '0')} <span>/</span> {String(projects.length).padStart(2, '0')}
          </div>
          <div className="project-showcase-actions">
            <button className="project-control" type="button" onClick={() => showProject(activeProject - 1)} aria-label="Previous project">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button className="project-control" type="button" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? 'Play project rotation' : 'Pause project rotation'}>
              {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
            <button className="project-control" type="button" onClick={() => showProject(activeProject + 1)} aria-label="Next project">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="project-showcase-dots" aria-label="Choose a project">
            {projects.map((item, index) => (
              <button
                className={`project-dot${index === activeProject ? ' is-active' : ''}`}
                type="button"
                key={item.repository}
                onClick={() => showProject(index)}
                aria-label={`Show project ${index + 1}: ${item.title}`}
                aria-current={index === activeProject ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
