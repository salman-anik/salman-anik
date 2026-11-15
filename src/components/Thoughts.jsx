import { Calculator, Cpu, Quote, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Calculator,
    title: 'The Calculator Parallel',
    text: 'When calculators arrived, people feared math skills would vanish. Instead, calculators became standard—freeing human minds to solve harder engineering and scientific problems.',
  },
  {
    icon: Cpu,
    title: 'AI as the Modern Co-Pilot',
    text: 'Today, AI tools and LLMs are our new calculator for code, research, and design. Learning how to direct, verify, and build with AI multiplies what a single developer can ship.',
  },
  {
    icon: Sparkles,
    title: 'Adapt or Fall Behind',
    text: 'If you and I do not adapt with AI, we risk becoming extinct in the modern world. Adaptation is not optional—it is how we stay relevant, creative, and competitive.',
  },
]

function Thoughts() {
  return (
    <section className="section-shell section" id="thoughts">
      <div className="section-heading reveal">
        <p className="eyebrow">05 / MY THOUGHTS</p>
        <h2>My Thoughts on AI Adaptation</h2>
        <p className="section-intro">
          Why embracing AI—just like embracing the calculator—is essential for thriving in the modern world.
        </p>
      </div>

      <article className="thought-feature-card reveal">
        <div className="thought-quote-row">
          <Quote size={24} className="anapharm-pulse-icon" aria-hidden="true" />
          <span className="flagship-status-badge anapharm-badge">Thought Post · AI &amp; Future of Work</span>
        </div>

        <h3 className="thought-title">
          Adapt with AI — or Risk Becoming Extinct in the Modern World
        </h3>

        <div className="thought-prose">
          <p>
            I strongly believe in <strong>AI adaptation</strong>. Technology has always moved forward in waves, and every wave rewards the people who learn to ride it. If you and I refuse to adapt with AI today, we risk becoming extinct from the modern world—just like refusing modern tools in any earlier era.
          </p>
          <p>
            Think about the <strong>calculator</strong>. When pocket calculators first appeared, many argued they were a shortcut that would ruin problem-solving. Today, no engineer, scientist, or analyst works without one. The calculator didn&apos;t end mathematics—it raised the baseline of what one person can accomplish. <strong>AI is our generation&apos;s calculator</strong>: from writing and debugging code to analyzing datasets, designing interfaces, and accelerating research, AI turns ideas into reality in a fraction of the time.
          </p>
        </div>

        <div className="thought-pillars-grid">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div className="thought-pillar-card" key={title}>
              <div className="thought-pillar-head">
                <Icon size={18} className="anapharm-pulse-icon" aria-hidden="true" />
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Thoughts
