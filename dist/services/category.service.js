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
// tslint:disable:no-console
const ExecutarCypherQuery_1 = require("./utils/ExecutarCypherQuery");
console.log('2. ###### CATEGORY SERVICE');
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = `match (a:Category) return a`;
        return yield ExecutarCypherQuery_1.ExecutarCypherQuery(queryData);
    }
    catch (error) {
        throw Error('Error while Paginating Products: ' + error);
    }
});
exports.getCategories = getCategories;
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = `match (a:Category {id: ${id}}) return a`;
        return yield ExecutarCypherQuery_1.ExecutarCypherQuery(queryData);
    }
    catch (error) {
        throw Error('Error while Paginating Products: ' + error);
    }
});
exports.getCategory = getCategory;
const getCategoryProducts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = `MATCH (prd:Product)-[r:PERTENCE_CATEGORIA]->(c:Category {id: ${id}}) with count(prd.sku) as total, collect(prd.sku) as sku, c.id as id_category, c.name as name_category RETURN id_category,name_category,total,sku`;
        return yield ExecutarCypherQuery_1.ExecutarCypherQuery(queryData);
    }
    catch (error) {
        throw Error('Error while Paginating Products: ' + error);
    }
});
exports.getCategoryProducts = getCategoryProducts;
//# sourceMappingURL=category.service.js.map