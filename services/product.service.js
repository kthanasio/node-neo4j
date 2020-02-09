const Product = require('../model/product.model')
const ConvertQueryToCypher = require ('./utils/convert_query_to_cypher');

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
const getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const parser = require('parse-neo4j');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');
const node_label = getProperty('neo4j.node_label');

console.log('2. ###### PRODUCT SERVICE');

exports.getProducts = async function() {
    try {
        
        const query_data = `match (a:Product) return a`;
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        const resultado = session.run(query_data).catch(function(error) {
            console.log(error);
        });
        
        const parsedResult = resultado
            .then(parser.parse)
            .catch(function(parseError) {
                console.log(parseError);
            });    
        return parsedResult;
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}

exports.getProductDetails = async function(idProduct) {
    try {
        
        const query_data = `match (a:Product) where a.sku = ${idProduct} return a`;
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        const resultado = session.run(query_data).catch(function(error) {
            console.log(error);
        });
        
        const parsedResult = resultado
            .then(parser.parse)
            .catch(function(parseError) {
                console.log(parseError);
            });    
        return parsedResult;
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}

exports.setProductsCategory = async function(query,idCategory) {
    try {
        /* exemplo de request esperado
         * MATCH (p:Product)- ->(a:cor) where a.valor = 'red' with p {"cor": {"$eq": "red"}
         * 
         * 
         * eq -> { label: { "$eq": "value" } } -> {"cor": {"$eq": "red"}
         * gt -> { label: { "$gt": "value" } } -> {"preco": {"$gt": 100}
         * gte -> { label: { "$gte": "value" } } -> {"preco": {"$gte": 100}
         * in -> { label: { "$in": ["red", "blue", "black" ] } } -> { "cor": { "$in": ["red", "blue", "black" ] } }
         * lt -> { label: { "$lt": "value" } } -> {"preco": {"$lt": 100}
         * lte -> { label: { "$lte": "value" } } -> {"preco": {"$lte": 100}
         * ne -> { label: { "$ne": "value" } } -> {"cor": {"$ne": "black"}
         * nin -> { label: { "$nin": ["white" ] } } -> { "cor": { "$nin": ["white" ] } }
         * 
         */
        const queryConvertida = ConvertQueryToCypher(query);
        console.log(queryConvertida);
        const productFilter  = query;
        const categoryFilter = `match (c:Category {id: ${idCategory}}) return p,c`;
        const apocStart      = productFilter + ' ' + categoryFilter;
        
        console.log(apocStart);

        const mergeStat      = `merge (p)-[:PERTENCE_CATEGORIA]->(c)`;
        const processamento  = `{batchSize:10000, parallel:false}`;

        const exec_data      = `call apoc.periodic.iterate("${apocStart}", 
                                                           "${mergeStat}",
                                                           ${processamento});`;
        console.log(exec_data);
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        const resultado =  session.run(exec_data).catch(function(error) {
            console.log(error);
        });
        
        const parsedResult = resultado
            .then(parser.parse)
            .catch(function(parseError) {
                console.log(parseError);
            });    
        return parsedResult;
        
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}
