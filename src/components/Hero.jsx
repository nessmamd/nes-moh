import girlImg from '../assets/girl.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-tag">software · mechatronics · embedded · ml</p>
        <p className="job-search-badge"><span aria-hidden="true" /> seeking full-time opportunities</p>
        <h1 className="hero-name">NESSMA<br />MOHDY</h1>
        <p className="hero-greet">Hello there! 👋🏻</p>
        <p className="hero-desc">
          I’m a Software &amp; Mechatronics Engineering student at the University of Calgary, currently a Platform Software Intern at Figure AI, with previous experience at Tesla and AMD. I’m looking for full-time software engineering roles focused on embedded systems, robotics, and machine learning.
        </p>
      </div>

      <div className="hero-right">
        <img
          src={girlImg}
          alt="curly hair girl illustration"
          className="hero-girl-img"
        />
      </div>

      <p className="scroll-hint">scroll</p>
    </section>
  )
}

export default Hero
