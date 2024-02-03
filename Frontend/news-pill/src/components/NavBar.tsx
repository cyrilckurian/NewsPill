import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsPill
        </Link>
        <Link to="/signup">
        <button type="button" className="btn btn-primary">
          Log In / Sign Up
        </button>
        </Link>
      </div>
    </nav>
  );
}
