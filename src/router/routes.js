import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logon from "../pages/Logon";
import Register from "../pages/Register";
import Profiles from "../pages/Profile";
import NewIncident from "../pages/NewIncident";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/incident/new" element={<NewIncident />} />

        <Route path="/*" element={<h1 className="button">404</h1>} />
      </Routes>
    </Router>
  );
}
