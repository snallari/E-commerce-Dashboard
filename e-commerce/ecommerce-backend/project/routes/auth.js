import express from 'express';
import bcrypt from "bcrypt";
import pool from './db.js'
const router=express.Router()


router.post('/registerUser', async (req, res) => {
    try {
        console.log("rq", req)
        const { name, email, password } = req.body
        console.log("user", name)
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


export default router