import { MapPin, GraduationCap, CalendarDays, University } from 'lucide-react'

const details = [
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: University, label: 'University', value: 'East West University' },
  { icon: GraduationCap, label: 'Degree', value: 'B.Sc. in CSE' },
  { icon: CalendarDays, label: 'Expected Graduation', value: '2027' },
]

function About() {
  return (
    <section className="section-shell section" id="about">
      <div className="section-heading reveal">
        <p className="eyebrow">01 / ABOUT</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy reveal">
          <p>
            I'm a Computer Science and Engineering student at East West University, currently exploring
            the field of Data Science.
          </p>
          <p>
            My current focus is on strengthening my programming, problem-solving, database, and data-related
            skills. I'm interested in understanding how data can be transformed into useful insights and
            practical solutions.
          </p>
          <p>
            I'm currently building my foundation in Python and gradually moving toward Data Science and
            Machine Learning.
          </p>
        </div>

        <div className="info-card reveal">
          {details.map(({ icon: Icon, label, value }) => (
            <div className="info-item" key={label}>
              <div className="icon-box"><Icon size={18} /></div>
              <div>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About