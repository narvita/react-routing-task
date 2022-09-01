import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Users from "./components/users/users";
import Admins from "./components/admins/admins";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="users" element={<Users />} />
        <Route path="admins" element={<Admins />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
