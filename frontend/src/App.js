import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blog from "./pages/Blog/Blog";
import CreateBlog from "./pages/CreateJournal/CreateBlog";
import UpdateBlog from "./pages/CreateJournal/UpdateBlog";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/updateBlog" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
