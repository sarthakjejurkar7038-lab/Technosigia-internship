import { Link, useParams } from 'react-router-dom'
import destinations from '../data/destinations.json'
import packages from '../data/packages.json'
import PackageList from '../components/PackageList'
import NotFound from './NotFound'
import '../styles/pages.css'

function DestinationDetails() {
  const { id } = useParams() // id is text, like "3"

  const place = destinations.find((item) => item.id === Number(id))

  // If there is no destination with this id, show a message
  if (!place) {
    return (
      <NotFound
        title="Destination not found"
        message="We could not find a destination with this link."
      />
    )
  }

  // Packages that mention this destination (by title or location)
  const keyword = place.name.split(' ')[0].toLowerCase()
  const related = packages.filter((pkg) =>
    (pkg.title + ' ' + pkg.location).toLowerCase().includes(keyword)
  )

  return (
    <>
      <section className="details-hero" style={{ background: place.color }}>
        <img
          src={place.image}
          alt={place.name}
          onError={(e) => (e.target.style.display = 'none')}
        />
        <div className="details-overlay">
          <div className="container">
            <span className="details-badge">{place.category}</span>
            <h1>{place.name}</h1>
            <p>{place.location}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container details-layout">
          <div className="details-main">
            <Link to="/destinations" className="back-link">
              &larr; Back to Destinations
            </Link>
            <h2>About {place.name}</h2>
            <p>{place.description}</p>
            <p>
              Interested in visiting {place.name}? Send us an inquiry and our
              team will help you plan the trip.
            </p>
          </div>

          <aside className="details-card">
            <p className="details-price-label">Estimated price</p>
            <p className="details-price">
              &#8377;{place.price.toLocaleString('en-IN')}
            </p>
            <p className="details-note">per person (sample estimate)</p>

            <ul className="facts">
              <li><span>Category</span> <strong>{place.category}</strong></li>
              <li><span>Region</span> <strong>{place.region}</strong></li>
              <li><span>Location</span> <strong>{place.location}</strong></li>
            </ul>

            <Link to="/contact" className="btn btn-primary">
              Send an Inquiry
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section related">
          <div className="container">
            <h2 className="section-title">Packages including {place.name}</h2>
            <p className="section-subtitle">Ready-made trips you can book</p>
            <PackageList packages={related} />
          </div>
        </section>
      )}
    </>
  )
}

export default DestinationDetails