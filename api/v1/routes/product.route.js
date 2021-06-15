const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/product/product.controller');
const Product = new ProductController();

router.route('/')
.get( Product.getAllByPagination )                          // Get all products by pagination

router.route('/feature')
.get( Product.getAllFeatureByPagination )                   // Get all feature by pagination

router.route('/:id')
.get( Product.getProductById )                   // Get product by id

module.exports = router;