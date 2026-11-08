import { useState } from 'react'
import {
  ArrowUpRight,
  Database,
  Github,
  MapPin,
  Pill,
  Building2,
  HeartPulse,
  GraduationCap,
  Scale,
  ShieldAlert,
  Train,
  CheckCircle2,
  FileCode2,
  Sparkles,
  FolderGit2,
  Terminal
} from 'lucide-react'

const domains = [
  {
    id: 'geography',
    name: 'Geography & Admin',
    icon: MapPin,
    badge: '64 Districts · All Upazilas',
    summary: 'Complete administrative hierarchy of Bangladesh from divisions and districts down to unions and postal codes.',
    files: ['divisions.json', 'districts.json', 'upazilas.json', 'unions.json (715 KB)', 'postal_codes.json (506 KB)', 'city_corporations.json'],
    useCases: 'Geo-analytics, address autocompletion, map visualization, delivery zoning',
    repoPath: 'geography',
  },
  {
    id: 'medicine',
    name: 'Medicine & Pharma',
    icon: Pill,
    badge: '22+ MB Standardized Data',
    summary: 'Exhaustive pharmaceutical registry covering medicines, active generic ingredients, dosage forms, and manufacturers.',
    files: ['all_medicines_summary.json (12.1 MB)', 'generics.json (10.6 MB)', 'manufacturers.json', 'dosage_forms.json', 'indications.json'],
    useCases: 'Prescription software, telemedicine apps, pharmacy inventory, drug interaction & ML research',
    repoPath: 'medicine',
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    icon: Building2,
    badge: 'Branches & Routing Numbers',
    summary: 'Comprehensive institutional datasets including commercial banks, thousands of branches, routing numbers, and MFS operators.',
    files: ['banks.json', 'branches.json (4.4 MB)', 'routing_numbers.json (4.5 MB)', 'mfs_providers.json'],
    useCases: 'Fintech checkout flows, electronic fund transfer validation, branch locators',
    repoPath: 'banking',
  },
  {
    id: 'healthcare',
    name: 'Healthcare Directory',
    icon: HeartPulse,
    badge: 'Hospitals & Blood Banks',
    summary: 'Public healthcare infrastructure including hospitals, diagnostic centers, doctor registries, and ambulance services.',
    files: ['hospitals.json (2.0 MB)', 'doctors.json', 'blood_banks.json', 'diagnostic_centers.json', 'ambulance_services.json'],
    useCases: 'Emergency medical apps, hospital discovery tools, blood donor coordination',
    repoPath: 'healthcare',
  },
  {
    id: 'education',
    name: 'Education & Institutes',
    icon: GraduationCap,
    badge: 'All 8 Divisions & Overseas',
    summary: 'Educational hierarchy and institutions classified across all administrative divisions with EIIN identifiers.',
    files: ['education_hierarchy.json', 'Dhaka/', 'Chattogram/', 'Rajshahi/', 'Khulna/', 'Sylhet/', 'Barishal/', 'Rangpur/', 'Mymensingh/'],
    useCases: 'EdTech platforms, institutional benchmarks, student demographics and research',
    repoPath: 'education',
  },
  {
    id: 'law',
    name: 'Law & Justice',
    icon: Scale,
    badge: 'Constitution & Penal Code',
    summary: 'Structured legal corpus including the Constitution of Bangladesh, major statutory acts, and legal directories.',
    files: ['constitution.json', 'penal_code_1860.json', 'crpc_1898.json', 'major_acts_catalog.json', 'legal_terms_glossary.json'],
    useCases: 'LegalTech search, automated legal assistant agents, public civics portals',
    repoPath: 'law',
  },
  {
    id: 'transport',
    name: 'Transport & Logistics',
    icon: Train,
    badge: 'Rail, Air & River Networks',
    summary: 'Transit schedules, station stops, fare matrixes, intercity trains, airports, and launch routes across Bangladesh.',
    files: ['intercity_trains.json', 'railway_stations.json', 'train_fares.json', 'airports.json', 'launch_routes.json', 'bus_routes.json'],
    useCases: 'Travel planning, ticket fare calculators, multimodal commute mapping',
    repoPath: 'transport',
  },
  {
    id: 'emergency',
    name: 'Emergency & Hotlines',
    icon: ShieldAlert,
    badge: '24/7 National Hotlines',
    summary: 'Critical public safety contacts including national emergency helplines (999, 333), police stations, and fire services.',
    files: ['national_hotlines.json', 'police_stations.json', 'fire_stations.json', 'district_administration.json'],
    useCases: 'Public safety bots, emergency dispatch widgets, community helplines',
    repoPath: 'emergency',
  },
]

const stats = [
  { value: '12+', label: 'Public Data Domains', desc: 'Covering civic, health & finance' },
  { value: '64 / 64', label: 'Districts & Upazilas', desc: 'Granular down to unions & postcodes' },
  { value: '22+ MB', label: 'Pharma & Medical Data', desc: 'Generics, brands & manufacturers' },
  { value: '100%', label: 'Open Source (MIT)', desc: 'UTF-8 JSON & CSV ready for Python/JS' },
]

function FlagshipProject() {
  const [selectedDomain, setSelectedDomain] = useState(domains[0])
  const [activeCodeTab, setActiveCodeTab] = useState('python')

  const repoBaseUrl = 'https://github.com/salman-anik/Bangladesh-Biggest-Public-Database'

  return (
    <section className="section-shell section" id="database">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / FLAGSHIP PROJECT</p>
        <h2>Bangladesh Biggest Public Database</h2>
        <p className="section-intro">
          My primary ongoing open-data initiative: unifying fragmented Bangladesh public records into structured, production-ready datasets for developers, researchers, and AI engineers.
        </p>
      </div>

      <div className="flagship-hero-card reveal">
        <div className="flagship-hero-header">
          <div className="flagship-status-tags">
            <span className="flagship-status-badge">
              <span className="flagship-pulse-dot" aria-hidden="true" />
              Primary Ongoing Project
            </span>
            <span className="flagship-tag">MIT Open Source</span>
            <span className="flagship-tag">JSON · CSV · PDF</span>
          </div>
          <Database size={24} className="flagship-icon" aria-hidden="true" />
        </div>

        <div className="flagship-hero-content">
          <h3>Centralizing scattered Bangladesh data for everyone.</h3>
          <p>
            Finding reliable, structured Bangladesh-specific data has long been a challenge. Information is scattered across outdated government gazettes, inaccessible PDFs, regulatory portals, and siloed directories.
          </p>
          <p>
            <strong>Bangladesh Biggest Public Database</strong> bridges this gap by systematically scraping, cleaning, structuring, and maintaining verified datasets in clean, machine-readable formats with documented data provenance.
          </p>
        </div>

        <div className="flagship-actions">
          <a
            className="button button-dark"
            href={repoBaseUrl}
            target="_blank"
            rel="noreferrer"
          >
            Explore on GitHub <Github size={17} aria-hidden="true" />
          </a>
          <a
            className="button button-outline"
            href={`${repoBaseUrl}#contributing`}
            target="_blank"
            rel="noreferrer"
          >
            Contribute Dataset <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="flagship-stats-grid reveal">
        {stats.map((item) => (
          <div className="flagship-stat-card" key={item.label}>
            <span className="flagship-stat-value">{item.value}</span>
            <strong className="flagship-stat-label">{item.label}</strong>
            <span className="flagship-stat-desc">{item.desc}</span>
          </div>
        ))}
      </div>

      <div className="flagship-explorer reveal">
        <div className="flagship-explorer-header">
          <div>
            <p className="card-kicker">DATASET DOMAINS</p>
            <h3>Explore What's Inside</h3>
          </div>
          <span className="flagship-explorer-hint">Click a domain to inspect its catalog</span>
        </div>

        <div className="flagship-domain-tabs" role="tablist" aria-label="Dataset categories">
          {domains.map((dom) => {
            const Icon = dom.icon
            const isSelected = selectedDomain.id === dom.id
            return (
              <button
                key={dom.id}
                role="tab"
                aria-selected={isSelected}
                className={`flagship-domain-tab${isSelected ? ' is-active' : ''}`}
                onClick={() => setSelectedDomain(dom)}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{dom.name}</span>
              </button>
            )
          })}
        </div>

        <div className="flagship-domain-detail" role="tabpanel">
          <div className="flagship-domain-detail-top">
            <div>
              <span className="flagship-badge-pill">{selectedDomain.badge}</span>
              <h4>{selectedDomain.name}</h4>
              <p className="flagship-domain-summary">{selectedDomain.summary}</p>
            </div>
            <a
              className="flagship-folder-link"
              href={`${repoBaseUrl}/tree/main/${selectedDomain.repoPath}`}
              target="_blank"
              rel="noreferrer"
            >
              Browse Folder <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="flagship-domain-meta-grid">
            <div className="flagship-meta-box">
              <span className="flagship-meta-label">
                <FileCode2 size={15} aria-hidden="true" /> Key Files in Repository
              </span>
              <ul className="flagship-file-list">
                {selectedDomain.files.map((file) => (
                  <li key={file}>
                    <code>{file}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flagship-meta-box">
              <span className="flagship-meta-label">
                <Sparkles size={15} aria-hidden="true" /> Practical Applications
              </span>
              <p className="flagship-usecases-text">{selectedDomain.useCases}</p>
              <div className="flagship-ready-for">
                <span>Ready for:</span>
                <code>Python Pandas</code>
                <code>Node.js</code>
                <code>SQL</code>
                <code>Vector RAG</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flagship-code-snippet reveal">
        <div className="flagship-code-header">
          <div className="flagship-code-title">
            <Terminal size={17} aria-hidden="true" />
            <span>Developer Quickstart</span>
          </div>
          <div className="flagship-code-tabs">
            <button
              className={`flagship-code-tab${activeCodeTab === 'python' ? ' is-active' : ''}`}
              onClick={() => setActiveCodeTab('python')}
              type="button"
            >
              Python
            </button>
            <button
              className={`flagship-code-tab${activeCodeTab === 'javascript' ? ' is-active' : ''}`}
              onClick={() => setActiveCodeTab('javascript')}
              type="button"
            >
              JavaScript / Node
            </button>
          </div>
        </div>

        <div className="flagship-code-body">
          {activeCodeTab === 'python' ? (
            <pre>
              <code>{`# Load and explore Bangladesh datasets in 3 lines
import json
import pandas as pd

with open("geography/districts.json", "r", encoding="utf-8") as f:
    districts = json.load(f)

# Convert directly to DataFrame for analysis or ML
df = pd.DataFrame(districts)
print(f"Total districts: {len(df)}")
print(df.head())`}</code>
            </pre>
          ) : (
            <pre>
              <code>{`// Read and query Bangladesh banking or medicine data
const fs = require('fs');

const banks = JSON.parse(
  fs.readFileSync('./banking/banks.json', 'utf8')
);

// Search institutions instantly
const search = banks.filter(b => b.name?.includes('BRAC'));
console.log(search);`}</code>
            </pre>
          )}
        </div>
      </div>
    </section>
  )
}

export default FlagshipProject
