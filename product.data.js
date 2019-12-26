var faker = require('faker/locale/pt_BR');
const qtd_produtos = 500000;
var products = []
console.log('Creating Product Fake Data');
for (var i=1;i<=qtd_produtos;i++) {
    products.push(
                {sku: i,
                 product: faker.commerce.product(), 
                 color: faker.commerce.color(),
                 dco: faker.commerce.department(),
                 name: faker.commerce.productName(),
                 price: faker.commerce.price(),
                 marca: faker.commerce.productAdjective(),
                 material: faker.commerce.productMaterial()
                });
}
console.log('Created Product Fake Data');
exports.getProducts = products