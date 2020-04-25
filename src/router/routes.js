import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logon from "../pages/Logon";
import Register from "../pages/Register";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logon />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
