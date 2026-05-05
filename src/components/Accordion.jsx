import { useState } from 'react'
import './Accordion.css'

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="accordion">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${open ? 'open' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  )
}
