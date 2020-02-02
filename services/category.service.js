const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
const getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const parser = require('parse-neo4j');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');

console.log('2. ###### CATEGORY SERVICE');

exports.getCategories = async function() {
    try {
        const query_data = `match (a:Category) return a`;
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
exports.getCategory = async function(id) {
    try {
        const query_data = `match (a:Category {id: ${id}}) return a`;
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
exports.getCategoryProducts = async function(id) {
    try {
        const query_data = `MATCH (prd:Product)-[r:pertence]->(c:Category {id: ${id}}) with collect(prd.sku) as sku, c.id as id_category, c.name as name_category RETURN id_category,name_category,sku`;
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