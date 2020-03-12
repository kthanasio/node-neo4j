// tslint:disable: no-console
import { getProductDetails, getProducts, setProductsCategory } from '../services/product.service';
import { Request, Response} from 'express';

console.log('3. ###### PRODUCT CONTROLLER');

const getProductsController = async (req: Request,res: Response) => {
    try {
        const page: number = parseInt(req.query.page,0);
        const limit: number = parseInt(req.query.limit,0);
        const products =  await getProducts(page, limit);
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

const getProductDetailsController = async (req: Request,res: Response) => {
    try {
        const productId = req.params.id;
        const products =  await getProductDetails(productId);
        res.send(products);
    } catch (e) {
        console.log(e);
    }
}

const setProductsCategoryController = async (req: Request,res: Response) => {
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