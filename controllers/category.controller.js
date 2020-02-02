const CategoryService = require('../services/category.service')

console.log('3. ###### CATEGORY CONTROLLER');

exports.getCategories = async function (req,res) {
    try {
        const categories =  await CategoryService.getCategories();
        res.send(categories);
    } catch (e) {
        console.log(e);
    }
}

exports.getCategory = async function (req,res) {
    try {
        const id = req.params.id;
        const categories =  await CategoryService.getCategory(id);
        res.send(categories);
    } catch (e) {
        console.log(e);
    }
}

exports.getCategoryProducts = async function (req,res) {
    try {
        const id = req.params.id;
        const products =  await CategoryService.getCategoryProducts(id);
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}