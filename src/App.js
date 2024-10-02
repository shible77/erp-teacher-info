import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Committees from "./pages/ExamCommittee";
import Meetings from "./pages/Meeting";
import Cookies from 'js-cookie';
import Login from "./pages/Login";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
function App() {
  // Cookies.set('csecu_user', '9853cf03-80ad-11ef-9269-3c5282764ceb', { expires: 7 })
  // const token = Cookies.get('csecu_user')
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  
  return (
    <Router>
     {isLoggedIn===false && <Routes>
        <Route path="/" element={<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes> }
      {isLoggedIn===true && <SideBar setIsLoggedIn={setIsLoggedIn}>
        <Routes>
        <Route path="/dashboard" element={<Dashboard token={token}/>} />
        <Route path="/courses" element={<Courses token={token} />} />
        <Route path="/committee" element={<Committees token={token} />} />
          <Route path="/meetings" element={<Meetings token={token} />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>}
    </Router>
  );
}

export default App;
