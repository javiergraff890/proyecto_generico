import './TechStack.css'

export default function TechStack({ technologies }) {
  return (
    <div className="tech-stack">
      {technologies.map((tech) => (
        <span key={tech} className="tech-badge">
          {tech}
        </span>
      ))}
    </div>
  )
}
