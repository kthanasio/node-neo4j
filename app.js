var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/products',require('./routes/product.routes').router);
app.use('/categories',require('./routes/category.routes').router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});