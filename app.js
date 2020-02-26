"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));
var category_routes_1 = require("./routes/category.routes");
var product_routes_1 = require("./routes/product.routes");
app.use('/products', product_routes_1.router);
app.use('/categories', category_routes_1.router);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=app.js.map