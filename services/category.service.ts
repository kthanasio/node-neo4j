// tslint:disable:no-console
import { ExecutarCypherQuery } from './utils/ExecutarCypherQuery';

console.log('2. ###### CATEGORY SERVICE');

const getCategories = async () => {
    try {
        const queryData = `match (a:Category) return a`;
        return await ExecutarCypherQuery(queryData);
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}
const getCategory = async (id: string) => {
    try {
        const queryData = `match (a:Category {id: ${id}}) return a`;
        return await ExecutarCypherQuery(queryData);
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}
const getCategoryProducts = async (id:string ) => {
    try {
        const queryData = `MATCH (prd:Product)-[r:PERTENCE_CATEGORIA]->(c:Category {id: ${id}}) with count(prd.sku) as total, collect(prd.sku) as sku, c.id as id_category, c.name as name_category RETURN id_category,name_category,total,sku`;
        return await ExecutarCypherQuery(queryData);
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}

export {getCategories, getCategory, getCategoryProducts}