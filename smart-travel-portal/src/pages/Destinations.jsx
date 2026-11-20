import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SearchFilters from '../components/SearchFilters'
import DestinationList from '../components/DestinationList'
import destinations from '../data/destinations.json'

const defaultFilters = {
  search: '',
  category: 'All',
  region: 'All',
  budget: 'all',
}

function Destinations() {
  const [filters, setFilters] = useState(defaultFilters)

  // Build dropdown options from the data
  const categories = ['All', ...new Set(destinations.map((d) => d.category))]
  const regions = ['All', ...new Set(destinations.map((d) => d.region))]

  // Runs when the user types or selects something
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const clearFilters = () => setFilters(defaultFilters)

  // Keep only the destinations that match ALL filters
  const text = filters.search.trim().toLowerCase()

  const filtered = destinations.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(text) ||
      place.location.toLowerCase().includes(text)

    const matchesCategory =
      filters.category === 'All' || place.category === filters.category

    const matchesRegion =
      filters.region === 'All' || place.region === filters.region

    const matchesBudget =
      filters.budget === 'all' || place.price <= Number(filters.budget)

    return matchesSearch && matchesCategory && matchesRegion && matchesBudget
  })

  return (
    <>
      <PageHeader
        title="Explore Destinations"
        subtitle="Find your next favourite place to visit"
      />

      <section className="section">
        <div className="container">
          <SearchFilters
            filters={filters}
            onChange={handleChange}
            onClear={clearFilters}
            categories={categories}
            regions={regions}
          />

          <p className="result-count">
            Showing {filtered.length} of {destinations.length} destinations
          </p>

          {filtered.length > 0 ? (
            <DestinationList destinations={filtered} />
          ) : (
            <div className="no-results">
              <h3>No destinations found</h3>
              <p>Try a different name or location, or change the filters.</p>
              <button className="btn btn-primary" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Destinations