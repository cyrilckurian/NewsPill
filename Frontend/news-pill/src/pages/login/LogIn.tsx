import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "./LogIn.css";

function LogIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassowrd] = useState<string>('');

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('https://localhost:3000/auth/login', { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <div className="log-in">
        <div className="wrapper">
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassowrd(e.target.value)}
              ></input>
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
                Don't have an account?{" "}
                <Link to="/signup" className="signup-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
