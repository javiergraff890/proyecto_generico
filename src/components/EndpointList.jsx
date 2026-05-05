import './EndpointList.css'

export default function EndpointList({ endpoints }) {
  return (
    <div className="endpoint-list">
      {endpoints.map((ep, i) => (
        <div key={i} className="endpoint-item">
          <div className="endpoint-header">
            <span className={`endpoint-method ${ep.method.toLowerCase()}`}>
              {ep.method}
            </span>
            <code className="endpoint-path">{ep.path}</code>
          </div>
          <p className="endpoint-summary">{ep.summary}</p>
          {ep.details && (
            <ul className="endpoint-details">
              {ep.details.map((detail, j) => (
                <li key={j}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
