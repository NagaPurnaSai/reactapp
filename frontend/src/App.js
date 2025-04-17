import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Customer from "./Customer";
import AdminLogin from "./AdminLogin";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin-login" element={<AdminLogin />} /> 
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

