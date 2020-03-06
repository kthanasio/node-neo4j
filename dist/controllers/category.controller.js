"use strict";
// tslint:disable: no-console
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
const category_service_1 = require("../services/category.service");
console.log('3. ###### CATEGORY CONTROLLER');
const getCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_service_1.getCategories();
        res.send(categories);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getCategories = getCategoriesController;
const getCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const categories = yield category_service_1.getCategory(id);
        res.send(categories);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getCategory = getCategoryController;
const getCategoryProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const products = yield category_service_1.getCategoryProducts(id);
        res.send(products);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getCategoryProducts = getCategoryProductsController;
//# sourceMappingURL=category.controller.js.map