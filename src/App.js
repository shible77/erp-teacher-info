import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Classes from "./pages/Classes";
import Evaluations from "./pages/Evaluations";
import Leaves from "./pages/Leaves";
import Meetings from "./pages/Meetings";
import Editorials from "./pages/Editorials";
import Chat from "./pages/Chat";
import Upload from "./pages/file_page/Upload";
import Download from "./pages/file_page/Download";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/evaluations" element={<Evaluations />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/editorials" element={<Editorials />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/download" element={<Download />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
