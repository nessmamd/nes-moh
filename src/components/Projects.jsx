import { PROJECTS } from '../constants'

const SYMBOLS = ['☆', '*', '°', '+', '○', '·', '☆', '*', '+']

// Tech categorization for color coding
const TECH_CATEGORIES = {
  // Frontend
  'React': 'frontend', 'Vue': 'frontend', 'Angular': 'frontend', 'HTML': 'frontend',
  'CSS': 'frontend', 'Tailwind': 'frontend', 'JavaScript': 'frontend', 'TypeScript': 'frontend',
  // Backend
  'Python': 'backend', 'Java': 'backend', 'C++': 'backend', 'C': 'backend', 'Node': 'backend',
  'Flask': 'backend', 'MongoDB': 'backend', 'MySQL': 'backend', 'PostgreSQL': 'backend',
  'Blockchain': 'backend', 'Encryption': 'backend',
  // Tools & Infrastructure
  'AWS': 'tools', 'Docker': 'tools', 'Git': 'tools', 'Terraform': 'tools', 'Maven': 'tools',
  'Kubernetes': 'tools', 'API': 'tools', 'Terminal': 'tools', 'Microcontroller': 'tools',
  'FPGA': 'tools', 'Verilog': 'tools', 'Swing': 'tools', 'Algorithms': 'tools',
  // ML/Data
  'Machine Learning': 'ml', 'PyTorch': 'ml', 'ChatGPT': 'ml', 'AR': 'ml', 'Robotics': 'ml',
  'NVIDIA': 'ml',
}

const getTechCategory = (tech) => {
  return TECH_CATEGORIES[tech] || 'other'
}

const Projects = () => {
  return (
    <section id="projects" className="section-wrap" style={{ borderTop: '1px solid var(--dimmer)' }}>
      <div className="reveal">
        <p className="section-label">work i've built</p>
        <h2 className="section-title">projects</h2>
      </div>

      <div className="projects-grid reveal">
        {PROJECTS.map((project, i) => (
          <div className="project-card" key={project.id}>
            <div className="card-line"></div>
            <span className="card-sym">{SYMBOLS[i % SYMBOLS.length]}</span>
            <span className="card-arrow">↗</span>
            <h3 className="card-title">{project.name}</h3>
            <p className="card-desc">{project.description}</p>
            {project.tech && (
              <div className="card-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className={`tech-tag tech-${getTechCategory(t)}`}>{t}</span>
                ))}
              </div>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              view on github
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
