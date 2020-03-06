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
const fake_product_data_1 = require("../FakeProductData/fake.product.data");
const _ = require("underscore");
const RunLoad_1 = require("./RunLoad");
const GetProperty_1 = require("../../services/utils/GetProperty");
const Now_1 = require("../../services/utils/Now");
function LoadProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const params = { products: [] };
        const batchSize = yield GetProperty_1.GetProperty('batch_size').then(a => { return parseInt(a.toString(), 10); });
        const products = yield fake_product_data_1.FakeProductData().then(produtos => { return produtos; });
        const totalProdutos = _.keys(products.products).length;
        let i = 0;
        let cont = 0;
        for (i = 0; i < totalProdutos; i += batchSize) {
            cont += 1;
            console.log(`${Now_1.Now()} -  Step ${cont} / ` + totalProdutos / batchSize);
            params.products = products.products.slice(i, i + Math.min(totalProdutos, batchSize));
            // console.log(JSON.stringify(params));
            yield RunLoad_1.RunLoad(params)
                .then(a => { return a; })
                .catch(err => { console.log(err); });
        }
    });
}
LoadProducts().then(() => { console.log('Completed'); });
//# sourceMappingURL=LoadProductsData.js.map