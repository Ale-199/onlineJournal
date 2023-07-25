import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogIn";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="bg">
      <div className="container login__container">
        <div className="box">
          <form className="login__form" onSubmit={handleSubmit}>
            <h2>Log In</h2>
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
            <div>
              Don't have an account?<Link to="/signup">Sign Up Here</Link>
            </div>
            <button type="submit" value="login" className="login__btn">
              Log In
            </button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
