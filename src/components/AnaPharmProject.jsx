import {
  ArrowUpRight,
  Github,
  HeartPulse,
  Download,
  CheckCircle2,
  Layers,
  Activity,
  Pill,
  Sparkles
} from 'lucide-react'

const stats = [
  { value: '33,200+', label: 'BD Medicine Brands', desc: 'Commercial brands across Bangladesh' },
  { value: '2,594', label: 'Generic Medicines', desc: 'Indications & dosages in Bangla' },
  { value: '3D WebGL', label: 'Anatomy Dissection', desc: 'Layer separation & 360° rotation' },
  { value: '3+ Sims', label: 'Physiological Engine', desc: 'Heart BPM, lungs & circulation' },
]

const highlights = [
  'Interactive 3D full-body human anatomy with 360° rotation, zoom & X-ray radiography mode',
  'Real-time physiological simulations including animated cardiac BPM, lung respiration & blood flow',
  'Comprehensive Bangladesh medicine database of 33,200+ brands with generic formulas & Bangla indications',
  'Bilingual UI (Bangla/English) with Hind Siliguri typography, instant search & offline Android APK',
]

function AnaPharmProject() {
  const webAppUrl = 'https://anapharm.vercel.app/'
  const githubUrl = 'https://github.com/salman-anik/AnaPharm'
  const apkReleaseUrl = 'https://github.com/salman-anik/AnaPharm/releases'

  return (
    <article className="project-feature-card reveal" id="anapharm">
      <div className="project-feature-header">
        <div className="flagship-status-tags">
          <span className="flagship-status-badge anapharm-badge">
            <span className="flagship-pulse-dot anapharm-pulse" aria-hidden="true" />
            Live Web App &amp; Mobile APK
          </span>
          <span className="flagship-tag">Three.js / WebGL</span>
          <span className="flagship-tag">React Native &amp; Expo</span>
          <span className="flagship-tag">Release v3.5 (v1.0.0)</span>
        </div>
        <HeartPulse size={24} className="anapharm-pulse-icon" aria-hidden="true" />
      </div>

      <div className="project-feature-body">
        <p className="card-kicker">PROJECT 01 / 3D HEALTHCARE &amp; PHARMACOLOGY</p>
        <h3 className="project-feature-title">AnaPharm — 3D Human Anatomy &amp; Bangladesh Medicine Database</h3>
        <p className="anapharm-tagline">
          <em>Explore Anatomy. Understand Physiology. Discover Medicine.</em>
        </p>
        <p className="project-feature-desc">
          An educational application combining real-time 3D human anatomy visualization with an exhaustive Bangladesh pharmaceutical directory. Unites 3D anatomical exploration and real-time physiological simulations with 33,200+ commercial medicine brands and 2,594 generic medicines featuring Bangla indications and dosage guidelines.
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
          href={webAppUrl}
          target="_blank"
          rel="noreferrer"
        >
          Launch Web App <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <a
          className="button button-outline"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Source Code <Github size={17} aria-hidden="true" />
        </a>
        <a
          className="button button-outline"
          href={apkReleaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download APK <Download size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default AnaPharmProject
