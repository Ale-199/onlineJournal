import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="bg">
      <div className="container login__container">
        <div className="box">
          <form className="login__form">
            <h2>Log In</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div>
              Don't have an account?<Link to="/signup">Sign Up Here</Link>
            </div>
            <input type="submit" value="login" className="login__btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
