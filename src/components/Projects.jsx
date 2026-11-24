import { BookOpen, Database, Feather, HeartPulse, Smartphone } from 'lucide-react'
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
    id: 'anabook',
    kicker: '03 / OFFLINE-FIRST ANDROID READER',
    title: 'AnaBook',
    tagline: 'Offline-first Android eBook reader for 29,178+ Bangla, English & NCTB books.',
    description:
      'Standalone React Native & Expo mobile reader with 5 tactile reading themes, batch offline folder downloads, full Series & Collections shortcut browsing, and built-in in-app APK updates.',
    statusLabel: 'Web & APK',
    tags: ['React Native', 'Expo', 'TypeScript'],
    icon: Smartphone,
    highlights: [
      'Instant search & browsing across 29,178+ verified books and 19,254+ Series & Collections links',
      '5 reading themes (Espresso, Matcha, Midnight, Sepia, Rosewood), offline shelf & batch folder downloads',
      'Built-in in-app APK updater with live progress tracking and automated GitHub Actions release builds',
    ],
    stats: [
      { value: '29,178+', label: 'eBooks Indexed' },
      { value: '5 Themes', label: 'Reader Modes' },
      { value: 'Offline', label: 'Batch Downloads' },
      { value: 'v1.1.4', label: 'Android APK' },
    ],
    liveUrl: 'https://anabook-bd.vercel.app/',
    liveLabel: 'Launch Web',
    githubUrl: 'https://github.com/salman-anik/AnaBook',
    extraAction: {
      label: 'APK',
      url: 'https://github.com/salman-anik/AnaBook/releases/latest/download/AnaBook.apk',
    },
  },
]

const dataCollectionProjects = [
  {
    id: 'bangladesh-public-database',
    kicker: '01 / OPEN-SOURCE DATA INFRASTRUCTURE',
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
    kicker: '02 / OPEN-ACCESS DIGITAL LIBRARY',
    title: 'Bangladesh Biggest eBook Library',
    tagline: '29,178+ verified Bangla, English & NCTB books mirrored with Google Drive.',
    description:
      'An open-access Next.js digital library & 319.4 GB Google Drive archive indexing NCTB textbooks (Class 1–12), Tafsir, Hadith, classic Bangla literature, and 19,254+ Series & Collections shortcut links.',
    statusLabel: 'Live Library',
    tags: ['Next.js', '29,178+ Books', 'Google Drive'],
    icon: BookOpen,
    highlights: [
      '29,178+ verified PDF/EPUB books across Bangla, English, Islamic & Class 1–12 NCTB textbooks',
      'Automated Google Drive shortcut sync exposing 19,254+ Series & Collections links without duplication',
      'Fast client-side search, cover previews, and 1-click Series filtering deployed on Vercel & GitHub Pages',
    ],
    stats: [
      { value: '29,178+', label: 'Verified Books' },
      { value: '319.4 GB', label: 'Drive Archive' },
      { value: '19,254+', label: 'Series Links' },
      { value: 'Class 1–12', label: 'NCTB Textbooks' },
    ],
    liveUrl: 'https://anabook-bd.vercel.app/library',
    liveLabel: 'Visit Library',
    githubUrl: 'https://github.com/salman-anik/Bangladesh-Biggest-eBook-Library',
  },
]

function Projects() {
  return (
    <>
      <section className="section-shell section" id="projects">
        <div className="section-heading reveal">
          <p className="eyebrow">04 / FEATURED PROJECTS</p>
          <h2>Featured Projects</h2>
          <p className="section-intro">
            Three flagship engineering, mobile, and 3D WebGL applications built and maintained on GitHub.
          </p>
        </div>

        <div className="projects-bento-grid">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="section-shell section" id="data-collection">
        <div className="section-heading reveal">
          <p className="eyebrow">05 / DATA COLLECTION PROJECTS</p>
          <h2>Data Collection Projects</h2>
          <p className="section-intro">
            Large-scale open datasets and curated digital archives structured for research, AI/ML, and public access.
          </p>
        </div>

        <div className="projects-bento-grid">
          {dataCollectionProjects.map((project) => (
            <FeaturedProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
