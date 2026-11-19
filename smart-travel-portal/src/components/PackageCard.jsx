import { Link } from 'react-router-dom'
import '../styles/cards.css'

function PackageCard({ title, location, duration, price, highlights, color, popular }) {
  return (
    <article className="package-card">
      <div className="package-top" style={{ background: color }}>
        {popular && <span className="badge">Most Popular</span>}
        <h3>{title}</h3>
        <p>{location}</p>
      </div>

      <div className="package-body">
        <p className="package-duration">{duration}</p>

        <ul className="package-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="package-footer">
          <div className="card-price">
            <span>Starting from</span>
            <strong>&#8377;{price.toLocaleString('en-IN')}</strong>
          </div>
          <Link to="/contact" className="btn btn-primary btn-small">
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PackageCard