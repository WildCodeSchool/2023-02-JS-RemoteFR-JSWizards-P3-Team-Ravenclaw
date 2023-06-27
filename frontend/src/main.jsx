// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import App from "./App";

// Style
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <ToastContainer />
  </Router>
);
