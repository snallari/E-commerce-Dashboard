import pool from '../routes/db.js'

export const getCart = async (req, res) => {
    const products = req.body; // Expecting { products: [ { name, price, category }, ... ] }
    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'products must be an array' });
    }
    try {
        const result = await pool.query('select * from cart inner join products on cart.productid=products.id')
        res.status(201).json(result.rows);
    } catch (error) {
        console.error('Error adding products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const submitCart = async (req, res) => {
    const products = req.body; // Expecting { products: [ { name, price, category }, ... ] }
    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'products must be an array' });
    }
    try {
        const inserted = [];
        for (const item of products) {
            const { product, price } = item;
            const result = await pool.query(
                'INSERT INTO cart (product, price) VALUES ($1, $2) RETURNING *', [product, price]);
            inserted.push(result.rows[0]);
        }
        res.status(201).json(inserted);
    } catch (error) {
        console.error('Error adding products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}