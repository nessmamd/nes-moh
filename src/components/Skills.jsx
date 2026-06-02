import { SKILLS, EXTRA_PLATFORMS } from '../constants'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import * as FaIcons from 'react-icons/fa6'
import * as SiIcons from 'react-icons/si'

const getIconComponent = (iconName) => {
  if (iconName.startsWith('Ri')) return RiIcons[iconName]
  if (iconName.startsWith('Bi')) return BiIcons[iconName]
  if (iconName.startsWith('Fa')) return FaIcons[iconName]
  if (iconName.startsWith('Si')) return SiIcons[iconName]
  return null
}

const CATEGORY_COLORS = {
  frontend: { label: 'Frontend', color: '#e879a3' },
  backend: { label: 'Backend', color: '#b19cd9' },
  firmware: { label: 'Firmware', color: '#d8a5d4' },
  tools: { label: 'Tools', color: '#a8a9d4' },
  ml: { label: 'ML/AI', color: '#c99dd0' },
  fullstack: { label: 'Full Stack', color: '#7aa2f7' }, // add this
}

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
        {Object.entries(groupedSkills).map(([category, skills]) => (
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
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ 
                            width: `${skill.proficiency}%`,
                            backgroundColor: CATEGORY_COLORS[category]?.color
                          }}
                        />
                      </div>
                      <p className="skill-level">{skill.proficiency}%</p>
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
