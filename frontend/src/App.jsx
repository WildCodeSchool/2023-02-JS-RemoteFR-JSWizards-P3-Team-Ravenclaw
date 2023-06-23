import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/utilities/Navbar";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Connection from "./pages/Connection";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import User from "./pages/User";

// Layout
import VideoPlayer from "./pages/VideoPlayer";

// import RowStatic from "./components/dashboard/RowStatic";

// Layout
import DashLayout from "./layout/DashLayout";

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
