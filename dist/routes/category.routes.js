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
const express = require("express");
const router = express.Router();
exports.router = router;
const category_controller_1 = require("../controllers/category.controller");
router.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Chamada na API de categoria');
    next();
}));
router.get('/', category_controller_1.getCategories);
router.get('/:id', category_controller_1.getCategory);
router.get('/:id/products', category_controller_1.getCategoryProducts);
console.log('4. ###### CATEGORY ROUTES');
//# sourceMappingURL=category.routes.js.map