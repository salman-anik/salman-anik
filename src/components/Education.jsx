import { GraduationCap } from 'lucide-react'

function Education() {
  return (
    <section className="section-shell section" id="education">
      <div className="section-heading reveal">
        <p className="eyebrow">03 / EDUCATION</p>
        <h2>Education</h2>
      </div>

      <article className="education-card reveal">
        <div className="education-year">2023 — 2027</div>
        <div className="education-marker"><GraduationCap size={21} /></div>
        <div className="education-content">
          <p className="card-kicker">UNDERGRADUATE</p>
          <h3>B.Sc. in Computer Science &amp; Engineering</h3>
          <h4>East West University</h4>
          <p>
            Currently pursuing a B.Sc. in Computer Science &amp; Engineering with an academic interest
            in Data Science.
          </p>
          <span className="status-pill">Expected graduation: 2027</span>
        </div>
      </article>
    </section>
  )
}

export default Education
