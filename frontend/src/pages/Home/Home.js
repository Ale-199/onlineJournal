import "./Home.css";
import bg from "../../assets/landingPage.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg">
      <div className="container home__container">
        <img src={bg} alt="landingPage" className="home__img" />

        <div className="home__right">
          <h1>Welcome to the OLJournal</h1>
          <h3>Let's start to record your journal by using OLJournal.</h3>
          <h1>Enjoy Your Life!</h1>

          <div className="home__btn__container">
            <Link className="home__btn btn">Explore Journals</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
