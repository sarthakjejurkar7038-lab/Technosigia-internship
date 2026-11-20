import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import '../styles/pages.css'

function Favorites() {
  return (
    <>
      <PageHeader
        title="My Favorites"
        subtitle="Destinations you have saved for later"
      />

      <section className="section">
        <div className="container empty-state">
          <h3>No favorites yet</h3>
          <p>
            Saving favorites will be added soon. For now, explore our
            destinations.
          </p>
          <Link to="/destinations" className="btn btn-primary">
            Explore Destinations
          </Link>
        </div>
      </section>
    </>
  )
}

export default Favorites