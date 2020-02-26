// tslint:disable: no-console

import express = require('express');
const router = express.Router();

import { getCategories, getCategory, getCategoryProducts } from '../controllers/category.controller';

router.use(async (req, res, next) => {
    console.log('Chamada na API de categoria');
    next();
  });

router.get('/', getCategories);
router.get('/:id', getCategory)
router.get('/:id/products', getCategoryProducts)

console.log('4. ###### CATEGORY ROUTES');
export {router}