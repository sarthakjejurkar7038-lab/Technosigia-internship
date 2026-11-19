import PageHeader from '../components/PageHeader'
import DestinationList from '../components/DestinationList'
import destinations from '../data/destinations.json'

function Destinations() {
  return (
    <>
      <PageHeader
        title="Explore Destinations"
        subtitle="Find your next favourite place to visit"
      />

      <section className="section">
        <div className="container">
          <DestinationList destinations={destinations} />
        </div>
      </section>
    </>
  )
}

export default Destinations