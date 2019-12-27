var Product = require('../model/product.model')

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
var getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');
const node_label = getProperty('neo4j.node_label');

console.log('2. ###### SERVICE');

exports.getProducts = async function () {
    try {
        const query_data = `match (a:${node_label}) where a.color = $color and a.price > 100 and a.price < 250 return a.sku, a.name, a.dco, a.color`;
        const params = {color: 'white'};
        const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
        const session = driver.session();

        var resultado = await session.run(query_data,params)
            .then(function (result){
            session.close();
            driver.close();
            return result
            });
        return resultado;
    } catch (error) {
        throw Error('Error while Paginating Products: ' + error)
    }
}

