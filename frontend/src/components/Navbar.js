import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

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

        {!user && (
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
        )}

        {user && (
          <div className="logOut__btn">
            <p>Hello, {user.userName.toUpperCase()}</p>
            <button onClick={handleClick} className="btn nav__link">
              Log Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
