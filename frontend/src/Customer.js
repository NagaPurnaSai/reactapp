import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Customer() {
  const { state } = useLocation();
  const { name, phone } = state || {};
  const [juices, setJuices] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://node-react-backend.vercel.app/juices")
      .then((res) => setJuices(res.data))
      .catch((err) => console.error("Error fetching juices", err));
  }, []);

  const addToCart = (juice) => setCart([...cart, juice]);

  const placeOrder = async () => {
    await axios.post("https://node-react-backend.vercel.app/order", { name, phone, items: cart });
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h2>Welcome, {name}</h2>
      <h3>Juices Menu</h3>
      {juices.map((juice) => (
        <div key={juice.id}>
          <p>{juice.name} - ${juice.price}</p>
          <button onClick={() => addToCart(juice)}>Add</button>
        </div>
      ))}
      <button onClick={placeOrder}>Proceed</button>
    </div>
  );
}

export default Customer;

