import { SKILLS, EXTRA_PLATFORMS } from '../constants'
import { RiReactjsLine } from 'react-icons/ri'
import { BiChip, BiLogoCPlusPlus, BiLogoPostgresql } from 'react-icons/bi'
import { FaJs, FaHtml5, FaAws } from 'react-icons/fa6'
import {
  SiPytorch, SiOnnx, SiNvidia, SiOpenai, SiTensorflow, SiPython, SiRos, SiC, SiRust,
  SiLinux, SiIntel, SiNodedotjs, SiDocker, SiKubernetes, SiGithubactions, SiGit,
} from 'react-icons/si'

// Only the icons the skills list uses, so the whole icon packs aren't bundled
const ICONS = {
  RiReactjsLine, BiChip, BiLogoCPlusPlus, BiLogoPostgresql, FaJs, FaHtml5, FaAws,
  SiPytorch, SiOnnx, SiNvidia, SiOpenai, SiTensorflow, SiPython, SiRos, SiC, SiRust,
  SiLinux, SiIntel, SiNodedotjs, SiDocker, SiKubernetes, SiGithubactions, SiGit,
}
const getIconComponent = (iconName) => ICONS[iconName] || null

const CATEGORY_COLORS = {
  frontend: { label: 'Frontend', color: '#e879a3' },
  backend: { label: 'Backend', color: '#b19cd9' },
  firmware: { label: 'Embedded / Systems', color: '#d8a5d4' },
  tools: { label: 'Tools', color: '#a8a9d4' },
  ml: { label: 'ML/AI', color: '#c99dd0' },
  fullstack: { label: 'Full Stack', color: '#7aa2f7' }, // add this
}

// Lead with the embedded/systems work that the resume is built around
const CATEGORY_ORDER = ['firmware', 'ml', 'fullstack', 'tools', 'frontend', 'backend']

const Skills = () => {
  // Group skills by category
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="section-wrap" style={{ borderTop: '1px solid var(--dimmer)' }}>
      <div className="reveal">
        <p className="section-label">tools &amp; languages</p>
        <h2 className="section-title">skills</h2>
      </div>

      <div className="skills-categories reveal">
        {CATEGORY_ORDER.filter((c) => groupedSkills[c]).map((category) => [category, groupedSkills[category]]).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title" style={{ color: CATEGORY_COLORS[category]?.color }}>
              {CATEGORY_COLORS[category]?.label}
            </h3>
            <div className="skill-grid">
              {skills.map((skill, i) => {
                const IconComponent = getIconComponent(skill.icon)
                return (
                  <div key={i} className="skill-card">
                    <div className="skill-icon">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <div className="skill-info">
                      <p className="skill-name">{skill.name}</p>
                      <p className="skill-level">{skill.experience}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-extras reveal" style={{ marginTop: '2rem' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>also familiar with</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {EXTRA_PLATFORMS.map((platform, i) => (
            <span className="extra-chip" key={i}>{platform.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
