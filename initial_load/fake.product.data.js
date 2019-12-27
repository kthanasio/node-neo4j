var faker = require('faker/locale/pt_BR');
const qty_nodes = 100000; // qty of nodes to be created with fake product's data
var products = []
console.log('Creating Product Fake Data');
for (var i=1;i<=qty_nodes;i++) {
    products.push(
                {sku: i,
                 product: faker.commerce.product(), 
                 color: faker.commerce.color(),
                 dco: faker.commerce.department(),
                 name: faker.commerce.productName(),
                 price: parseInt (faker.commerce.price(), 10),
                 marca: faker.commerce.productAdjective(),
                 material: faker.commerce.productMaterial()
                });
}
console.log('Created Product Fake Data');
exports.getProducts = products