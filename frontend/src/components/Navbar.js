import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="container nav__container">
        <Link to="/" className="home__logo">
          <h1>
            <span>O</span>
            <span>L</span>
            <span>J</span>ournal
          </h1>
        </Link>

        <div>
          <div className="links">
            <Link to="/login" className="btn nav__link">
              Log in
            </Link>
            <Link to="/signup" className="btn nav__link">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
