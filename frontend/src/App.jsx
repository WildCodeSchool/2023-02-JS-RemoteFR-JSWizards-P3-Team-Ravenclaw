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

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Plans" element={<Pricing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Account" element={<Connection />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<DashLayout />}>
            <Route path="/Admin" element={<Admin />} />
            <Route path="/User" element={<User />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
