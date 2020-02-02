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

const insert_data =  `UNWIND $props AS row MERGE (n:${node_label} {sku: row.sku})
                      ON CREATE SET n.product = row.product
                      ON MATCH SET n.product = row.product
                      WITH n,row.atributos as atributos
                      UNWIND atributos as atributo
                      WITH n,atributo
                      CALL apoc.merge.node([atributo.chave],{chave: atributo.chave, valor: atributo.valor}) YIELD node
                      MERGE (n)-[r:possui_atributo]->(node)`;

//console.log(Products);
const params = {props: Products};

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
