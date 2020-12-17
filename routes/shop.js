const router = require('express').Router();

const shopController = require('../controllers/shop');
const authController = require('../controllers/auth');

router.get('/products', shopController.getAllProducts);

router.get('/products/:productId', shopController.getProductById);

router.post('/signup', authController.signUp);

router.post('/login', authController.logIn);

module.exports = router;