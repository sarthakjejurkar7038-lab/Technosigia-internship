import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/cards.css'

function DestinationCard({ id, name, image, location, description, price, color }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="destination-card">
      <div className="card-image" style={{ background: color }}>
        {!imageFailed && (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
        {imageFailed && <span className="card-fallback">{name}</span>}
      </div>

      <div className="card-body">
        <p className="card-location">{location}</p>
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>

        <div className="card-footer">
          <div className="card-price">
            <span>Estimated price</span>
            <strong>&#8377;{price.toLocaleString('en-IN')}</strong>
          </div>
          <Link to={`/destinations/${id}`} className="btn btn-primary btn-small">
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default DestinationCard