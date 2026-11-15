import { BookOpen, Feather } from 'lucide-react'
import AnaPharmProject from './AnaPharmProject'
import FeaturedProjectCard from './FeaturedProjectCard'
import FlagshipProject from './FlagshipProject'

const extraProjects = [
  {
    id: 'albartross-sa',
    kicker: 'PROJECT 03 / 3D PROCEDURAL WEBGL FLIGHT',
    title: 'Albartross SA — 3D Procedural WebGL Flight Experience',
    tagline: 'Glide across endless islands, misty rivers, and open sea.',
    description:
      'A procedural 3D WebGL flight experience built with Three.js and Next.js. Soar as an albatross over streaming islands, coastal foam, waterfalls, and stone monoliths alongside a glowing pink companion bird, complete with dynamic weather, day/night cycles, and a rotating mini-map.',
    statusLabel: 'Live Web App',
    tags: ['Three.js / WebGL', 'Next.js', 'Procedural World'],
    icon: Feather,
    highlights: [
      'Infinite streaming terrain with islands, waterfalls, coastal foam, stone heads, pillars, and obelisks',
      'Pink companion albatross with independent roaming, side-by-side Fly Together mode, and explore-together guidance',
      'Dynamic day/night cycle, sun and moon arcs, clouds, rain, wind gusts, snow, and sea ice floes',
      'Fullscreen mobile PWA support with touch drag-to-steer, hold-to-boost, and rotating mini-map',
    ],
    stats: [
      { value: '3D WebGL', label: 'Three.js Engine', desc: 'Custom shaders & streaming terrain' },
      { value: 'Dynamic', label: 'Weather & Sky', desc: 'Day/night, mist, rain, snow & ice' },
      { value: 'Companion', label: 'Partner Bird', desc: 'Roam, follow & Fly Together mode' },
      { value: 'Mobile PWA', label: 'Touch & Desktop', desc: 'Fullscreen touch steer & boost' },
    ],
    liveUrl: 'https://albartross-sa.vercel.app/',
    githubUrl: 'https://github.com/salman-anik/Albartross-SA',
  },
  {
    id: 'ebook-library',
    kicker: 'PROJECT 04 / OPEN-ACCESS DIGITAL LIBRARY',
    title: 'Bangladesh Biggest eBook Library',
    tagline: 'Free Bangla & English academic, literature, and competitive exam books.',
    description:
      "An open-access digital library indexing Bangla and English PDF/EPUB books across 25 categories, including all NCTB textbooks (Class 1–12), Islamic books, literature, science, engineering, and BCS preparation resources with direct Google Drive links.",
    statusLabel: 'Live Web App',
    tags: ['HTML / CSS / JS', '25 Categories', 'Open Access'],
    icon: BookOpen,
    highlights: [
      'Complete NCTB textbooks from Class 1 to Class 12 alongside Bangla & English PDF/EPUB collections',
      '25 organized categories covering science, engineering, literature, Islamic studies, and BCS prep',
      'Fast client-side search and category browsing with direct Google Drive access links',
      'Lightweight static web interface hosted on GitHub Pages for instant access on mobile and desktop',
    ],
    stats: [
      { value: '25', label: 'Book Categories', desc: 'Academic, literature, STEM & BCS' },
      { value: 'Class 1–12', label: 'NCTB Textbooks', desc: 'Full school curriculum coverage' },
      { value: 'PDF / EPUB', label: 'Bilingual Library', desc: 'Bangla & English collections' },
      { value: 'Open Access', label: 'GitHub Pages', desc: 'Direct Google Drive links' },
    ],
    liveUrl: 'https://salman-anik.github.io/Bangladesh-Biggest-eBook-Library/',
    liveLabel: 'Visit Library',
    githubUrl: 'https://github.com/salman-anik/Bangladesh-Biggest-eBook-Library',
  },
]

function Projects() {
  return (
    <section className="section-shell section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / FEATURED PROJECTS</p>
        <h2>Featured Projects</h2>
        <p className="section-intro">
          Four featured engineering, 3D WebGL, and open-knowledge initiatives developed and maintained on GitHub — spanning 3D medical simulation, procedural WebGL flight, large-scale Bangladesh public data, and open digital education.
        </p>
      </div>

      <div className="projects-container">
        <AnaPharmProject />
        <div className="projects-divider" aria-hidden="true" />
        <FlagshipProject />
        {extraProjects.map((project) => (
          <div key={project.id}>
            <div className="projects-divider" aria-hidden="true" />
            <FeaturedProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
