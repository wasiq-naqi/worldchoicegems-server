const express = require('express');
const router = express.Router();
const CategoryController = require('./../controllers/category/category.controller');
const Category = new CategoryController();

router.route('/')
.get( Category.getAllByPagination )                          // Get all categories by pagination

router.route('/:id')
.get( Category.getById )                                    // Get category by id

module.exports = router;