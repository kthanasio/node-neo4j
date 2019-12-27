var products = require('./controllers/product.controller');

var resultado =  products.getProducts();
console.log(resultado);
// var a = resultado.then(function(result) {
//     console.log(result);
//     return result;
// });