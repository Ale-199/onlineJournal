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
            <button className="btn nav__link">Log in</button>
            <button className="btn nav__link">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
