import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./LogIn.css";

function LogIn() {
  return (
    <>
    <NavBar />
    <div className="log-in">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/signup" className="signup-link">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LogIn;
