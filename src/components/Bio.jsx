import { BIO } from '../constants'
import resume from '../assets/NessmaResume.pdf'

const Bio = () => {
  return (
    <section id="bio" className="section-wrap" style={{ borderTop: '1px solid var(--dimmer)' }}>
      <div className="bio-grid">
        <div className="bio-text reveal">
          <p className="section-label">about me</p>
          <h2 className="section-title">bio</h2>
          {BIO.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="bio-links">
            <a href="mailto:nessmamo@outlook.com" className="bio-link">email me</a>
            <a href="https://www.linkedin.com/in/nessmamohdy/" target="_blank" rel="noopener noreferrer" className="bio-link">linkedin</a>
            <a href="https://github.com/nessmamd" target="_blank" rel="noopener noreferrer" className="bio-link">github</a>
            <a href={resume} download className="bio-link">resume ↓</a>
          </div>
        </div>

        <div className="reveal">
          <p className="interests-label">interests</p>
          <div className="interests-grid">
            {['🎮', '🎵', '🥾'].map((emoji, i) => (
              <div className="interest-dot" key={i}>{emoji}</div>
            ))}
          </div>

          <div className="edu-card" style={{ marginTop: '2rem' }}>
            <p className="interests-label">education</p>
            <p className="edu-card-degree">Software Engineering + Mechatronics Minor</p>
            <p className="edu-card-inst">University of Calgary · 2021 – Present</p>
            <p className="edu-card-dur">
              Dean's List (2022) · Diversity Champions Engineering<br />
              Jason Lang Scholarship · PURE Award
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
