import express from 'express';
import bcrypt from "bcrypt";
import pool from './db.js'
const router = express.Router()


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

router.post("/loginUser", async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length > 0) {
            const isMatch = await bcrypt.compare(password, result.rows[0].password);
            if (isMatch) {
                res.status(200).json({ message: "Login Successful", accessToken: "token" });
            } else {
                res.status(401).json({ message: "Not Authorized" });
            }
        } else {
            res.status(401).json({ message: "Not Authorized" });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/getUsers', async (req, res) => {
    try {
        console.log("rq", req)
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

export default router