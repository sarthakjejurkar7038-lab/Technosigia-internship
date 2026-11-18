import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-logo">Wander<span>Lust</span></h3>
          <p>
            Discover incredible destinations and handpicked tour packages
            for your next unforgettable journey.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>info@wanderlust.com</li>
            <li>+91 98765 43210</li>
            <li>123 Travel Street, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WanderLust. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer