import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Committees from "./pages/ExamCommittee";
import Meetings from "./pages/Meeting";
function App() {
  const token = "9853cf03-80ad-11ef-9269-3c5282764ceb";
  return (
    <Router>
      <SideBar>
        <Routes>
        <Route path="/" element={<Dashboard token={token}/>} />
        <Route path="/courses" element={<Courses token={token} />} />
        <Route path="/committee" element={<Committees token={token} />} />
          <Route path="/meetings" element={<Meetings token={token} />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
