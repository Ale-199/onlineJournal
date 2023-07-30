import "./Home.css";
import bg from "../../assets/landingPage.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className="bg">
      <div className="container home__container">
        <img src={bg} alt="landingPage" className="home__img" />

        <div className="home__right">
          <h1>Welcome to the OLJournal</h1>
          <h3>Let's start to record your journal by using OLJournal.</h3>
          <h1>Enjoy Your Life!</h1>

          <div className="home__btn__container">
            <Link className="home__btn btn" to="/isPublicDashboard">
              Explore Public Journals
            </Link>
          </div>
          {user && (
            <div className="home__btn__container dashboar__btn">
              <Link className="home__btn btn" to="/dashboard">
                Go To Your Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
