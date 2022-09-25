import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login"
import Sigin from "../pages/Sigin"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sigin" element={<Sigin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
