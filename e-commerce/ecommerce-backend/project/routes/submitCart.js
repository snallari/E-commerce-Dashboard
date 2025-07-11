import express from 'express';
const router = express.Router();
import pool from './db.js'

router.get('/submitCart',async (req,res)=>{
    const {product, price, category}=req.body
    try{
         const result = await pool.query('INSERT INTO products (product, price, category) VALUES ($1, $2, $3) RETURNING *', [product, price, category]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

export default router