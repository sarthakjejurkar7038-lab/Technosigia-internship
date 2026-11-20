import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import destinations from '../data/destinations.json'
import packages from '../data/packages.json'
import '../styles/pages.css'

const values = [
  {
    title: 'Handpicked Experiences',
    text: 'Every place and package is selected for quality, safety and value.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Clear estimated prices, so you can plan your budget with confidence.',
  },
  {
    title: 'Friendly Local Experts',
    text: 'Our team knows these places well and helps you shape the perfect trip.',
  },
]

function About() {
  const categoryCount = new Set(destinations.map((d) => d.category)).size

  const stats = [
    { number: destinations.length, label: 'Destinations' },
    { number: categoryCount, label: 'Travel Categories' },
    { number: packages.length, label: 'Tour Packages' },
    { number: '24/7', label: 'Travel Support' },
  ]

  return (
    <>
      <PageHeader
        title="About WanderLust"
        subtitle="Making travel planning simple, clear and enjoyable"
      />

      <section className="section">
        <div className="container about-intro">
          <h2>Our Story</h2>
          <p>
            WanderLust started with a simple idea: planning a trip should be
            as exciting as the trip itself. We bring destinations, tour
            packages and travel inquiries together in one clean, easy place.
          </p>
          <p>
            Whether you dream of royal palaces, quiet backwaters, snowy
            mountains or sunny beaches, we help you find the right place and
            the right plan.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label}>
              <div className="stat-number">{item.number}</div>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-subtitle">
            The values behind every trip we plan
          </p>

          <div className="values-grid">
            {values.map((item) => (
              <div className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <Link to="/contact" className="btn btn-primary">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About