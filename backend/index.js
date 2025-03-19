const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

console.log(supabase);

// Customer login
app.post('/login', async (req, res) => {
    const { name, phone } = req.body;
    const { data, error } = await supabase.from('customers').upsert([{ name, phone }]);

    if (error) return res.status(400).json(error);
    res.json({ message: 'Login successful', user: data });
});

// Fetch juices
app.get('/juices', async (req, res) => {
    const { data, error } = await supabase.from('juices').select('*');
    if (error) return res.status(400).json(error);
    res.json(data);
});

// Place order
app.post('/order', async (req, res) => {
    const { name, phone, items } = req.body;
    const { data, error } = await supabase.from('orders').insert([{ name, phone, items }]);

    if (error) return res.status(400).json(error);
    res.json({ message: 'Order placed successfully', order: data });
});

// Admin - View orders
app.get('/orders', async (req, res) => {
    const { data, error } = await supabase.from('orders').select('*');
    if (error) return res.status(400).json(error);
    res.json(data);
});

app.listen(5000, () => console.log('Server running on port 5000'));

