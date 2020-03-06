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
const faker = require("faker/locale/pt_BR");
const product_model_1 = require("../../model/product.model");
const GetProperty_1 = require("../../services/utils/GetProperty");
const Products = { products: [] };
function FakeProductData() {
    return __awaiter(this, void 0, void 0, function* () {
        const qtyProducts = yield GetProperty_1.GetProperty('qtyProducts')
            .then(a => { return a; });
        console.log("Quantidade de produtos: " + qtyProducts);
        console.log('Creating Product Fake Data');
        for (let i = 1; i <= qtyProducts; i++) {
            const _color = faker.commerce.color();
            const _product = faker.commerce.product();
            const _departamento = faker.commerce.department();
            const _productName = faker.commerce.productName();
            const _productAdjective = faker.commerce.productAdjective();
            const _tamanho = (i % 8) + 1;
            const _preco = parseInt(faker.commerce.price(), 10);
            const _material = faker.commerce.productMaterial();
            const produto = new product_model_1.Product(i, _product, _color, _departamento, _productName, _preco, _productAdjective, _material, [{ chave: 'cor', valor: _color },
                { chave: 'department', valor: _departamento },
                { chave: 'productName', valor: _productName },
                { chave: 'productAdjective', valor: _productAdjective },
                { chave: 'tamanho', valor: _tamanho },
                { chave: 'preco', valor: _preco },
                { chave: 'material', valor: _material }]);
            Products.products.push(produto);
        }
        return Products;
    });
}
exports.FakeProductData = FakeProductData;
// FakeProductData().then(a=>console.log(a));
//# sourceMappingURL=fake.product.data.js.map