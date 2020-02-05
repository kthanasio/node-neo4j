var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/product.controller')

router.use(async function(req, res, next) {
    console.log('Chamada na API de produto');
    next();
  });

router.get('/', ProductController.getProducts);
router.get('/:id',ProductController.getProductsById);
router.post('/categories/:id',ProductController.setProductsCategory);

console.log('4. ###### PRODUCT ROUTES');
module.exports.router = router;