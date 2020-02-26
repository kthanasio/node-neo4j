// tslint:disable: no-console

import { getCategories, getCategory, getCategoryProducts } from '../services/category.service';

console.log('3. ###### CATEGORY CONTROLLER');

const getCategoriesController = async (req,res) => {
    try {
        const categories =  await getCategories();
        res.send(categories);
    } catch (e) {
        console.log(e);
    }
}

const getCategoryController = async (req,res) => {
    try {
        const id = req.params.id;
        const categories =  await getCategory(id);
        res.send(categories);
    } catch (e) {
        console.log(e);
    }
}

const getCategoryProductsController = async (req,res) => {
    try {
        const id = req.params.id;
        const products =  await getCategoryProducts(id);
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}
export {getCategoriesController as getCategories,
        getCategoryController as getCategory,
        getCategoryProductsController as getCategoryProducts}