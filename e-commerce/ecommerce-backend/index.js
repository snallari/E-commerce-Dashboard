import express, { urlencoded } from 'express'
import products from './project/routes/products.js'
import submitCart from './project/routes/submitCart.js'
import pool from './project/routes/db.js';
import auth from './project/routes/auth.js'
import jwtsign from './project/middleware/jwtsign.js';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet'
const app = express()
// for parsing form data
app.use(urlencoded({ extended: true }));
//When we  pass from the client side, we send  the data in json format
app.use(express.json());
// eslint-disable-next-line no-undef
const PORT = (typeof process !== 'undefined' && process.env.PORT) ? process.env.PORT : 3000

app.use(helmet())
app.use(rateLimit())
app.use('/api',auth)
app.use('/api', jwtsign, products)
app.use('/api', jwtsign,submitCart)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('select now()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
