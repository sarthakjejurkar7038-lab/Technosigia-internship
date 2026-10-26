function Footer({ name, tagline, year, links }) {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div>
          <h3>{name}</h3>
          <p>{tagline}</p>
        </div>
        <div className="footer-links">
          {links.map(({ label, url }) => (
            <a key={label} href={url}>{label}</a>
          ))}
        </div>
      </div>
      <p className="copy">&copy; {year} {name}. Built with React + Vite.</p>
    </footer>
  );
}

export default Footer;