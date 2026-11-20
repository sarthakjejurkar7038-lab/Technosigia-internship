import { Link } from 'react-router-dom'
import '../styles/pages.css'

function NotFound({
  title = 'Page not found',
  message = 'Sorry, the page you are looking for does not exist or has moved.',
}) {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-code">404</div>
        <h1>{title}</h1>
        <p>{message}</p>
        <div className="not-found-buttons">
          <Link to="/" className="btn btn-primary">Go to Home</Link>
          <Link to="/destinations" className="btn btn-dark">
            Browse Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound