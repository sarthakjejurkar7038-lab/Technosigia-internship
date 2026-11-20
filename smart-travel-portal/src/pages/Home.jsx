import { Link } from 'react-router-dom'
import destinations from '../data/destinations.json'
import tajMahal from '../assets/taj-mahal.jpg'
import '../styles/home.css'

function Home() {
  const featured = destinations.slice(0, 4)

  const overlay =
    'linear-gradient(to top, rgba(15,42,67,0.92), ' +
    'rgba(15,42,67,0.35) 55%, rgba(15,42,67,0.1))'
  const heroStyle = { backgroundImage: `${overlay}, url(${tajMahal})` }

  return (
    <>
      {/* HERO BANNER */}
      <section className="hero" style={heroStyle}>
        <div className="container">
          <p className="hero-tag">Explore the world with us</p>
          <h1>Discover Incredible Destinations</h1>
          <p className="hero-text">
            Browse handpicked places, compare tour packages and plan your
            perfect trip, all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn btn-primary">
              Explore Destinations
            </Link>
            <Link to="/packages" className="btn btn-outline">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Places our travellers love the most
          </p>
          <div className="card-grid">
            {featured.map((place) => (
                        <Link
                to={`/destinations/${place.id}`}
                className="dest-card"
                key={place.id}
                style={{ background: place.color }}
              >
                <div className="dest-info">
                  <h3>{place.name}</h3>
                  <p>{place.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Travel planning made simple and stress-free
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-number">1</div>
              <h3>Handpicked Destinations</h3>
              <p>Every place is carefully selected for quality and experience.</p>
            </div>
            <div className="feature">
              <div className="feature-number">2</div>
              <h3>Best Value Packages</h3>
              <p>Affordable tour packages for every budget and travel style.</p>
            </div>
            <div className="feature">
              <div className="feature-number">3</div>
              <h3>Easy Trip Planning</h3>
              <p>Save favorites and send an inquiry in just a few clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Ready for your next adventure?</h2>
        <p>Tell us where you want to go and we will help you plan it.</p>
        <Link to="/contact" className="btn btn-primary">
          Send an Inquiry
        </Link>
      </section>
    </>
  )
}

export default Home