import PageHeader from '../components/PageHeader'
import PackageList from '../components/PackageList'
import packages from '../data/packages.json'

function Packages() {
  return (
    <>
      <PageHeader
        title="Tour Packages"
        subtitle="Handpicked itineraries for every kind of traveller"
      />

      <section className="section">
        <div className="container">
          <PackageList packages={packages} />
        </div>
      </section>
    </>
  )
}

export default Packages