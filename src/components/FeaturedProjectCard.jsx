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
        {Icon && <Icon size={20} className="anapharm-pulse-icon" aria-hidden="true" />}
      </div>

      {images?.length ? (
        <div className="project-bento-media project-bento-media--gallery">
          {images.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt || title} loading="lazy" />
          ))}
        </div>
      ) : (
        image && (
          <div className="project-bento-media">
            <img src={image} alt={imageAlt || title} loading="lazy" />
          </div>
        )
      )}

      <div className="project-bento-body">
        <p className="card-kicker">{kicker}</p>
        <h3 className="project-bento-title">{title}</h3>
        {tagline && <p className="project-bento-tagline">{tagline}</p>}
        <p className="project-bento-desc">{description}</p>

        <ul className="project-bento-highlights">
          {highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={15} className="highlight-icon" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="project-bento-stats">
          {stats.map((s) => (
            <div className="project-bento-stat" key={s.label}>
              <span className="project-bento-stat-value">{s.value}</span>
              <span className="project-bento-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-bento-actions">
        <a
          className="button button-dark anapharm-primary-btn"
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          {liveLabel} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        {githubUrl && (
          <a
            className="button button-outline"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Github size={16} aria-hidden="true" />
          </a>
        )}
        {extraAction && (
          <a
            className="button button-outline"
            href={extraAction.url}
            target="_blank"
            rel="noreferrer"
          >
            {extraAction.label} <Download size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export default FeaturedProjectCard
