import girlImg from '../assets/girl.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-tag">software · mechatronics · embedded · ml</p>
        <h1 className="hero-name">NESSMA<br />MOHDY</h1>
        <p className="hero-greet">Hello there! 👋🏻</p>
        <p className="hero-desc">
         I work at the intersection of embedded systems, machine learning, and the kind of software that touches real hardware. Currently studying Software & Mechatronics Engineering at the University of Calgary, pursuing internships in embedded, ML/AI, and performance-critical systems.
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
