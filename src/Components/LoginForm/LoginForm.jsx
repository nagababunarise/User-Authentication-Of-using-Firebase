import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./LoginForm.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/hero";
      toast.success("User logged in Successfully", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          required
        />
        <button className="button">Login</button>

        <p className="para">
          You haven't register{`>`}{" "}
          <Link to="/register">
            <span className="register">Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
