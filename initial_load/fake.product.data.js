"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker/locale/pt_BR');
var product_model_1 = require("../model/product.model");
// leitura de parametros do properties
var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('app.properties');
var getProperty = function (pty) { return prop.get(pty); };
var qty_produtos = getProperty('qty_produtos');
var Products = [];
exports.Products = Products;
console.log('Creating Product Fake Data');
for (var i = 1; i <= qty_produtos; i++) {
    var p = new product_model_1.Product(i, faker.commerce.product(), faker.commerce.color(), faker.commerce.department(), faker.commerce.productName(), parseInt(faker.commerce.price(), 10), faker.commerce.productAdjective(), faker.commerce.productMaterial(), [{ chave: 'cor', valor: faker.commerce.color() },
        { chave: 'tamanho', valor: 'P' },
        { chave: 'preco', valor: parseInt(faker.commerce.price(), 10) },
        { chave: 'material', valor: faker.commerce.productMaterial() }]);
    Products.push(p);
}
//# sourceMappingURL=fake.product.data.js.map