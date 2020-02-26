// tslint:disable:no-console
import faker  =  require('faker/locale/pt_BR');
import { Product } from '../../model/product.model';
import { GetProperty } from '../../services/utils/GetProperty';

const Products = {products:[]};

async function FakeProductData () {

  const qtyProducts = await GetProperty('qtyProducts')
                             .then(a=>{return a;});

  console.log("Quantidade de produtos: " + qtyProducts);
  console.log('Creating Product Fake Data');
  for (let i=1;i<=qtyProducts;i++) {
      const _color = faker.commerce.color();
      const _product = faker.commerce.product();
      const _departamento = faker.commerce.department();
      const _productName = faker.commerce.productName();
      const _productAdjective = faker.commerce.productAdjective();
      const _tamanho = (i%8)+1;
      const _preco = parseInt (faker.commerce.price(), 10);
      const _material = faker.commerce.productMaterial();
      const produto = new Product(i
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

// console.log('Created Product Fake Data: ' + JSON.stringify(Products));

export { FakeProductData }

// FakeProductData().then(a=>console.log(a));