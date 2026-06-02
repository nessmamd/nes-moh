import { EDUCATION, CLASSES } from '../constants'
import dinosLogo from '../assets/dinos.png'

const EducationSection = () => {
  return (
    <section id="education" className="section-wrap" style={{ borderTop: '1px solid var(--dimmer)' }}>
      <div className="reveal">
        <p className="section-label">academic background</p>
        <h2 className="section-title">education</h2>
      </div>

      <div className="reveal">
        {EDUCATION.map((edu, i) => (
          <div className="edu-item" key={i}>
            <img src={dinosLogo} alt="University of Calgary Dinos" className="edu-dinos-logo" />
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-inst">{edu.institution}</div>
            <div className="edu-dur">{edu.duration}</div>
            <div className="edu-awards">{edu.description}</div>
          </div>
        ))}

        <div className="classes-grid">
          {CLASSES.map((cls) => (
            <div className="class-card" key={cls.id}>
              <div className="class-title">{cls.name}</div>
              <p className="class-desc">{cls.description}</p>
              <a
                href={cls.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="class-link"
              >
                github ↗
              </a>
            </div>
          ))}
        </div>

        <div className="other-classes">
          <h3>other notable classes</h3>
          <p>
            Embedded &amp; Hardware Systems · Networking · Data Structures &amp; Algorithms ·
            Linear Algebra · Mobile Robotics · VR · Digital Circuits · Control Systems ·
            Signals &amp; Transforms
          </p>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
