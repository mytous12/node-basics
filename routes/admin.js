const router = require('express').Router();

const adminController = require('../controllers/admin');

router.post('/add-product', adminController.addProduct);

router.put('/edit-product/:productId', adminController.editProduct);

router.delete('/delete-product/:productId', adminController.deleteProduct);

router.delete('/delete-products', adminController.deleteAllProducts);

module.exports = router;