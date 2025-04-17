// AdminLogin.js
import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      const userEmail = data.user.email;
      if (userEmail.endsWith("@cartrade.com")) {
        navigate("/admin");
      } else {
        alert("Access denied. Only @cartrade.com users allowed.");
        await supabase.auth.signOut();
      }
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        placeholder="Admin Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
