import { useState } from 'react'
import {
  ArrowUpRight,
  Github,
  HeartPulse,
  Pill,
  Activity,
  Layers,
  Sparkles,
  Smartphone,
  Download,
  Eye,
  Search,
  Sliders,
  CheckCircle2,
  Cpu,
  Globe
} from 'lucide-react'

const sampleMedicines = [
  {
    brand: 'Napa',
    generic: 'Paracetamol',
    dosageForm: '500 mg Tablet / Suspension',
    manufacturer: 'Beximco Pharmaceuticals Ltd.',
    indicationBn: 'জ্বর, সাধারণ মাথাব্যথা, দাঁতের ব্যথা, সর্দি ও ইনফ্লুয়েঞ্জাজনিত সাধারণ ব্যথায় নির্দেশিত।',
    category: 'Analgesic & Antipyretic',
  },
  {
    brand: 'Seclo',
    generic: 'Omeprazole',
    dosageForm: '20 mg Capsule / Injection',
    manufacturer: 'Square Pharmaceuticals PLC',
    indicationBn: 'গ্যাস্ট্রিক ও ডুওডেনাল আলসার, এসিডিটি, বুক জ্বালাপোড়া এবং অ্যাসিড রিফ্লাক্স নিরাময়ে ব্যবহৃত হয়।',
    category: 'Proton Pump Inhibitor (PPI)',
  },
  {
    brand: 'Sergel',
    generic: 'Esomeprazole',
    dosageForm: '20 mg / 40 mg Tablet',
    manufacturer: 'Incepta Pharmaceuticals Ltd.',
    indicationBn: 'জিইআরডি (GERD), পেপটিক আলসার ও গ্যাস্ট্রোইসোফেজিয়াল রিফ্লাক্সজনিত খাদ্যনালী প্রদাহের চিকিৎসায়।',
    category: 'Proton Pump Inhibitor (PPI)',
  },
  {
    brand: 'Ciprocin',
    generic: 'Ciprofloxacin',
    dosageForm: '500 mg Film Coated Tablet',
    manufacturer: 'Square Pharmaceuticals PLC',
    indicationBn: 'শ্বাসতন্ত্র, মূত্রনালী, ত্বক ও ব্যাকটেরিয়াজনিত সংক্রমণের বিরুদ্ধে কার্যকর অ্যান্টিবায়োটিক।',
    category: 'Fluoroquinolone Antibiotic',
  },
]

const dissectionLayers = [
  {
    id: 'full',
    name: 'Full Body 3D Mesh',
    system: 'Surface & Integumentary',
    desc: 'High-fidelity full-body anatomical model with 360° orbital rotation, camera panning, and pinch-to-zoom navigation.',
    tech: 'Three.js Mesh & WebGL PBR Shaders',
    specs: ['360° Orbit Controls', 'High-Poly Geometry', 'PBR Surface Shaders'],
  },
  {
    id: 'dissection',
    name: 'Layered Dissection',
    system: 'Musculoskeletal Hierarchy',
    desc: 'Exploded disassembly separating muscular and skeletal layers along normal vectors to inspect deep anatomical structures.',
    tech: 'Transform Matrices & Normal Displacement',
    specs: ['Exploded Geometry', 'Layer Isolation', 'Vector Displacement'],
  },
  {
    id: 'xray',
    name: 'X-Ray Radiography',
    system: 'Skeletal & Internal Organs',
    desc: 'Semi-transparent visualization mode allowing internal organ placement and skeletal bone structure examination simultaneously.',
    tech: 'Alpha Blending & Fresnel Opacity',
    specs: ['Fresnel Falloff', 'Opacity Blending', 'Organ Highlighting'],
  },
  {
    id: 'circulation',
    name: 'Cardiovascular Flow',
    system: 'Circulatory & Vascular',
    desc: 'Animated particle flow simulating oxygenated arterial and deoxygenated venous blood circulation throughout the body.',
    tech: 'Particle Systems & GPU Shaders',
    specs: ['Dynamic Particles', 'Arterial / Venous Paths', 'Real-time Flow Velocity'],
  },
]

const anapharmStats = [
  { value: '33,200+', label: 'BD Medicine Brands', desc: 'Covering commercial brands across Bangladesh' },
  { value: '2,594', label: 'Generic Medicines', desc: 'With indications, dosages & precautions in Bangla' },
  { value: '3D WebGL', label: 'Anatomy Dissection', desc: 'Layered separation, X-ray mode & 360° rotation' },
  { value: '3+ Sims', label: 'Real-Time Physiology', desc: 'Adjustable BPM heartbeat, lungs & circulation' },
]

function AnaPharmProject() {
  const [activeDemo, setActiveDemo] = useState('heartbeat')
  const [bpm, setBpm] = useState(76)
  const [selectedLayer, setSelectedLayer] = useState(dissectionLayers[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMed, setSelectedMed] = useState(sampleMedicines[0])

  const webAppUrl = 'https://anapharm.vercel.app/'
  const githubUrl = 'https://github.com/salman-anik/AnaPharm'
  const apkReleaseUrl = 'https://github.com/salman-anik/AnaPharm/releases'

  // Heart state classification
  const heartState = bpm < 60
    ? { text: 'Bradycardia (Resting / Slow)', color: '#38bdf8' }
    : bpm <= 100
      ? { text: 'Normal Sinus Rhythm', color: '#22c55e' }
      : { text: 'Tachycardia (Elevated)', color: '#f59e0b' }

  const beatPeriod = (60 / bpm).toFixed(2)

  const filteredMeds = sampleMedicines.filter(
    (m) =>
      m.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.generic.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <article className="anapharm-showcase reveal" id="anapharm">
      <div className="flagship-hero-card anapharm-hero-card">
        <div className="flagship-hero-header">
          <div className="flagship-status-tags">
            <span className="flagship-status-badge anapharm-badge">
              <span className="flagship-pulse-dot anapharm-pulse" aria-hidden="true" />
              Live Web App &amp; Mobile APK
            </span>
            <span className="flagship-tag">Three.js / WebGL</span>
            <span className="flagship-tag">React Native &amp; Expo</span>
            <span className="flagship-tag">Release v3.5 (v1.0.0)</span>
            <span className="flagship-tag">Bangla &amp; English</span>
          </div>
          <HeartPulse size={26} className="anapharm-pulse-icon" aria-hidden="true" />
        </div>

        <div className="flagship-hero-content">
          <p className="card-kicker">PROJECT 01 / 3D MEDICAL APPLICATION &amp; PHARMACOLOGY</p>
          <h3>AnaPharm — 3D Human Anatomy &amp; Bangladesh Medicine Database</h3>
          <p className="anapharm-tagline">
            <em>Explore Anatomy. Understand Physiology. Discover Medicine.</em>
          </p>
          <p>
            <strong>AnaPharm</strong> is an educational application combining real-time 3D human anatomy with an exhaustive Bangladesh pharmaceutical reference platform. Instead of relying on static 2D textbook drawings or fragmented drug indexes, AnaPharm brings anatomical exploration, physiological simulations, disease understanding, and commercial medicine databases into one seamless experience.
          </p>
          <p>
            Includes interactive 3D full-body models with layered dissection, animated cardiovascular heart simulations with adjustable BPM, lung respiratory cycles, and an offline-ready directory of <strong>33,200+ Bangladesh commercial medicine brands</strong> and <strong>2,594 generic medicines</strong> complete with medical indications, dosage forms, and precautions written in Bangla with Hind Siliguri typography.
          </p>
        </div>

        <div className="flagship-actions">
          <a
            className="button button-dark anapharm-primary-btn"
            href={webAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            Launch Web App <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a
            className="button button-outline"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Source Code on GitHub <Github size={17} aria-hidden="true" />
          </a>
          <a
            className="button button-outline"
            href={apkReleaseUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download Android APK <Download size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="flagship-stats-grid reveal">
        {anapharmStats.map((item) => (
          <div className="flagship-stat-card anapharm-stat-card" key={item.label}>
            <span className="flagship-stat-value anapharm-stat-val">{item.value}</span>
            <strong className="flagship-stat-label">{item.label}</strong>
            <span className="flagship-stat-desc">{item.desc}</span>
          </div>
        ))}
      </div>

      {/* Interactive Demonstration & Feature Explorer */}
      <div className="flagship-explorer anapharm-interactive-panel reveal">
        <div className="flagship-explorer-header">
          <div>
            <p className="card-kicker">INTERACTIVE CAPABILITIES</p>
            <h3>Live Feature Demonstration</h3>
          </div>
          <span className="flagship-explorer-hint">Test the simulation engine &amp; medical data preview below</span>
        </div>

        <div className="flagship-domain-tabs" role="tablist" aria-label="Feature demonstrations">
          <button
            role="tab"
            aria-selected={activeDemo === 'heartbeat'}
            className={`flagship-domain-tab${activeDemo === 'heartbeat' ? ' is-active' : ''}`}
            onClick={() => setActiveDemo('heartbeat')}
          >
            <Activity size={16} aria-hidden="true" />
            <span>Physiology &amp; BPM Simulator</span>
          </button>
          <button
            role="tab"
            aria-selected={activeDemo === 'anatomy'}
            className={`flagship-domain-tab${activeDemo === 'anatomy' ? ' is-active' : ''}`}
            onClick={() => setActiveDemo('anatomy')}
          >
            <Layers size={16} aria-hidden="true" />
            <span>3D Dissection Modes</span>
          </button>
          <button
            role="tab"
            aria-selected={activeDemo === 'medicine'}
            className={`flagship-domain-tab${activeDemo === 'medicine' ? ' is-active' : ''}`}
            onClick={() => setActiveDemo('medicine')}
          >
            <Pill size={16} aria-hidden="true" />
            <span>Bangladesh Medicine Database</span>
          </button>
        </div>

        {/* Demo Tab 1: Heartbeat & Physiology */}
        {activeDemo === 'heartbeat' && (
          <div className="anapharm-demo-body" role="tabpanel">
            <div className="anapharm-sim-container">
              <div className="anapharm-heart-visual">
                <div
                  className="anapharm-heart-beating"
                  style={{
                    animationDuration: `${beatPeriod}s`,
                  }}
                >
                  <HeartPulse size={64} className="anapharm-beating-svg" />
                </div>
                <div className="anapharm-ecg-line" aria-hidden="true">
                  <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="anapharm-ecg-svg">
                    <path
                      d="M 0 30 L 40 30 L 50 15 L 60 45 L 70 5 L 80 55 L 90 30 L 140 30 L 150 15 L 160 45 L 170 5 L 180 55 L 190 30 L 240 30 L 250 15 L 260 45 L 270 5 L 280 55 L 290 30 L 300 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="anapharm-sim-controls">
                <div className="anapharm-sim-readout">
                  <div className="anapharm-bpm-gauge">
                    <span className="anapharm-bpm-number">{bpm}</span>
                    <span className="anapharm-bpm-unit">BPM (Beats / Min)</span>
                  </div>
                  <div className="anapharm-state-indicator">
                    <span className="anapharm-state-dot" style={{ backgroundColor: heartState.color }} />
                    <span className="anapharm-state-name" style={{ color: heartState.color }}>
                      {heartState.text}
                    </span>
                    <span className="anapharm-cycle-time">Cycle: {beatPeriod}s per cardiac cycle</span>
                  </div>
                </div>

                <div className="anapharm-slider-box">
                  <div className="anapharm-slider-labels">
                    <label htmlFor="bpm-slider">Adjust Cardiac Heart Rate:</label>
                    <span>{bpm} BPM</span>
                  </div>
                  <input
                    id="bpm-slider"
                    type="range"
                    min="50"
                    max="140"
                    value={bpm}
                    onChange={(e) => setBpm(Number(e.target.value))}
                    className="anapharm-slider"
                  />
                  <div className="anapharm-slider-ticks">
                    <span>50 (Bradycardia)</span>
                    <span>75 (Normal)</span>
                    <span>140 (Tachycardia)</span>
                  </div>
                </div>

                <div className="anapharm-preset-pills">
                  <span>Quick Presets:</span>
                  <button type="button" onClick={() => setBpm(58)} className="anapharm-preset-btn">
                    Resting (58 BPM)
                  </button>
                  <button type="button" onClick={() => setBpm(76)} className="anapharm-preset-btn">
                    Normal (76 BPM)
                  </button>
                  <button type="button" onClick={() => setBpm(120)} className="anapharm-preset-btn">
                    Exercise (120 BPM)
                  </button>
                </div>
              </div>
            </div>

            <div className="anapharm-callout-grid">
              <div className="anapharm-feature-card">
                <span className="flagship-meta-label">
                  <HeartPulse size={15} aria-hidden="true" /> Cardiac Cycle Simulation
                </span>
                <p>
                  Calculates real-time ventricular contraction (systole) and filling (diastole) with dynamic timing mapped directly to heart rate equations.
                </p>
              </div>
              <div className="anapharm-feature-card">
                <span className="flagship-meta-label">
                  <Activity size={15} aria-hidden="true" /> Lung Respiratory Simulation
                </span>
                <p>
                  Synchronized inhalation and exhalation cycle simulating pulmonary expansion, contraction, and oxygenation mechanics.
                </p>
              </div>
              <div className="anapharm-feature-card">
                <span className="flagship-meta-label">
                  <Cpu size={15} aria-hidden="true" /> Blood Particle Velocity
                </span>
                <p>
                  Three.js WebGL particle flow rendering arterial oxygenated blood (red) and deoxygenated venous return (blue) at dynamic velocity.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Demo Tab 2: 3D Anatomy & Dissection Modes */}
        {activeDemo === 'anatomy' && (
          <div className="anapharm-demo-body" role="tabpanel">
            <div className="anapharm-layers-selector">
              {dissectionLayers.map((layer) => (
                <button
                  type="button"
                  key={layer.id}
                  className={`anapharm-layer-btn${selectedLayer.id === layer.id ? ' is-selected' : ''}`}
                  onClick={() => setSelectedLayer(layer)}
                >
                  <span className="anapharm-layer-system">{layer.system}</span>
                  <strong>{layer.name}</strong>
                </button>
              ))}
            </div>

            <div className="anapharm-layer-detail">
              <div className="anapharm-layer-card">
                <div className="anapharm-layer-header">
                  <div>
                    <span className="flagship-badge-pill">{selectedLayer.system}</span>
                    <h4>{selectedLayer.name}</h4>
                  </div>
                  <span className="anapharm-tech-pill">{selectedLayer.tech}</span>
                </div>
                <p className="flagship-domain-summary">{selectedLayer.desc}</p>

                <div className="anapharm-specs-row">
                  <span className="anapharm-specs-label">Key Specifications:</span>
                  {selectedLayer.specs.map((spec) => (
                    <span key={spec} className="anapharm-spec-tag">
                      <CheckCircle2 size={13} aria-hidden="true" /> {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="anapharm-callout-grid">
              <div className="anapharm-feature-card">
                <span className="flagship-meta-label">
                  <Eye size={15} aria-hidden="true" /> 360° Orbital Navigation
                </span>
                <p>
                  Free camera rotation, pinch-to-zoom, and focal point tracking across all anatomical structures and internal organ systems.
                </p>
              </div>
              <div className="anapharm-feature-card">
                <span className="flagship-meta-label">
                  <Layers size={15} aria-hidden="true" /> Layer Separation Engine
                </span>
                <p>
                  Isolates individual muscle groups, skeletal joints, nervous systems, and visceral organs for in-depth medical study.
                </p>
              </div>
              <div className="anapharm-feature-card">
                <span className="flagship-meta-label">
                  <Smartphone size={15} aria-hidden="true" /> High Performance Hermes Engine
                </span>
                <p>
                  Pre-compiled Hermes bytecode on Android with WebGL canvas rendering for 60 FPS mobile responsiveness.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Demo Tab 3: Bangladesh Medicine Database */}
        {activeDemo === 'medicine' && (
          <div className="anapharm-demo-body" role="tabpanel">
            <div className="anapharm-med-searchbar">
              <Search size={18} className="anapharm-search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search Bangladesh brands or generics (e.g., Napa, Seclo, Paracetamol)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="anapharm-search-input"
              />
            </div>

            <div className="anapharm-med-quickpicks">
              <span className="anapharm-quick-label">Sample Bangladesh Medicines:</span>
              {sampleMedicines.map((med) => (
                <button
                  type="button"
                  key={med.brand}
                  className={`anapharm-quick-btn${selectedMed.brand === med.brand ? ' is-active' : ''}`}
                  onClick={() => {
                    setSelectedMed(med)
                    setSearchQuery('')
                  }}
                >
                  {med.brand} ({med.generic})
                </button>
              ))}
            </div>

            <div className="anapharm-med-preview-card">
              <div className="anapharm-med-preview-top">
                <div>
                  <span className="anapharm-cat-tag">{selectedMed.category}</span>
                  <h4 className="anapharm-med-title">
                    {selectedMed.brand} <span className="anapharm-generic-name">({selectedMed.generic})</span>
                  </h4>
                  <p className="anapharm-mfg">{selectedMed.manufacturer}</p>
                </div>
                <div className="anapharm-dosage-pill">
                  <span>Dosage Form</span>
                  <strong>{selectedMed.dosageForm}</strong>
                </div>
              </div>

              <div className="anapharm-indication-box">
                <span className="anapharm-ind-label">
                  <CheckCircle2 size={15} aria-hidden="true" /> Indications in Bangla (নির্দেশনা):
                </span>
                <p className="anapharm-ind-text">{selectedMed.indicationBn}</p>
              </div>

              <div className="anapharm-med-meta-tags">
                <span className="anapharm-tag-item">Bangladesh DGDA Compliant</span>
                <span className="anapharm-tag-item">33,200+ Brands Indexed</span>
                <span className="anapharm-tag-item">Bangla Medical Indications</span>
                <span className="anapharm-tag-item">Contraindications &amp; Precautions</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default AnaPharmProject
