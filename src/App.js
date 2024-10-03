import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Committees from "./pages/ExamCommittee";
import Meetings from "./pages/Meeting";
import Cookies from "js-cookie";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  // Function to handle login and save the token in localStorage
  const handleLogin = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("authToken", token); // Store token in localStorage
  };

  // Check if token exists in localStorage on initial load
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true); // If token exists, assume user is logged in
    }
  }, []); // Empty dependency array ensures this only runs once on mount

  // Handle logout and clear the token
  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("authToken"); // Clear token from localStorage
  };

  return (
    <Router>
      {isLoggedIn === false && (
        <Routes>
          <Route
            path="/"
            element={<Login setToken={handleLogin} setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      )}
      {isLoggedIn === true && (
        <SideBar setIsLoggedIn={handleLogout}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard token={token} />} />
            <Route path="/courses" element={<Courses token={token} />} />
            <Route path="/committee" element={<Committees token={token} />} />
            <Route path="/meetings" element={<Meetings token={token} />} />
            <Route path="/profile" element={<Profile token={token} />} />
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </SideBar>
      )}
    </Router>
  );
}

export default App;
