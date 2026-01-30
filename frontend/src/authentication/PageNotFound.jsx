import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="home-btn">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
