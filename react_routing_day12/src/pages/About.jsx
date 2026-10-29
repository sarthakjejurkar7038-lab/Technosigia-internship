const topics = [
  "BrowserRouter",
  "Routes and Route",
  "Link and NavLink",
  "Dynamic route parameters",
  "Basic 404 page",
];

function About() {
  return (
    <div className="container section">
      <div className="page-header">
        <h1>About</h1>
        <p>What this project is and what it demonstrates.</p>
      </div>

      <div className="two-col">
        <article className="card">
          <h3>The project</h3>
          <p>
            This is a multi-page React application that uses client-side routing.
            Moving between pages only swaps components, so the browser never reloads.
          </p>
        </article>

        <article className="card">
          <h3>Topics covered</h3>
          <ul className="check-list">
            {topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

export default About;