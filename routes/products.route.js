const express = require('express');
const router = express.Router();
const { getProducts, getProductsId, postProducts, updateProducts,
    deleteProducts } = '../controller/product.controller.js'



router.get('/', getProducts);
router.get('/:id', getProductsId);
router.post('/', postProducts);
//product Update
router.get('/:id', updateProducts);
//product delete
router.get('/:id', deleteProducts);

module.exports = router;