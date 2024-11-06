import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
        });
      }
      console.log(user);
      toast.success("User register Successfully", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button>Register</button>
        </div>
        <p>
          You have already Register{`>`}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
