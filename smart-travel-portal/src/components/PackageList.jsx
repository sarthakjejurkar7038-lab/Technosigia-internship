import PackageCard from './PackageCard'
import '../styles/cards.css'

function PackageList({ packages }) {
  if (packages.length === 0) {
    return <p className="empty-text">No packages found.</p>
  }

  return (
    <div className="card-list">
      {packages.map((item) => (
        <PackageCard
          key={item.id}
          title={item.title}
          location={item.location}
          duration={item.duration}
          price={item.price}
          highlights={item.highlights}
          color={item.color}
          popular={item.popular}
        />
      ))}
    </div>
  )
}

export default PackageList