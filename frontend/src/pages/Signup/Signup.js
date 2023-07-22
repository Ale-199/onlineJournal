import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="bg">
      <div className="container login__container">
        <div className="signup__box">
          <form className="signup__form">
            <h2>Sign Up</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>User Name</span>
              <i></i>
            </div>
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
            <input type="submit" value="Sign Up" className="signUp__btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
