// tslint:disable: no-console
import express = require('express');
const router = express.Router();

import { getProductDetails, getProducts, setProductsCategory } from '../controllers/product.controller';
import { Product } from '../model/product.model';

router.use(async (req, res, next) => {
    console.log('Chamada na API de produto');
    next();
  });

/**
 * This function comment is parsed by doctrine
 * @route GET /products/
 * @group Products - List All Products
 * @returns {object} 200 - An array of products info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', getProducts);

router.get('/:id', getProductDetails);
router.post('/categories/:id', setProductsCategory);

console.log('4. ###### PRODUCT ROUTES');

export { router }