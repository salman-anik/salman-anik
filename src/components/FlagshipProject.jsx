import {
  ArrowUpRight,
  Database,
  Github,
  CheckCircle2,
  FileText
} from 'lucide-react'

const stats = [
  { value: '12+', label: 'Public Data Domains', desc: 'Civic, health, finance & transport' },
  { value: '64 / 64', label: 'Districts & Upazilas', desc: 'Granular to unions & postcodes' },
  { value: '40,000+', label: 'Civic & School Records', desc: 'Educational institutions with EIIN' },
  { value: '100%', label: 'Open Source (MIT)', desc: 'Clean UTF-8 JSON & CSV datasets' },
]

const highlights = [
  'Standardized geographic hierarchy covering all 8 divisions, 64 districts, and 495+ upazilas',
  'Exhaustive civic registries: 8,750+ bank branches, routing numbers, hospitals, and emergency hotlines',
  '40,000+ educational institutions categorized with official EIIN identifiers and division summaries',
  'Production-ready data formats prepared for Python Pandas, SQL databases, and AI/ML Vector RAG pipelines',
]

function FlagshipProject() {
  const repoBaseUrl = 'https://github.com/salman-anik/Bangladesh-Biggest-Public-Database'

  return (
    <article className="project-feature-card reveal" id="database">
      <div className="project-feature-header">
        <div className="flagship-status-tags">
          <span className="flagship-status-badge">
            <span className="flagship-pulse-dot" aria-hidden="true" />
            Primary Open-Data Project
          </span>
          <span className="flagship-tag">MIT Open Source</span>
          <span className="flagship-tag">JSON · CSV · PDF</span>
          <span className="flagship-tag">64 Districts &amp; All Upazilas</span>
        </div>
        <Database size={24} className="flagship-icon" aria-hidden="true" />
      </div>

      <div className="project-feature-body">
        <p className="card-kicker">PROJECT 02 / OPEN-DATA INFRASTRUCTURE &amp; CIVIC TECH</p>
        <h3 className="project-feature-title">Bangladesh Biggest Public Database</h3>
        <p className="anapharm-tagline">
          <em>The Largest Open-Source Collection of Structured Bangladesh Public Data.</em>
        </p>
        <p className="project-feature-desc">
          An open-source initiative dedicated to centralizing fragmented Bangladesh public data. Systematically scrapes, cleans, and structures public records across 12+ domains—including geography, banking, healthcare, education, law, and transport—into standardized, machine-readable datasets for developers, researchers, and AI engineers.
        </p>

        <ul className="project-highlights-list">
          {highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flagship-stats-grid project-compact-stats">
          {stats.map((item) => (
            <div className="flagship-stat-card" key={item.label}>
              <span className="flagship-stat-value">{item.value}</span>
              <strong className="flagship-stat-label">{item.label}</strong>
              <span className="flagship-stat-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flagship-actions">
        <a
          className="button button-dark"
          href={repoBaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          Explore on GitHub <Github size={17} aria-hidden="true" />
        </a>
        <a
          className="button button-outline"
          href={`${repoBaseUrl}#contributing`}
          target="_blank"
          rel="noreferrer"
        >
          Contribute Dataset <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default FlagshipProject
