var express = require('express');
var router = express.Router();

var ProductController = require('../controllers/product.controller')

router.use(async function(req, res, next) {
    console.log('Something is happening.');
    next();
  });

router.get('/products', async function(req, res, next) {
    try {
        res.send(await ProductController.getProducts());

        // IF elses
    } catch (error) {
        console.log(error);
    }
  });

console.log('4. ###### ROUTES');
module.exports.router = router;