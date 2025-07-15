import pool from '../routes/db.js';

export const getProducts = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY category ASC');
        res.status(200).json(result.rows);
    } catch (error) {
        next(error);
    }
};

export const addProduct = async (req, res, next) => {
    try {
        const { product, price, producttype, category } = req.body;
        const result = await pool.query('INSERT INTO products (product, price, producttype, category) VALUES ($1, $2, $3, $4) RETURNING *', [product, price, producttype, category]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const { producttype, id } = req.body;
        const result = await pool.query('UPDATE products SET producttype = $1 WHERE id = $2 RETURNING *', [producttype, id]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.body;
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted', product: result.rows[0] });
    } catch (error) {
        next(error);
    }
};