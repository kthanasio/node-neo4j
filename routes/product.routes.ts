// tslint:disable: no-console
import express = require('express');
const router = express.Router();

import { getProductDetails, getProducts, setProductsCategory } from '../controllers/product.controller';

router.use(async (req, res, next) => {
    console.log('Chamada na API de produto');
    next();
  });

router.get('/', getProducts);
router.get('/:id', getProductDetails);
router.post('/categories/:id', setProductsCategory);

console.log('4. ###### PRODUCT ROUTES');

export { router }