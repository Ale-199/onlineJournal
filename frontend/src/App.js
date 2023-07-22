import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Journal from "./pages/Journal/Journal";
import CreateJournal from "./pages/CreateJournal/CreateJournal";
import UpdateJournal from "./pages/CreateJournal/UpdateJournal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/createJournal" element={<CreateJournal />} />
          <Route path="/updateJournal" element={<UpdateJournal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
