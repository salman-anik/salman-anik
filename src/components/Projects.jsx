import { BrainCircuit, Database, Sparkles } from 'lucide-react'

const projectIdeas = [
  {
    number: '01',
    label: 'IN PROGRESS',
    title: 'Projects Coming Soon',
    description: "I'm building practical projects and turning what I learn into hands-on experience.",
    className: 'project-card-featured',
    icon: Sparkles,
  },
  {
    number: '02',
    label: 'AREA OF INTEREST',
    title: 'AI & Machine Learning',
    description: 'Exploring ideas around intelligent systems and learning from data.',
    className: '',
    icon: BrainCircuit,
  },
  {
    number: '03',
    label: 'AREA OF INTEREST',
    title: 'Data & Analytics',
    description: 'Exploring data mining and analytics to uncover useful insights.',
    className: '',
    icon: Database,
  },
]

function Projects() {
  return (
    <section className="section-shell section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / PROJECTS</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projectIdeas.map(({ number, label, title, description, className, icon: Icon }) => (
          <article className={`project-card reveal ${className}`} key={number}>
            <div className="project-card-top">
              <span className="project-card-number">{number}</span>
              <Icon size={19} aria-hidden="true" />
            </div>
            <div className="project-card-copy">
              <p className="card-kicker">{label}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects