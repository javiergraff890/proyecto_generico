import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Inicio', id: 'introduccion' },
    { label: 'Backend', id: 'backend' },
    { label: 'Frontend', id: 'frontend' },
    { label: 'Detalles', id: 'muestra' },
    { label: 'Videos', id: 'videos' },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="navbar-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="navbar-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`navbar-toggle-line ${open ? 'open' : ''}`} />
            <span className={`navbar-toggle-line ${open ? 'open' : ''}`} />
            <span className={`navbar-toggle-line ${open ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="navbar-mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
