import './VideoEmbed.css'

export default function VideoEmbed({ videoId, title }) {
  return (
    <div className="video-embed">
      <h3 className="video-title">{title}</h3>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  )
}
