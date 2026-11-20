import DestinationCard from './DestinationCard'
import '../styles/cards.css'

function DestinationList({ destinations }) {
  if (destinations.length === 0) {
    return <p className="empty-text">No destinations found.</p>
  }

  return (
    <div className="card-list">
      {destinations.map((item) => (
        <DestinationCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          location={item.location}
          description={item.description}
          price={item.price}
          color={item.color}
        />
      ))}
    </div>
  )
}

export default DestinationList