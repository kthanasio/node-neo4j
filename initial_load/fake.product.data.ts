var faker = require('faker/locale/pt_BR');
import { Product } from '../model/product.model';

// leitura de parametros do properties
const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
var getProperty = (pty) => {return prop.get(pty);}
const qty_produtos = getProperty('qty_produtos');

var Products = []
console.log('Creating Product Fake Data');
for (var i=1;i<=qty_produtos;i++) {
    var p = new Product(i
                       ,faker.commerce.product()
                       ,faker.commerce.color()
                       ,faker.commerce.department()
                       ,faker.commerce.productName()
                       ,parseInt (faker.commerce.price(), 10)
                       ,faker.commerce.productAdjective()
                       ,faker.commerce.productMaterial()
                       ,[{chave: 'cor', valor: faker.commerce.color()},
                         {chave: 'tamanho', valor: 'P'},
                         {chave: 'preco', valor: parseInt (faker.commerce.price(), 10)},
                         {chave: 'material', valor: faker.commerce.productMaterial()}]);
    
    Products.push(p);
}
//console.log('Created Product Fake Data' + JSON.stringify(Products));
export { Products }