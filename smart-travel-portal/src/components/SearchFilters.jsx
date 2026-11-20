import '../styles/filters.css'

function SearchFilters({ filters, onChange, onClear, categories, regions }) {
  return (
    <div className="filters">
      <div className="filter-group filter-search">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search by name or location..."
          value={filters.search}
          onChange={onChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={onChange}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="region">Region</label>
        <select
          id="region"
          name="region"
          value={filters.region}
          onChange={onChange}
        >
          {regions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="budget">Budget</label>
        <select
          id="budget"
          name="budget"
          value={filters.budget}
          onChange={onChange}
        >
          <option value="all">Any budget</option>
          <option value="10000">Up to &#8377;10,000</option>
          <option value="15000">Up to &#8377;15,000</option>
          <option value="20000">Up to &#8377;20,000</option>
          <option value="25000">Up to &#8377;25,000</option>
        </select>
      </div>

      <button type="button" className="clear-btn" onClick={onClear}>
        Clear
      </button>
    </div>
  )
}

export default SearchFilters