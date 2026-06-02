import { useEffect, useRef } from 'react'
import './styles/global.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationSection from './components/EducationSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const cursorRef = useRef(null)
  const canvasRef = useRef(null)

  // ── Custom cursor ──
  useEffect(() => {
    const cursor = cursorRef.current
    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)

    const addBig = () => cursor.classList.add('big')
    const removeBig = () => cursor.classList.remove('big')
    const targets = document.querySelectorAll('a, button, .project-card, .tl-item, .class-card, .skill-row')
    targets.forEach(el => {
      el.addEventListener('mouseenter', addBig)
      el.addEventListener('mouseleave', removeBig)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addBig)
        el.removeEventListener('mouseleave', removeBig)
      })
    }
  }, [])

  // ── Scroll reveal ──
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // ── Floating particles canvas ──
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const SYMS = ['✦', '✧', '★', '☆', '⋆', '○', '◯', '°', '+', '×', '*']
    let W, H, pts, animId

    const resize = () => {
      W = canvas.width = innerWidth
      H = canvas.height = innerHeight
    }

    const init = () => {
      pts = Array.from({ length: 90 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        sym: SYMS[Math.floor(Math.random() * SYMS.length)],
        size: 14 + Math.random() * 22,
        vy: 0.1 + Math.random() * 0.16,
        vx: (Math.random() - 0.5) * 0.07,
        opacity: 0.04 + Math.random() * 0.13,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.phase += 0.01
        ctx.globalAlpha = p.opacity * (0.65 + 0.35 * Math.sin(p.phase))
        ctx.fillStyle = '#fff'
        ctx.font = `${p.size}px monospace`
        ctx.fillText(p.sym, p.x, p.y)
        p.y += p.vy
        p.x += p.vx
        if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W }
        if (p.x < -20) p.x = W + 20
        if (p.x > W + 20) p.x = -20
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()
    window.addEventListener('resize', () => { resize(); init() })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Cursor */}
      <div id="cursor" ref={cursorRef} />

      {/* Particles */}
      <canvas id="particles" ref={canvasRef} />

      {/* Site */}
      <Navbar />
      <Hero />
      <Projects />
      <Bio />
      <Skills />
      <WorkExperience />
      <EducationSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
