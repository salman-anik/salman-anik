import { BrainCircuit, Code2, Cpu, Database, Layers, Smartphone, Sparkles, Terminal } from 'lucide-react'

const skillRows = [
  {
    label: 'Languages, Frontend & Mobile',
    direction: 'left',
    duration: '46s',
    icon: Code2,
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'C',
      'Java',
      'HTML5',
      'CSS3',
      'React',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'CSS Modules',
      'Redux Toolkit',
      'React Native',
      'Expo',
      'Flutter',
      'Android Studio',
      'Google Play Console',
      'Google Fonts',
    ],
  },
  {
    label: 'Backend, APIs, CS Core & Databases',
    direction: 'right',
    duration: '50s',
    icon: Database,
    items: [
      'Node.js',
      'Express.js',
      'Python backend',
      'FastAPI',
      'Django',
      'Flask',
      'Laravel',
      'REST API',
      'WebSockets',
      'HTTP / HTTPS',
      'JSON',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'MongoDB',
      'Firebase',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
    ],
  },
  {
    label: 'AI, Data Science, Cloud & Tooling',
    direction: 'left',
    duration: '44s',
    icon: BrainCircuit,
    items: [
      'AI agents & tool calling',
      'OpenAI / Gemini / Anthropic APIs',
      'MCP',
      'Ollama',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
      'Jupyter Notebook / Lab',
      'Kaggle',
      'Excel',
      'Git',
      'GitHub',
      'Linux / Ubuntu',
      'Vercel',
      'GitHub Pages',
      'Figma',
      'Canva',
    ],
  },
]

const rowIcons = [Layers, Terminal, Cpu]

function Skills() {
  return (
    <section className="section-shell section" id="skills">
      <div className="section-heading reveal">
        <p className="eyebrow">03 / SKILLS</p>
        <h2>What I Work With</h2>
        <p className="section-intro">
          56 technologies across AI &amp; agents, Data Science, full-stack web, mobile apps, databases, and deployment.
        </p>
      </div>

      <div className="skills-marquee-shell reveal">
        <div className="skills-marquee-header">
          <span className="flagship-status-badge anapharm-badge">
            <span className="flagship-pulse-dot anapharm-pulse" aria-hidden="true" />
            56 Completed Skills
          </span>
          <span className="skills-marquee-hint">
            <Sparkles size={14} aria-hidden="true" /> Hover any row to pause
          </span>
        </div>

        <div className="skills-marquee-rows">
          {skillRows.map((row, idx) => {
            const RowIcon = row.icon || rowIcons[idx % rowIcons.length]
            return (
              <div className="skills-marquee-group" key={row.label}>
                <div className="skills-row-label">
                  <RowIcon size={14} aria-hidden="true" />
                  <span>{row.label}</span>
                </div>
                <div className="skills-marquee-viewport">
                  <div
                    className={`skills-marquee-track ${row.direction === 'right' ? 'is-reverse' : ''}`}
                    style={{ '--marquee-duration': row.duration }}
                  >
                    {[0, 1].map((dup) => (
                      <div className="skills-marquee-set" aria-hidden={dup === 1} key={dup}>
                        {row.items.map((name) => (
                          <span className="skill-pill" key={`${dup}-${name}`}>
                            <span className="skill-pill-dot" aria-hidden="true" />
                            <span>{name}</span>
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="skills-summary-bar">
          <span>
            <Smartphone size={14} aria-hidden="true" /> Mobile &amp; Web
          </span>
          <span>
            <BrainCircuit size={14} aria-hidden="true" /> AI Agents &amp; MCP
          </span>
          <span>
            <Database size={14} aria-hidden="true" /> SQL, NoSQL &amp; Data Science
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills
