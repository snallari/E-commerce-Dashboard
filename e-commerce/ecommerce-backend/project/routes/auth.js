import express from 'express';
import pool from './db.js'
import { registerUser, loginUser} from '../controllers/userController.js';
const router = express.Router()


router.post('/registerUser', registerUser)

router.post("/loginUser", loginUser)

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