import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import LoginForm from "./Components/LoginForm/LoginForm";
import Register from "./Components/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { auth } from "./Components/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/hero" /> : <LoginForm />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
