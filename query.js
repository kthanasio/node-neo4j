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

//const query_data = 'match (a:ProdutosPoc2) where a.color = $color and a.dco = $dco return a.sku, a.name, a.dco, a.color';
const query_data = `match (a:${node_label}) where a.color = $color and a.price > 100 and a.price < 250 return a.sku, a.name, a.dco, a.color`;
const params = {color: 'white'}//{color: 'white', dco: 'Health'};
var resultado = [];
try {
   session.run(query_data,params)
         .then(function (result){
          session.close();
          driver.close();
          resultado.push(result);
      });
  
} catch (error) {
  console.log(error);
  session.close();
  driver.close();
}

exports.getProducts = resultado;