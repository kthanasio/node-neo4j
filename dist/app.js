"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http']
    },
    basedir: __dirname,
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));
const category_routes_1 = require("./routes/category.routes");
const product_routes_1 = require("./routes/product.routes");
app.use('/products', product_routes_1.router);
app.use('/categories', category_routes_1.router);
expressSwagger(options);
app.listen(3001, () => {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=app.js.map