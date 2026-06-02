import { useState } from 'react'
import { EXPERIENCES } from '../constants'

const LOGOS = {
  Tesla: {
    bg: "#000000",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511306426826358856/teslalogo.png?ex=6a1ff94a&is=6a1ea7ca&hm=6af5c134e4d1cd6a0071220570e91093df2f76a0fdcf9baddca77cf649e502a4&",
  },
  AMD: {
    bg: "#1f1f1f",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511306427103449098/amdlogo.png?ex=6a1ff94a&is=6a1ea7ca&hm=3d130bb31238e4632f6c5121f7665bd291cacf1a5a6f00a4ab6904b906abe7af&",
  },
  BMW: {
    bg: "#1a1a2e",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511306428223062036/BMW.svg.png?ex=6a1ff94b&is=6a1ea7cb&hm=239be5cbffc3f2bfceb314f8a4798938998ec7073a059d56e196cb69464bcf00&",
  },

  "Schulich Space Rover Team": {
    bg: "#0a0a1a",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511306427862355999/ssrt.png?ex=6a1ff94b&is=6a1ea7cb&hm=bba6d50377ed130ef08194f77203d90c32e1fbf048a7ea50516f56da04186b21&",
  },

  "University of Calgary": {
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511307168828362944/cal.png?ex=6a1ff9fb&is=6a1ea87b&hm=28ce5b140af942c5440ca68203b4a00bc8c8044078e2e608e4034ee168f98b84&",
  },

  AiRM: {
    bg: "#0d1117",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511307690796908584/tech_start_ucalgary_logo.jpeg?ex=6a1ffa78&is=6a1ea8f8&hm=df2d3cb32815267e61e5e8d4f90d9833bc472f7f1d8d188a12e37886808cbb04&",
  },

  "Luminous Energy Solutions LTD.": {
    bg: "#111a00",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511306982341087232/plant-growing-graphic-clipart-design-free-png.webp?ex=6a1ff9cf&is=6a1ea84f&hm=85998c5800031efadd4fea758a5b1b6aad9a8730587dfc45adb26e03fd8085d6&",
  },

  "Minds in Motion": {
    bg: "#001a0d",
    icon: "https://cdn.discordapp.com/attachments/1451050956442833051/1511307455651381248/impressive-vintage-futuristic-gaming-controller-ergonomic-design-glowing-buttons-detailed-png.png?ex=6a1ffa40&is=6a1ea8c0&hm=922fef384c6814f93587b1a412ec43b1007671df5084bd76b5404cacbbf4db65&",
  },
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
  const [openIndex, setOpenIndex] = useState(null)
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

              <div className="tl-expand" style={{ maxHeight: isOpen ? '600px' : '0' }}>
                <p className="tl-desc">{exp.description}</p>
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
