import './SectionBlock.css'

export default function SectionBlock({ title, id, children }) {
  return (
    <div className="section-block" id={id}>
      <h2 className="section-block-title">{title}</h2>
      <div className="section-block-content">
        {children}
      </div>
    </div>
  )
}
