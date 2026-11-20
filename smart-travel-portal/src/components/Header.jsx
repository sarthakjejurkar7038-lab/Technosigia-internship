import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/header.css'

function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Wander<span>Lust</span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/destinations" onClick={closeMenu}>Destinations</NavLink>
          <NavLink to="/packages" onClick={closeMenu}>Packages</NavLink>
          <NavLink to="/favorites" onClick={closeMenu}>Favorites</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header