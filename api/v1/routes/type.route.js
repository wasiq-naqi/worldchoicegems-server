const express = require('express');
const router = express.Router();
const TypeController = require('./../controllers/type/type.controller');
const Type = new TypeController();

router.route('/')
.get( Type.getAllByPagination )                          // Get all types by pagination

router.route('/:id')
.get( Type.getById )                                    // Get type by id

module.exports = router;