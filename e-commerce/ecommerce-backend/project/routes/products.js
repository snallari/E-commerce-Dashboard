import express from 'express';
import pool from './db.js'
const router = express.Router();

router.get('/getProducts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/addProduct', async (req, res) => {
    try {
        console.log("rq", req)
        const { product, price, category } = req.body
        console.log("product", product)
        const result = await pool.query('INSERT INTO products (product, price, category) VALUES ($1, $2, $3) RETURNING *', [product, price, category]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

export default router