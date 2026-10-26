const learningStages = [
  ['Computer Networks', 'Communication and network systems'],
  ['Statistics for Data Science', 'Statistical methods for data analysis'],
  ['Computer Architecture', 'How computer systems are built'],
  ['Artificial Intelligence', 'Intelligent systems and problem-solving'],
  ['Software Engineering', 'Designing and building reliable software'],
  ['Cyber Security', 'Protecting systems, networks, and data'],
  ['Ethics and Law', 'Responsible and lawful technology'],
  ['Machine Learning', 'Models that learn from data'],
  ['Data Mining', 'Finding patterns in large datasets'],
  ['Big Data Analytics', 'Analyzing data at scale'],
  ['Software Testing and Quality Assurance', 'Verifying software quality and reliability'],
  ['IT Project Management & Entrepreneurship', 'Planning projects and building ideas'],
]

function Learning() {
  return (
    <section className="section-shell section" id="learning">
      <div className="learning-panel reveal">
        <div className="learning-heading">
          <p className="eyebrow">CSE LEARNING PATH</p>
          <h2>Building my path toward<br /><em>AI &amp; Data Science.</em></h2>
        </div>
        <ol className="learning-path" aria-label="Learning pathway">
          {learningStages.map(([title, description], index) => (
            <li className="learning-stage" key={title}>
              <span className="learning-stage-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="learning-stage-copy">
                <strong>{title}</strong>
                <span>{description}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Learning