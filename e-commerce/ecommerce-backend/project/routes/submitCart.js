import express from 'express';
import { getCart,submitCart} from '../controllers/cartController.js';
const router = express.Router();
router.use(function(err, req, res, next) {
    // Handle the error, next has to stay
    res.status(500).send('Internal Server Error -route middle');
    next();
})

router.post('/getCart', getCart)
router.post('/submitCart', submitCart)
export default router