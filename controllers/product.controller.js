const ProductService = require('../services/product.service')

console.log('3. ###### PRODUCT CONTROLLER');

exports.getProducts = async function (req,res) {
    try {
        const products =  await ProductService.getProducts();
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

exports.getProductsById = async function (req,res) {
    try {
        const products =  await ProductService.getProductDetails(req.params.id);
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

exports.setProductsCategory = async function (req, res) {
    try {
        const query = req.body;
        const products = await ProductService.setProductsCategory(query);
        res.send(products);
    } catch (error) {
        console.log(error);
    }
}