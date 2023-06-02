import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

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
import RootLayout from "./layout/RootLayout";
import DashLayout from "./layout/DashLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index path="/Home" element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Connection" element={<Connection />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/" element={<DashLayout />}>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/User" element={<User />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
