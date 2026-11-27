import { ArrowUpRight, CheckCircle2, Download, Github } from 'lucide-react'

function FeaturedProjectCard({
  id,
  kicker,
  title,
  tagline,
  description,
  statusLabel,
  tags,
  icon: Icon,
  image,
  imageAlt,
  images,
  highlights,
  stats,
  liveUrl,
  liveLabel = 'Launch App',
  githubUrl,
  extraAction,
}) {
  return (
    <article className="project-bento-card reveal" id={id}>
      <div className="project-bento-top">
        <div className="project-top-meta">
          <span className="project-kicker-pill">{kicker}</span>
          <span className="flagship-status-badge anapharm-badge">
            <span className="flagship-pulse-dot anapharm-pulse" aria-hidden="true" />
            {statusLabel}
          </span>
        </div>
        <div className="project-top-right">
          <div className="project-tags-inline">
            {tags.slice(0, 3).map((tag) => (
              <span className="project-micro-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          {Icon && (
            <span className="project-icon-badge" aria-hidden="true">
              <Icon size={16} />
            </span>
          )}
        </div>
      </div>

      {images?.length ? (
        <div className="project-media-stage project-media-stage--phones">
          <div className="project-phones-row">
            {images.map((item, idx) => (
              <div
                key={item.src}
                className={`phone-mockup ${idx === 1 ? 'phone-mockup--center' : ''}`}
              >
                <div className="phone-notch" aria-hidden="true" />
                <div className="phone-screen">
                  <img src={item.src} alt={item.alt || title} loading="lazy" />
                </div>
                <div className="phone-home-bar" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        image && (
          <div className="project-media-stage project-media-stage--web">
            <div className="browser-mockup">
              <div className="browser-bar" aria-hidden="true">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
              </div>
              <div className="browser-viewport">
                <img src={image} alt={imageAlt || title} loading="lazy" />
              </div>
            </div>
          </div>
        )
      )}

      <div className="project-bento-body">
        <div className="project-title-row">
          <h3 className="project-bento-title">{title}</h3>
          {tagline && <p className="project-bento-tagline">{tagline}</p>}
        </div>
        <p className="project-bento-desc">{description}</p>

        <ul className="project-bento-highlights">
          {highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={14} className="highlight-icon" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="project-stats-strip">
          {stats.map((s) => (
            <div className="project-stat-cell" key={s.label}>
              <span className="project-bento-stat-value">{s.value}</span>
              <span className="project-bento-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-bento-actions">
        <a
          className="button button-dark anapharm-primary-btn project-btn-compact"
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          {liveLabel} <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        {githubUrl && (
          <a
            className="button button-outline project-btn-compact"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} aria-hidden="true" /> GitHub
          </a>
        )}
        {extraAction && (
          <a
            className="button button-outline project-btn-compact"
            href={extraAction.url}
            target="_blank"
            rel="noreferrer"
          >
            <Download size={15} aria-hidden="true" /> {extraAction.label}
          </a>
        )}
      </div>
    </article>
  )
}

export default FeaturedProjectCard
