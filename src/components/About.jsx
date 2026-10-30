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
            I’m studying Computer Science and Engineering at East West University and exploring how data can help answer real questions.
          </p>
          <p>
            Right now, I’m strengthening my programming, problem-solving, database, and data analysis skills. I enjoy the process of taking a new idea, understanding the fundamentals, and turning it into something practical.
          </p>
          <p>
            I’m building a solid foundation in Python and SQL as I work toward Data Science and Machine Learning.
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
