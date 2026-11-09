import AnaPharmProject from './AnaPharmProject'
import FlagshipProject from './FlagshipProject'

function Projects() {
  return (
    <section className="section-shell section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / FEATURED PROJECTS</p>
        <h2>Featured Projects</h2>
        <p className="section-intro">
          Two primary engineering and open-data initiatives developed and maintained on GitHub — bridging 3D interactive medical simulation with large-scale open data infrastructure for Bangladesh.
        </p>
      </div>

      <div className="projects-container">
        <AnaPharmProject />
        <div className="projects-divider" aria-hidden="true" />
        <FlagshipProject />
      </div>
    </section>
  )
}

export default Projects
