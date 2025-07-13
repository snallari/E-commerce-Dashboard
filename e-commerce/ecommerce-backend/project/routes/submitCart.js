import express from 'express';
const router = express.Router();
import pool from './db.js'

router.post('/submitCart',async (req,res)=>{
       const products = req.body; // Expecting { products: [ { name, price, category }, ... ] }
    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'products must be an array' });
    }
    try {
        const inserted = [];
        for (const item of products) {
            const { product, price} = item;
            const result = await pool.query(
                'INSERT INTO cart (product, price) VALUES ($1, $2) RETURNING *',[product, price]);
            inserted.push(result.rows[0]);
        }
        res.status(201).json(inserted);
    } catch (error) {
        console.error('Error adding products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


export default router