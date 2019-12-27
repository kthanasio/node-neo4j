var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/product.controller')

router.use(async function(req, res, next) {
    console.log('Something is happening.');
    next();
  });

router.get('/products', async function(req, res, next) {
    console.log('Chamou o GET: ');
    try {
        res.send(await ProductController.getProducts());
    } catch (error) {
        console.log(error);
    }
    next();
  });

console.log('4. ###### ROUTES');
module.exports.router = router;