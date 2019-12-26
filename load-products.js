const productsData = require('./product.data.js');

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
var getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');

const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
const session = driver.session();

const insert_data = 'UNWIND $props AS row CREATE (n:ProdutosPoc) SET n = row';
const params = {props: productsData.getProducts};
try {
  const resultPromise = session.run(insert_data,params);
  resultPromise.then(result => {
    session.close();
    driver.close();
  });
  
} catch (error) {
  console.log(error);
  session.close();
  driver.close();
}
