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
console.log('2. ###### PRODUCT SERVICE');
const getProducts = (page, limit = 100) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let queryData;
        let pagination;
        if (page <= 1) {
            pagination = 0;
        }
        else if (page > 1) {
            pagination = (page - 1) * limit;
        }
        if (pagination) {
            queryData = `match (a:Product) return a order by a.sku skip ${pagination} limit ${limit}`;
        }
        else {
            queryData = `match (a:Product) return a order by a.sku limit ${limit}`;
        }
        return yield ExecutarCypherQuery_1.ExecutarCypherQuery(queryData);
    }
    catch (error) {
        throw Error('Error while Paginating Products: ' + error);
    }
});
exports.getProducts = getProducts;
const getProductDetails = (idProduct) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = `match (a:Product) where a.sku = ${idProduct} return a`;
        return yield ExecutarCypherQuery_1.ExecutarCypherQuery(queryData);
    }
    catch (error) {
        throw Error('Error while Paginating Products: ' + error);
    }
});
exports.getProductDetails = getProductDetails;
const setProductsCategory = (query, idCategory) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* exemplo de request esperado
         * MATCH (p:Product)- ->(a:cor) where a.valor = 'red' with p {"cor": {"$eq": "red"}
         * eq -> { label: { "$eq": "value" } } -> {"cor": {"$eq": "red"}
         * gt -> { label: { "$gt": "value" } } -> {"preco": {"$gt": 100}
         * gte -> { label: { "$gte": "value" } } -> {"preco": {"$gte": 100}
         * in -> { label: { "$in": ["red", "blue", "black" ] } } -> { "cor": { "$in": ["red", "blue", "black" ] } }
         * lt -> { label: { "$lt": "value" } } -> {"preco": {"$lt": 100}
         * lte -> { label: { "$lte": "value" } } -> {"preco": {"$lte": 100}
         * ne -> { label: { "$ne": "value" } } -> {"cor": {"$ne": "black"}
         * nin -> { label: { "$nin": ["white" ] } } -> { "cor": { "$nin": ["white" ] } }
         */
        // const queryConvertida = ConvertQueryToCypher(query);
        // console.log(queryConvertida);
        const productFilter = query;
        const categoryFilter = `match (c:Category {id: ${idCategory}}) return p,c`;
        const apocStat = productFilter + ' ' + categoryFilter;
        const mergeStat = `merge (p)-[:PERTENCE_CATEGORIA]->(c)`;
        const processamento = `{batchSize:10000, parallel:false}`;
        const execData = `call apoc.periodic.iterate("${apocStat}",
                                                           "${mergeStat}",
                                                           ${processamento});`;
        console.log(execData);
        return yield ExecutarCypherQuery_1.ExecutarCypherQuery(execData);
    }
    catch (error) {
        throw Error('Error while Paginating Products: ' + error);
    }
});
exports.setProductsCategory = setProductsCategory;
//# sourceMappingURL=product.service.js.map