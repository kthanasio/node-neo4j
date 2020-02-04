"use strict";
exports.__esModule = true;
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
    var _color = faker.commerce.color();
    var _product = faker.commerce.product();
    var _departamento = faker.commerce.department();
    var p = new product_model_1.Product(i, _product, _color, _departamento, faker.commerce.productName(), parseInt(faker.commerce.price(), 10), faker.commerce.productAdjective(), faker.commerce.productMaterial(), [{ chave: 'cor', valor: _color },
        { chave: 'department', valor: _departamento },
        { chave: 'productName', valor: faker.commerce.productName() },
        { chave: 'productAdjective', valor: faker.commerce.productAdjective() },
        { chave: 'tamanho', valor: (i % 8) + 1 },
        { chave: 'preco', valor: parseInt(faker.commerce.price(), 10) },
        { chave: 'material', valor: faker.commerce.productMaterial() }]);
    Products.push(p);
}
