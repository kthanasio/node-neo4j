"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-console
const express = require("express");
const router = express.Router();
exports.router = router;
const product_controller_1 = require("../controllers/product.controller");
router.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Chamada na API de produto');
    next();
}));
/**
 * This function comment is parsed by doctrine
 * @route GET /products/
 * @group Products - List All Products
 * @returns {object} 200 - An array of products info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', product_controller_1.getProducts);
router.get('/:id', product_controller_1.getProductDetails);
router.post('/categories/:id', product_controller_1.setProductsCategory);
console.log('4. ###### PRODUCT ROUTES');
//# sourceMappingURL=product.routes.js.map