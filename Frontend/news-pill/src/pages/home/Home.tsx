import Button from "react-bootstrap/Button";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <div className="two-column-layout">
          <div className="left-column">
            <h1>NewsPill</h1>
            <h2>An AI News Aggregator</h2>
          </div>
          <div className="right-column">
            <p>
              Introducing NewsPill: Your shortcut to staying informed! Cut
              through the clutter of online news with our AI-powered summaries.
              Say goodbye to information overload and hello to effortless,
              personalized updates. Join us and transform your news routine
              today!
            </p>
            <Link to="/signup">
              <Button variant="outline-primary">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
