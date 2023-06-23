// Packages
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import DashLayout from "./layout/DashLayout";

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

// Components
import Navbar from "./components/utilities/Navbar";

export default function App() {
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
          <Route path="connection" element={<Connection />} />
          <Route path="*" element={<NotFound />} />
          <Route path="account" element={<DashLayout />}>
            <Route path="dashboard" element={<Admin dashboard />} />
            <Route path="edit" element={<Admin edit />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
