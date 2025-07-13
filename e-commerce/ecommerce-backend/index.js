import express from 'express'
import products from './project/routes/products.js'
import submitCart from './project/routes/submitCart.js'
import pool from './project/routes/db.js';
import auth from './project/routes/auth.js'

const app = express()
app.use(express.json());
// eslint-disable-next-line no-undef
const PORT = (typeof process !== 'undefined' && process.env.PORT) ? process.env.PORT : 3000

app.use('/api', products)
app.use('/api', submitCart)
app.use('/api',auth)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('DROP TABLE products');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
