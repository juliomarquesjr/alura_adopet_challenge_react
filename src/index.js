import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Login from "./pages/Login";
import Sigin from "./pages/Sigin";

import "./reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sigin" element={Sigin} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);