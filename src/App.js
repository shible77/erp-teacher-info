import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Leaves from "./pages/Leaves";
import FileManager from "./pages/FileManager";
import Meetings from "./pages/Meetings";
import Editorials from "./pages/Editorials";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import Upload from "./pages/Files/Upload";
import Download from "./pages/Files/Download";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/editorials" element={<Editorials />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/download" element={<Download />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
