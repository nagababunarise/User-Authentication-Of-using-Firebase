import React from "react";
import "./Hero.css";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const Hero = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      toast.success("User logOut Successfully!");
    } catch (error) {
      console.log("error logging out:", error.message);
    }
  };
  return (
    <div className="hero">
      <h1>Welcome to Hero Component</h1>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Hero;
