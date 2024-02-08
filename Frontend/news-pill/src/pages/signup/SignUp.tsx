import "./SignUp.css";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
    <NavBar />
    <div className="signup-in">
      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>

          <div className="register-link">
            <p>
              Have an account? <Link to="/login" className="login-link">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignUp;
