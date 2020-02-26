// tslint:disable: no-console
// const ProductService = require('../services/product.service')
import { getProductDetails, getProducts, setProductsCategory } from '../services/product.service';

console.log('3. ###### PRODUCT CONTROLLER');

const getProductsController = async (req,res) => {
    try {
        const products =  await getProducts();
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

const getProductDetailsController = async (req,res) => {
    try {
        const productId = req.params.id;
        const products =  await getProductDetails(productId);
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

const setProductsCategoryController = async (req, res) => {
    try {
        const query = req.body;
        const idCategory = req.params.id;
        const result = await setProductsCategory(query,idCategory);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}
export { getProductsController as getProducts,
         getProductDetailsController as getProductDetails,
         setProductsCategoryController as setProductsCategory}