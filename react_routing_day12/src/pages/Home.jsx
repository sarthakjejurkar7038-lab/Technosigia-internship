import { Link } from "react-router-dom";

const features = [
  { icon: "\u26A1", title: "No page reload", text: "Link and NavLink change the screen instantly without reloading the browser." },
  { icon: "\uD83D\uDD17", title: "Dynamic routes", text: "One route like /students/:id shows a different page for every student." },
  { icon: "\uD83D\uDEE1\uFE0F", title: "404 handling", text: "A catch-all route shows a friendly page when the URL does not exist." },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="pill">Day 12 &middot; React Routing</span>
          <h1>Build multi-page apps with <span className="accent">React Router</span></h1>
          <p>
            A clean demo of client-side routing: smooth navigation, active links,
            dynamic pages and a custom 404 page.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="btn btn-primary">View Students</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">What this app shows</h2>
        <div className="grid-3">
          {features.map((f) => (
            <article className="card feature" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;