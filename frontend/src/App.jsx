import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
import LoginContext from "./contexts/LoginContext";

// Components
import Navbar from "./components/utilities/Navbar";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const accountRender = useMemo(() => ({ setLoggedIn }), []);

  return (
    <div className="min-h-screen bg-gradientDarkTheme">
      <LoginContext.Provider value={accountRender}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="videos" element={<Videos />} />
            <Route path="videos/:id" element={<VideoPlayer />} />
            <Route path="plans" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            {loggedIn ? (
              <Route path="account" element={<DashLayout />}>
                <Route path="" element={<Admin />} />
                <Route path="edit" element={<Admin edit />} />
                <Route path="user" element={<User />} />
              </Route>
            ) : (
              <Route>
                <Route path="account" element={<Connection />} />
              </Route>
            )}
          </Routes>
        </main>
      </LoginContext.Provider>
    </div>
  );
}
