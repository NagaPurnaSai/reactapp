import React, { useEffect, useState } from "react";
import axios from "axios";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        navigate("/admin-login");
        return;
      }

      const userEmail = data.user.email;

      if (!userEmail.endsWith("@cartrade.com")) {
        alert("Access denied. Only @cartrade.com users can access.");
        await supabase.auth.signOut();
        navigate("/admin-login");
        return;
      }

      loadOrders();
    };

    checkSession();
  }, [navigate]);

  const loadOrders = async () => {
    try {
      const res = await axios.get("https://node-react-backend.vercel.app/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Admin Panel - Orders</h2>
      {orders.map((order, index) => (
        <div key={index}>
          <h3>{order.name} ({order.phone})</h3>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Admin;
