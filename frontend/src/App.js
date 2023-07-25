import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blog from "./pages/Blog/Blog";
import CreateBlog from "./pages/CreateJournal/CreateBlog";
import UpdateBlog from "./pages/CreateJournal/UpdateBlog";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/updateBlog" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
