const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
var getProperty = (pty) => {return prop.get(pty);}

const neo4j = require('neo4j-driver');
const url = getProperty('neo4j.url');
const user = getProperty('neo4j.user');
const password = getProperty('neo4j.password');

const driver = neo4j.driver(url, neo4j.auth.basic(user, password));
const session = driver.session();

const query_data = 'match (a:Produtos) where a.color = $color and a.dco = $dco return a.sku, a.name, a.dco, a.color';
const params = {color: 'red', dco: 'Health'};
try {
  session.run(query_data,params)
         .then(result => {
            session.close();
            console.log(result.records);
            driver.close();
            });
  
} catch (error) {
  console.log(error);
  session.close();
  driver.close();
}

