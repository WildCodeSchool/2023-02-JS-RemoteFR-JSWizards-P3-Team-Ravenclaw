import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import VideoPlayer from "./pages/VideoPlayer";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Connection from "./pages/Connection";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import User from "./pages/User";

// Layout
import DashLayout from "./layout/DashLayout";

// Custom Hooks
import useAuth from "./hooks/useAuth";

// Components
import Navbar from "./components/utilities/Navbar";

export default function App() {
  const { isLoggedIn, isAdmin, loadUserFromLocalStorage } = useAuth();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  return (
    <div className="min-h-screen bg-gradientDarkTheme">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<VideoPlayer />} />
          <Route path="plans" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          {isLoggedIn ? (
            <Route path="account" element={<DashLayout />}>
              {isAdmin ? (
                <>
                  <Route path="" element={<Admin dashboard />} />
                  <Route path="edit" element={<Admin edit />} />
                  <Route path="favorites" element={<Admin favorites />} />
                  <Route path="userList" element={<Admin userList />} />
                </>
              ) : (
                <Route path="user" element={<User />} />
              )}
            </Route>
          ) : (
            <Route>
              <Route path="account" element={<Connection />} />
            </Route>
          )}
        </Routes>
      </main>
    </div>
  );
}
