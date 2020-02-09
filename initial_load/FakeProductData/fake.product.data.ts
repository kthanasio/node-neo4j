const faker = require('faker/locale/pt_BR');
import { Product } from '../../model/product.model';
import { GetProperty } from '../../services/utils/GetProperty';

var Products = {products:[]};

async function FakeProductData () {

  const qty_products = await GetProperty('qty_products')
                             .then(a=>{return a;});

  console.log("Quantidade de produtos: " + qty_products);
  console.log('Creating Product Fake Data');
  for (var i=1;i<=qty_products;i++) {
      var _color = faker.commerce.color();
      var _product = faker.commerce.product();
      var _departamento = faker.commerce.department();
      var _productName = faker.commerce.productName();
      var _productAdjective = faker.commerce.productAdjective();
      var _tamanho = (i%8)+1;
      var _preco = parseInt (faker.commerce.price(), 10);
      var _material = faker.commerce.productMaterial();
      var produto = new Product(i
                        ,_product
                        ,_color
                        ,_departamento
                        ,_productName
                        ,_preco
                        ,_productAdjective
                        ,_material
                        ,[{chave: 'cor', valor: _color},
                          {chave: 'department', valor: _departamento},
                          {chave: 'productName', valor: _productName},
                          {chave: 'productAdjective', valor: _productAdjective},
                          {chave: 'tamanho', valor: _tamanho},
                          {chave: 'preco', valor: _preco},
                          {chave: 'material', valor: _material}]);
      
      Products.products.push(produto);
  }
  return Products;
}
//console.log('Created Product Fake Data: ' + JSON.stringify(Products));
export { FakeProductData }

//FakeProductData().then(a=>console.log(a));