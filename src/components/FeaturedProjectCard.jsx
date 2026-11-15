import { ArrowUpRight, CheckCircle2, Github } from 'lucide-react'

function FeaturedProjectCard({
  id,
  kicker,
  title,
  tagline,
  description,
  statusLabel,
  tags,
  icon: Icon,
  highlights,
  stats,
  liveUrl,
  liveLabel = 'Launch Web App',
  githubUrl,
}) {
  return (
    <article className="project-feature-card reveal" id={id}>
      <div className="project-feature-header">
        <div className="flagship-status-tags">
          <span className="flagship-status-badge anapharm-badge">
            <span className="flagship-pulse-dot anapharm-pulse" aria-hidden="true" />
            {statusLabel}
          </span>
          {tags.map((tag) => (
            <span className="flagship-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {Icon && <Icon size={24} className="anapharm-pulse-icon" aria-hidden="true" />}
      </div>

      <div className="project-feature-body">
        <p className="card-kicker">{kicker}</p>
        <h3 className="project-feature-title">{title}</h3>
        {tagline && (
          <p className="anapharm-tagline">
            <em>{tagline}</em>
          </p>
        )}
        <p className="project-feature-desc">{description}</p>

        <ul className="project-highlights-list">
          {highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flagship-stats-grid project-compact-stats">
          {stats.map((s) => (
            <div className="flagship-stat-card" key={s.label}>
              <span className="flagship-stat-value">{s.value}</span>
              <strong className="flagship-stat-label">{s.label}</strong>
              <span className="flagship-stat-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flagship-actions">
        <a
          className="button button-dark anapharm-primary-btn"
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          {liveLabel} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <a
          className="button button-outline"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Source Code <Github size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default FeaturedProjectCard
