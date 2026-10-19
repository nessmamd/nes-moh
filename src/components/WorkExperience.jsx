import { useState } from 'react'
import { EXPERIENCES } from '../constants'
import teslaLogo from '../assets/teslalogo.png'
import amdLogo from '../assets/amdlogo.png'
import bmwLogo from '../assets/BMW.svg.png'
import ssrtLogo from '../assets/ssrt.png'
import ucalLogo from '../assets/cal.png'
import techStartLogo from '../assets/tech_start_ucalgary_logo.jpeg'
import luminousLogo from '../assets/plant-growing-graphic-clipart-design-free-png.webp'

// Logos are bundled locally (the old Discord CDN links expired in June 2026)
const LOGOS = {
  Tesla: { bg: "#000000", icon: teslaLogo },
  AMD: { bg: "#1f1f1f", icon: amdLogo },
  BMW: { bg: "#1a1a2e", icon: bmwLogo },
  "Schulich Space Rover Team": { bg: "#0a0a1a", icon: ssrtLogo },
  "University of Calgary": { icon: ucalLogo },
  AiRM: { bg: "#0d1117", icon: techStartLogo },
  "Luminous Energy Solutions LTD.": { bg: "#111a00", icon: luminousLogo },
};

const TlLogo = ({ company }) => {
  const logo = LOGOS[company] || {
    bg: "#111",
    initials: company.slice(0, 2).toUpperCase(),
  }

  return (
    <div className="tl-logo" style={{ background: logo.bg }}>
      {logo.icon ? (
        <img
          src={logo.icon}
          alt={company}
          style={{
            width: "70%",
            height: "70%",
            objectFit: "contain",
          }}
        />
      ) : (
        <span style={{ fontSize: "0.65rem" }}>
          {logo.initials}
        </span>
      )}
    </div>
  )
}

const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex)

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length) }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>

      {images.length > 1 && (
        <button className="lightbox-arrow lightbox-prev" onClick={prev}>‹</button>
      )}

      <img
        className="lightbox-img"
        src={images[current]}
        alt={`image ${current + 1}`}
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button className="lightbox-arrow lightbox-next" onClick={next}>›</button>
      )}

      {images.length > 1 && (
        <div className="lightbox-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`lightbox-dot${i === current ? ' lightbox-dot--active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const WorkExperience = () => {
  const [openIndex, setOpenIndex] = useState(0) // most recent role starts expanded
  const [lightbox, setLightbox] = useState(null) // { images, startIndex }

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const openLightbox = (e, images, idx) => {
    e.stopPropagation()
    setLightbox({ images, startIndex: idx })
  }

  return (
    <section id="work" className="section-wrap" style={{ borderTop: '1px solid var(--dimmer)' }}>
      <div className="reveal">
        <p className="section-label">where i've worked</p>
        <h2 className="section-title">experience</h2>
        <p className="exp-subtitle">more in-depth than my linkedin description</p>
      </div>

      <div className="timeline reveal">
        {EXPERIENCES.map((exp, i) => {
          const isOpen = openIndex === i
          return (
            <div
              className={`tl-item${isOpen ? ' tl-item--open' : ''}`}
              key={i}
              onClick={() => toggle(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="tl-dot" />
              <TlLogo company={exp.company} />
              <div className="tl-header">
                <div>
                  <div className="tl-title">{exp.title}</div>
                  <div className="tl-company">{exp.company}</div>
                </div>
                <div className="tl-right">
                  <div className="tl-duration">{exp.duration}</div>
                  <span className="tl-chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▾
                  </span>
                </div>
              </div>

              <div className="tl-expand" style={{ maxHeight: isOpen ? '1600px' : '0' }}>
                {exp.bullets ? (
                  <ul className="tl-desc tl-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                ) : (
                  <p className="tl-desc">{exp.description}</p>
                )}
                {exp.tech && (
                  <div className="card-tech tl-tech">
                    {exp.tech.map((t, j) => <span key={j} className="tech-tag tech-other">{t}</span>)}
                  </div>
                )}
                {exp.images && exp.images.length > 0 && (
                  <div className="tl-images">
                    {exp.images.map((img, j) => (
                      <img
                        key={j}
                        src={img}
                        alt={`${exp.company} ${j + 1}`}
                        className="tl-img"
                        onClick={(e) => openLightbox(e, exp.images, j)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}

export default WorkExperience
