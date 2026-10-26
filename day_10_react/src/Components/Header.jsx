function Header({ brand, links, cta }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="brand">
          <span className="logo">{brand[0]}</span>
          {brand}
        </a>
        <nav className="nav">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-small">{cta}</a>
      </div>
    </header>
  );
}

export default Header;