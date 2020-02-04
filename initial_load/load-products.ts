import { Products } from './fake.product.data';

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
var getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');
const node_label = getProperty('neo4j.node_label');

const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
const session = driver.session();

const insert_data =  `UNWIND $products AS row MERGE (n:Product {sku: row.sku})
                      ON CREATE SET n.product = row.product, n.color = row.color
                      ON MATCH SET n.product = row.product, n.color = row.color
                      WITH n,row.atributos as atributos
                      UNWIND atributos as atributo
                      WITH n,atributo, "POSSUI_ATRIBUTO_" + toUpper(atributo.chave) as relacao
                      CALL apoc.merge.node([atributo.chave],{valor: atributo.valor}) YIELD node
                      CALL apoc.create.relationship(n,relacao,{}, node) YIELD rel
                      RETURN n,node`;
const params = {products: Products};

try {
  console.log('Criando base no neo4j');
  const resultPromise = session.run(insert_data,params);
  resultPromise.then(result => {
    session.close();
    driver.close();
    console.log('Base criada no neo4j');
  }).catch(err => console.log(err));
  
} catch (error) {
  console.log(error);
  session.close();
  driver.close();
}
