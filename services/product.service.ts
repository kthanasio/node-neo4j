// tslint:disable:no-console
import { ExecutarCypherQuery } from './utils/ExecutarCypherQuery';

console.log('2. ###### PRODUCT SERVICE');

const getProducts = async () => {
    try {
        const queryData = `match (a:Product) return a limit 100`;
        return await ExecutarCypherQuery(queryData);
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}
const getProductDetails = async (idProduct: string) => {
    try {
        const queryData = `match (a:Product) where a.sku = ${idProduct} return a`;
        return await ExecutarCypherQuery(queryData);
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}

const setProductsCategory = async (query: string,idCategory: string)=>  {
    try {
        /* exemplo de request esperado
         * MATCH (p:Product)- ->(a:cor) where a.valor = 'red' with p {"cor": {"$eq": "red"}
         * eq -> { label: { "$eq": "value" } } -> {"cor": {"$eq": "red"}
         * gt -> { label: { "$gt": "value" } } -> {"preco": {"$gt": 100}
         * gte -> { label: { "$gte": "value" } } -> {"preco": {"$gte": 100}
         * in -> { label: { "$in": ["red", "blue", "black" ] } } -> { "cor": { "$in": ["red", "blue", "black" ] } }
         * lt -> { label: { "$lt": "value" } } -> {"preco": {"$lt": 100}
         * lte -> { label: { "$lte": "value" } } -> {"preco": {"$lte": 100}
         * ne -> { label: { "$ne": "value" } } -> {"cor": {"$ne": "black"}
         * nin -> { label: { "$nin": ["white" ] } } -> { "cor": { "$nin": ["white" ] } }
         */

        // const queryConvertida = ConvertQueryToCypher(query);
        // console.log(queryConvertida);
        const productFilter  = query;
        const categoryFilter = `match (c:Category {id: ${idCategory}}) return p,c`;
        const apocStat       = productFilter + ' ' + categoryFilter;
        const mergeStat      = `merge (p)-[:PERTENCE_CATEGORIA]->(c)`;
        const processamento  = `{batchSize:10000, parallel:false}`;
        const execData       = `call apoc.periodic.iterate("${apocStat}",
                                                           "${mergeStat}",
                                                           ${processamento});`;
        console.log(execData);
        return await ExecutarCypherQuery(execData);

    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}
export { getProducts, getProductDetails, setProductsCategory }