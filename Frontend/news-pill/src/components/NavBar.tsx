import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="navbar">
        <Link className="title link" to="/">NEWSPILL</Link>

        <ul className="links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>

        <Link to="/login" className="action_btn link">
          Login / Signup
        </Link>
      </div>
    </header>
  );
}
export default NavBar;
