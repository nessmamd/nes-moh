import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NAVIGATION_LINKS } from '../constants'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = -85
      const offsetPosition = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav>
      <a className="nav-logo" href="#">
        <span className="k">ᯓ★</span>
        <span>NM</span>
      </a>

      {/* Desktop */}
      <ul className="nav-links" style={{ display: 'flex' }}>
        {NAVIGATION_LINKS.map((item, i) => (
          <li key={i}>
            <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none', border: 'none', color: 'white',
          cursor: 'none', fontSize: '1.2rem'
        }}
        className="mobile-menu-btn"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMobileMenuOpen && (
        <ul
          style={{
            position: 'fixed', top: '56px', left: 0, right: 0,
            background: 'rgba(0,0,0,0.95)', padding: '1.5rem',
            listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem',
            zIndex: 99, borderBottom: '1px solid var(--dimmer)'
          }}
        >
          {NAVIGATION_LINKS.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                style={{ color: 'white', textDecoration: 'none', fontSize: '0.85rem' }}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
