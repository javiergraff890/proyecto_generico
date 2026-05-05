import './TechList.css'

export default function TechList({ items }) {
  return (
    <ul className="tech-list">
      {items.map((item) => (
        <li key={item.name} className="tech-list-item">
          <span className="tech-list-name">{item.name}</span>
          <span className="tech-list-desc">{item.description}</span>
        </li>
      ))}
    </ul>
  )
}
