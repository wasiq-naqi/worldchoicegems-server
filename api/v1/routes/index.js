const express = require('express');
const router = express.Router();
// const { Authenticate, DecodeToken } = require('../middlewares');
const InitializeController = require('./../controllers/initialize/initialize.controller');
const Initialize = new InitializeController();

// INCLUDING ROUTES
const product = require('./product.route');
const category = require('./category.route');
const type = require('./type.route');


// router.get('/', (req, res)=>{
//     res.send('API Page');
// });

//Initialize App
router.route('/')
.get( Initialize.getAppInfo )

// REGESTRING ROUTES
router.use('/products', product);
router.use('/categories', category);
router.use('/types', type);
// router.use('/users', Authenticate, DecodeToken, user);

module.exports = router;
