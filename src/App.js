import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Classes from "./pages/Classes";
import Evaluations from "./pages/Evaluations";
function App() {
  const token = sessionStorage.getItem("token") || "22cbe6cd-7ff8-11ef-a4ca-3c5282764ceb";
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard token={token}/>} />
          <Route path="/courses" element={<Courses token={token} />} />
          <Route path="/classes" element={<Classes token={token} />} />
          <Route path="/evaluations" element={<Evaluations token={token} />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
