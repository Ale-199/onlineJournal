import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(userName, email, password);
  };

  return (
    <div className="bg">
      <div className="container login__container">
        <div className="signup__box">
          <form className="signup__form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="inputBox">
              <input
                type="text"
                required="required"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
              <span>User Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="text"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span>Password</span>
              <i></i>
            </div>
            <button className="signUp__btn" disabled={isLoading}>
              Sign Up
            </button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
