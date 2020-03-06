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
// const ProductService = require('../services/product.service')
const product_service_1 = require("../services/product.service");
console.log('3. ###### PRODUCT CONTROLLER');
const getProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page, 0);
        const limit = parseInt(req.query.limit, 0);
        const products = yield product_service_1.getProducts(page, limit);
        res.send(products);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getProducts = getProductsController;
const getProductDetailsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const products = yield product_service_1.getProductDetails(productId);
        res.send(products);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getProductDetails = getProductDetailsController;
const setProductsCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.body;
        const idCategory = req.params.id;
        const result = yield product_service_1.setProductsCategory(query, idCategory);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
exports.setProductsCategory = setProductsCategoryController;
//# sourceMappingURL=product.controller.js.map