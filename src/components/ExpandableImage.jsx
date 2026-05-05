import { useState } from 'react'
import './ExpandableImage.css'

export default function ExpandableImage({ src, alt }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div className="expandable-image" onClick={() => setExpanded(true)}>
        <img src={src} alt={alt} />
      </div>
      {expanded && (
        <div className="expandable-overlay" onClick={() => setExpanded(false)}>
          <img
            src={src}
            alt={alt}
            className="expanded-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
