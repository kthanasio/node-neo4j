var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/product.controller')

router.use(async function(req, res, next) {
    console.log('Something is happening.');
    next();
  });

router.get('/products', ProductController.getProducts);

router.get('/products/:id',ProductController.getProductsById);

router.post('/products/categories/:idCategory',ProductController.setProductsCategory);

console.log('4. ###### ROUTES');
module.exports.router = router;