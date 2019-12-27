var ProductService = require('../services/product.service')

console.log('3. ###### CONTROLLER');

exports.getProducts = async function () {
    try {
        var products =  await ProductService.getProducts();

        // REQ vira Cypher
        return products;
    } catch (e) {
        console.log(e);
    }
}