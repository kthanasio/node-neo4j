const Product = require('../model/product.model')

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

exports.setProductsCategory = async function(query) {
    try {
        
        const query_data = query;
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
