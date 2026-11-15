import { BookOpen, Database, Feather, HeartPulse } from 'lucide-react'
import FeaturedProjectCard from './FeaturedProjectCard'

const featuredProjects = [
  {
    id: 'albartross-sa',
    kicker: '01 / 3D PROCEDURAL WEBGL',
    title: 'Albartross SA',
    tagline: 'Procedural 3D flight over islands, misty rivers, and open sea.',
    description:
      'A Three.js and Next.js WebGL flight world where you glide as an albatross alongside a glowing pink companion bird through dynamic weather and day/night cycles.',
    statusLabel: 'Live Web App',
    tags: ['Three.js', 'Next.js', 'WebGL'],
    icon: Feather,
    image: '/projects/albartross.jpg',
    imageAlt: 'Albartross SA two birds flying together over a flower island',
    highlights: [
      'Infinite streaming islands, waterfalls, coastal foam, and stone monoliths',
      'Pink companion bird with roaming AI, Fly Together mode, and explore-together guidance',
      'Day/night sky, mist, rain, snow, sea ice floes, rotating mini-map, and mobile PWA',
    ],
    stats: [
      { value: '3D WebGL', label: 'Three.js Shaders' },
      { value: 'Companion', label: 'Partner Bird AI' },
      { value: 'Dynamic', label: 'Weather & Sky' },
      { value: 'Mobile PWA', label: 'Touch & Fullscreen' },
    ],
    liveUrl: 'https://albartross-sa.vercel.app/',
    liveLabel: 'Fly Live',
    githubUrl: 'https://github.com/salman-anik/Albartross-SA',
  },
  {
    id: 'anapharm',
    kicker: '02 / 3D HEALTHCARE & PHARMACOLOGY',
    title: 'AnaPharm',
    tagline: '3D Human Anatomy & Bangladesh Medicine Database.',
    description:
      'Bilingual (Bangla/English) 3D anatomy viewer and pharmaceutical directory combining WebGL dissection and physiological simulations with 33,200+ Bangladesh medicine brands.',
    statusLabel: 'Web & APK',
    tags: ['Three.js', 'React Native', 'Expo'],
    icon: HeartPulse,
    image: '/projects/anapharm.png',
    imageAlt: 'AnaPharm 3D Human Anatomy Viewer',
    highlights: [
      '360° 3D human anatomy with layered dissection, exploded view, and X-ray mode',
      'Real-time cardiac BPM, lung respiration, and blood circulation simulations',
      '33,200+ commercial brands and 2,594 generic medicines with Bangla indications',
    ],
    stats: [
      { value: '33,200+', label: 'Medicine Brands' },
      { value: '2,594', label: 'Generic Drugs' },
      { value: '3D WebGL', label: 'Anatomy Layers' },
      { value: 'v3.5', label: 'Web & Android APK' },
    ],
    liveUrl: 'https://anapharm.vercel.app/',
    liveLabel: 'Launch App',
    githubUrl: 'https://github.com/salman-anik/AnaPharm',
    extraAction: {
      label: 'APK',
      url: 'https://github.com/salman-anik/AnaPharm/releases',
    },
  },
  {
    id: 'bangladesh-public-database',
    kicker: '03 / OPEN-SOURCE DATA INFRASTRUCTURE',
    title: 'Bangladesh Biggest Public Database',
    tagline: 'Structured national datasets in JSON, CSV, and GeoJSON.',
    description:
      'Centralizes fragmented civic, health, geographic, banking, educational, legal, and transport records across Bangladesh into clean, AI/ML-ready open datasets.',
    statusLabel: 'Active Open Data',
    tags: ['JSON / CSV', 'GeoJSON', 'Next.js'],
    icon: Database,
    highlights: [
      'All 8 divisions, 64 districts, 495+ upazilas, unions, and postal codes',
      '22+ MB medicine registry, 40,000+ schools with EIIN, hospitals, and bank routing',
      'Bangladesh Constitution, Penal Code, CrPC, railway routes, and emergency contacts',
    ],
    stats: [
      { value: '22', label: 'Dataset Domains' },
      { value: '40,000+', label: 'Schools Indexed' },
      { value: '2.33 TB', label: 'Drive Mirror' },
      { value: 'MIT', label: 'Open License' },
    ],
    liveUrl: 'https://bangladesh-biggest-public-database.vercel.app/',
    liveLabel: 'Explore Data',
    githubUrl: 'https://github.com/salman-anik/Bangladesh-Biggest-Public-Database',
  },
  {
    id: 'ebook-library',
    kicker: '04 / OPEN-ACCESS DIGITAL LIBRARY',
    title: 'Bangladesh Biggest eBook Library',
    tagline: 'Bangla & English PDF/EPUB books across 25 categories.',
    description:
      'An open-access digital library indexing NCTB textbooks (Class 1–12), Islamic books, literature, science, engineering, and BCS preparation resources with direct links.',
    statusLabel: 'Live Library',
    tags: ['25 Categories', 'PDF / EPUB', 'GitHub Pages'],
    icon: BookOpen,
    highlights: [
      'Complete NCTB school curriculum textbooks from Class 1 to Class 12',
      'Curated Bangla and English science, engineering, literature, and BCS books',
      'Fast client-side search and category filtering with direct Google Drive links',
    ],
    stats: [
      { value: '25', label: 'Categories' },
      { value: 'Class 1–12', label: 'NCTB Books' },
      { value: 'Bilingual', label: 'Bangla & English' },
      { value: 'Free', label: 'Open Access' },
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
          Four flagship engineering, 3D WebGL, and open-data projects built and maintained on GitHub.
        </p>
      </div>

      <div className="projects-bento-grid">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
