import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container section">
      <div className="not-found">
        <p className="code">404</p>
        <h1>Page not found</h1>
        <p className="muted">The page you are looking for does not exist or was moved.</p>
        <Link to="/" className="btn btn-primary">Go back Home</Link>
      </div>
    </div>
  );
}

export default NotFound;