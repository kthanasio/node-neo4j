var express = require('express');
var router = express.Router();

var CategoryController = require('../controllers/category.controller')

router.use(async function(req, res, next) {
    console.log('Chamada na API de categoria');
    next();
  });

router.get('/',CategoryController.getCategories);
router.get('/:id',CategoryController.getCategory)
router.get('/:id/products',CategoryController.getCategoryProducts)

console.log('4. ###### CATEGORY ROUTES');
module.exports.router = router;