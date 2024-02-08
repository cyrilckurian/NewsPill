import "./SignUp.css";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function SignUp() {

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
    <div className="signup-in">
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required onChange={(e) => setPassowrd(e.target.value)}></input>
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
