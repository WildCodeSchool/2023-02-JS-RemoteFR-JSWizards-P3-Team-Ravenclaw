import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Connection from "./pages/Connection";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import User from "./pages/User";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashLayout from "./layout/DashLayout";

// Components
import Player from "./components/video/Player";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="videos/:id" element={<Player />} />
          <Route path="plans" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="connection" element={<Connection />} />
          <Route path="*" element={<NotFound />} />
          <Route path="account" element={<DashLayout />}>
            <Route path="admin" element={<Admin />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
