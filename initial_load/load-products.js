"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fake_product_data_1 = require("./fake.product.data");
var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('app.properties');
var getProperty = function (pty) { return prop.get(pty); };
var neo4j = require('neo4j-driver');
var url = getProperty('neo4j.url');
var user = getProperty('neo4j.user');
var password = getProperty('neo4j.password');
var node_label = getProperty('neo4j.node_label');
var driver = neo4j.driver(url, neo4j.auth.basic(user, password));
var session = driver.session();
var insert_data = "UNWIND $products AS row MERGE (n:Product {sku: row.sku})\n                      ON CREATE SET n.product = row.product, n.color = row.color\n                      ON MATCH SET n.product = row.product, n.color = row.color\n                      WITH n,row.atributos as atributos\n                      UNWIND atributos as atributo\n                      WITH n,atributo, \"POSSUI_ATRIBUTO_\" + toUpper(atributo.chave) as relacao\n                      CALL apoc.merge.node([atributo.chave],{valor: atributo.valor}) YIELD node\n                      CALL apoc.create.relationship(n,relacao,{}, node) YIELD rel\n                      RETURN n,node";
var params = { products: fake_product_data_1.Products };
try {
    console.log('Criando base no neo4j');
    var resultPromise = session.run(insert_data, params);
    resultPromise.then(function (result) {
        session.close();
        driver.close();
        console.log('Base criada no neo4j');
    }).catch(function (err) { return console.log(err); });
}
catch (error) {
    console.log(error);
    session.close();
    driver.close();
}
//# sourceMappingURL=load-products.js.map