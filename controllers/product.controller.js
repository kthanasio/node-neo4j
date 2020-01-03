var ProductService = require('../services/product.service')

console.log('3. ###### CONTROLLER');

exports.getProducts = async function (req,res) {
    try {
        var products =  await ProductService.getProducts();

        // REQ vira Cypher
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

exports.getProductsById = async function (req,res) {
    try {
        var products =  await ProductService.getProductDetails(req.params.id);
        
        // REQ vira Cypher
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

exports.setProductsCategory = async function (req, res) {
    try {
        var products = await ProductService.setProductsCategory(null,req.params.idCategory);

        res.send(products);
    } catch (error) {
        console.log(error);
    }
}