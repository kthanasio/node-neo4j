var Product = require('../model/product.model')

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
var getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const parser = require('parse-neo4j');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');
const node_label = getProperty('neo4j.node_label');

console.log('2. ###### SERVICE');

exports.getProducts = async function() {
    try {
        
        const query_data = `match (a:${node_label}) where a.dco = $color return a`; // .sku, a.name, a.dco, a.color, a.marca
        const params = {color: 'Movies'};
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        var resultado = session.run(query_data,params).catch(function(error) {
            console.log(error);
        });
        
        var parsedResult = resultado
            .then(parser.parse)
            .catch(function(parseError) {
                console.log(parseError);
            });    
        return parsedResult;
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}

exports.getProductDetails = async function(id) {
    try {
        console.log('Dentro: '+ id);
        const query_data = `match (a:${node_label}) where a.sku = ${id} return a`; // .sku, a.name, a.dco, a.color, a.marca
        const params = {};
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        var resultado = session.run(query_data,params).catch(function(error) {
            console.log(error);
        });
        
        var parsedResult = resultado
            .then(parser.parse)
            .catch(function(parseError) {
                console.log(parseError);
            });    
        return parsedResult;
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}


exports.setProductsCategory = async function(Query, idCategory) {
    try {
        
        const query_data = `match (a:${node_label}), (c:Category {id: ${idCategory}}) where a.dco = $color create (a)-[r:is_in]->(c) return a.sku,c.name`; // .sku, a.name, a.dco, a.color, a.marca
        const params = {color: 'Grocery'};
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        var resultado = session.run(query_data,params).catch(function(error) {
            console.log(error);
        });
        
        var parsedResult = resultado
            .then(parser.parse)
            .catch(function(parseError) {
                console.log(parseError);
            });    
        return parsedResult;
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}