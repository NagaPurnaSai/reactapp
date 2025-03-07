import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://your-vercel-api.vercel.app/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders", err));
  }, []);

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

