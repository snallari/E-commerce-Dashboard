import express from 'express';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productController.js';
const router = express.Router();

router.use(function(err, req, res, next) {
    // Handle the error, next has to stay
    res.status(500).send('Internal Server Error -route middle');
    next();
})

router.get('/getProducts', getProducts)

router.post('/addProduct', addProduct)

router.post('/updateProduct', updateProduct)

router.delete('/deleteProduct', deleteProduct);


export default router